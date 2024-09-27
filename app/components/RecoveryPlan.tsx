import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css"; // Quill styling
import { jsPDF } from "jspdf"; // Import jsPDF for custom PDF generation
import html2pdf from "html2pdf.js"; // Import html2pdf.js for HTML to PDF conversion
import { saveAs } from "file-saver"; // Import file-saver for file saving
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  ImageRun,
  AlignmentType,
  Header,
} from "docx"; // Import docx components

// Dynamically import ReactQuill to avoid issues with SSR in Next.js
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// Toolbar options for the editor
const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  ["link", "image", "video", "formula"],
  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction
  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],
  ["clean"], // remove formatting button
];

// Helper function to extract plain text and images from HTML content
const extractContentFromHtml = (html: string) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const paragraphs: Paragraph[] = [];
  const imagePromises: Promise<{
    image: ArrayBuffer;
    width: number;
    height: number;
  }>[] = [];

  doc.body.childNodes.forEach((node) => {
    // Handle text nodes (paragraphs, divs)
    if (node.nodeName === "P" || node.nodeName === "DIV") {
      const textContent = node.textContent || "";
      paragraphs.push(new Paragraph({ children: [new TextRun(textContent)] }));
    }

    // Handle image nodes
    if (node.nodeName === "IMG") {
      const img = node as HTMLImageElement;
      const imgSrc = img.src;

      if (imgSrc.startsWith("data:image/")) {
        const promise = fetch(imgSrc)
          .then((res) => res.blob())
          .then((blob) => blob.arrayBuffer())
          .then((buffer) => ({
            image: buffer,
            width: 300, // Set image width for DOCX
            height: (300 * img.height) / img.width, // Keep the aspect ratio
          }));

        imagePromises.push(promise);
      }
    }
  });

  return { paragraphs, imagePromises };
};

const RecoveryPlan: React.FC = () => {
  const [content, setContent] = useState<string>("");

  // Function to handle PDF generation with a logo
  const handleDownloadPDF = async () => {
    const doc = new jsPDF("p", "mm", "a4");
    const logoUrl =
      "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/logo.png"; // Logo URL

    // Add the logo to the header of the first page
    const img = new Image();
    img.src = logoUrl;

    // Wait until the image is loaded
    img.onload = async () => {
      const pdfWidth = 210; // A4 page width in mm
      const logoWidthPercentage = 25; // Set the logo width as a percentage of the PDF width (e.g., 25%)
      const logoWidth = (pdfWidth * logoWidthPercentage) / 100; // Logo width in mm
      const logoHeight = (img.height / img.width) * logoWidth; // Maintain aspect ratio

      // Center the logo horizontally
      const logoX = (pdfWidth - logoWidth) / 2; // Calculate x position to center the logo

      // Now handle the rich text content (preserving text size, alignment, etc.)
      const element = document.createElement("div");
      element.innerHTML = `<div style="margin-top: ${
        logoHeight + 15
      }px;">${content}</div>`;

      // Attach the element to the DOM temporarily to ensure it's fully rendered
      document.body.appendChild(element);

      // Options for html2pdf to convert the content into a PDF
      const opt = {
        margin: [20, 20, 20, 20], // Add margins to avoid content overlap
        filename: "recovery-plan.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        pagebreak: { mode: ["css", "legacy"] },
      };

      // Generate the content PDF with html2pdf and combine it with the logo
      html2pdf()
        .from(element)
        .set(opt)
        .toPdf()
        .get("pdf")
        .then((pdfObj: jsPDF) => {
          // Add the logo on the first page of the generated content
          pdfObj.setPage(1);
          pdfObj.addImage(img, "PNG", logoX, 10, logoWidth, logoHeight); // Reapply the logo on the first page
          pdfObj.save("recovery-plan.pdf");
        });

      // Remove the temporary HTML element
      document.body.removeChild(element);
    };
  };

  // Function to handle Word document download
  const handleDownloadDocx = async () => {
    const { paragraphs, imagePromises } = extractContentFromHtml(content);

    const logoUrl =
      "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/logo.png";

    // Fetch the logo image to add to the header
    const response = await fetch(logoUrl);
    const imageData = await response.blob();
    const imageArrayBuffer = await imageData.arrayBuffer();

    // Wait for all image promises to resolve (this handles images in the rich text content)
    const imageRuns = await Promise.all(imagePromises);

    // Initialize the document and add the logo to the header, centered
    const doc = new Document({
      sections: [
        {
          headers: {
            default: new Header({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER, // Center the logo
                  children: [
                    new ImageRun({
                      data: imageArrayBuffer,
                      transformation: { width: 100, height: 40 }, // Set logo size
                    }),
                  ],
                }),
              ],
            }),
          },
          children: [
            ...paragraphs,
            ...imageRuns.map(({ image, width, height }) => {
              return new Paragraph({
                children: [
                  new ImageRun({
                    data: image,
                    transformation: { width, height },
                  }),
                ],
              });
            }),
          ],
        },
      ],
    });

    // Pack the document into a blob and save it
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "recovery-plan.docx");
    });
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="my-6">
          <ReactQuill
            value={content}
            onChange={setContent}
            modules={{
              toolbar: toolbarOptions, // Custom toolbar from your example
            }}
            className="bg-white text-gray-800 rounded-lg border-none"
            placeholder="Write something amazing..."
            theme="snow"
          />
        </div>

        {/* Center the buttons */}
        <div className="flex justify-center mt-4 space-x-4">
          <button
            type="button"
            onClick={handleDownloadPDF}
            className="w-1/5 px-4 py-2 bg-orange-400 text-white font-semibold rounded-lg shadow-md hover:bg-orange-300 transition-transform transform hover:scale-105"
          >
            Download as PDF
          </button>
          <button
            type="button"
            onClick={handleDownloadDocx}
            className="w-1/5 px-4 py-2 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-slate-700 transition-transform transform hover:scale-105"
          >
            Download as DOCX
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecoveryPlan;
