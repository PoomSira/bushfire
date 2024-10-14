import dynamic from "next/dynamic";
import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "react-quill/dist/quill.snow.css";

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

// Toolbar options for the Quill editor
const toolbarOptions = [
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block"],
  ["link", "image", "video", "formula"],
  [{ header: 1 }, { header: 2 }],
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  [{ script: "sub" }, { script: "super" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ direction: "rtl" }],
  [{ size: ["small", false, "large", "huge"] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ color: [] }, { background: [] }],
  [{ font: [] }],
  [{ align: [] }],
  ["clean"],
];

const RecoveryPlan: React.FC = () => {
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const quillRef = useRef<any>(null);

  // Memoize the imageHandler function
  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const quill = quillRef.current?.getEditor();
          const range = quill.getSelection(true);
          quill.insertEmbed(range.index, "image", e.target?.result);
        };
        reader.readAsDataURL(file);
      }
    };
  }, []);

  useEffect(() => {
    if (quillRef.current) {
      const quillEditor = quillRef.current.getEditor();
      quillEditor.getModule("toolbar").addHandler("image", imageHandler);
    }
  }, [imageHandler]);

  const handleDownloadPDF = async () => {
    setIsLoading(true);
    setProgress(0);

    const element = document.createElement("div");
    element.innerHTML = content;
    element.style.width = "210mm";
    element.style.padding = "20mm";
    element.style.backgroundColor = "white";
    element.style.color = "black";
    document.body.appendChild(element);

    setProgress(20);

    const canvas = await html2canvas(element, {
      scale: 4,
      logging: false,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    setProgress(50);

    document.body.removeChild(element);

    const imgData = canvas.toDataURL("image/jpeg", 0.7);

    setProgress(70);

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: true,
    });

    const logoUrl =
      "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/logo.png";
    const logoWidth = 30;
    const logoX = (210 - logoWidth) / 2;
    pdf.addImage(logoUrl, "PNG", logoX, 10, logoWidth, logoWidth * 0.5);

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, (pdfHeight - 25) / imgHeight);
    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    const imgY = 25;

    pdf.addImage(
      imgData,
      "JPEG",
      imgX,
      imgY,
      imgWidth * ratio,
      imgHeight * ratio
    );

    setProgress(90);

    pdf.save("recovery-plan.pdf");

    setProgress(100);
    setTimeout(() => {
      setIsLoading(false);
      setProgress(0);
    }, 1000);
  };

  const modules = useMemo(
    () => ({
      toolbar: toolbarOptions,
    }),
    []
  );

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="my-6">
          <ReactQuill
            value={content}
            onChange={setContent}
            modules={modules}
            className="bg-white text-gray-800 rounded-lg border-none"
            placeholder="Write your recovery plan here..."
            theme="snow"
          />
        </div>

        <div className="flex flex-col items-center mt-4">
          <button
            type="button"
            onClick={handleDownloadPDF}
            className="w-1/5 px-4 py-2 bg-orange-400 text-white font-semibold rounded-lg shadow-md hover:bg-orange-300 transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Generating PDF..." : "Download your plan"}
          </button>
          {isLoading && (
            <div className="w-1/5 mt-4 bg-gray-300 shadow-lg rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-orange-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default RecoveryPlan;
