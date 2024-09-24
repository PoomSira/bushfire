// import React, { useEffect, useRef } from "react";
// import "quill/dist/quill.snow.css";
// import Quill from "quill";
// import { Download } from "lucide-react";

// const RecoveryPlan: React.FC = () => {
//   const editorRef = useRef<HTMLDivElement>(null);
//   const quillRef = useRef<Quill | null>(null);

//   useEffect(() => {
//     if (editorRef.current && !quillRef.current) {
//       quillRef.current = new Quill(editorRef.current, {
//         theme: "snow",
//         modules: {
//           toolbar: [
//             [{ header: [1, 2, false] }],
//             ["bold", "italic", "underline"],
//             ["image", "code-block"],
//             ["clean"],
//           ],
//         },
//       });

//       quillRef.current.setContents([
//         { insert: "Write your recovery plan\n" },
//         { insert: "\n" },
//       ]);
//     }
//   }, []);

//   const handleDownload = () => {
//     if (quillRef.current) {
//       const content = quillRef.current.getText();
//       const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
//       const url = URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = url;
//       link.download = "recovery_plan.txt";
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       URL.revokeObjectURL(url);
//     }
//   };

//   return (
//     <div className="p-4 w-full max-w-4xl mx-auto">
//       <div className="border rounded-lg bg-white text-black shadow-sm">
//         <div
//           ref={editorRef}
//           className="editor w-full h-[400px] md:h-[500px] lg:h-[600px] p-2"
//         />
//       </div>
//       <button
//         onClick={handleDownload}
//         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center"
//       >
//         <Download className="mr-2" size={20} />
//         Download Plan
//       </button>
//     </div>
//   );
// };

// export default RecoveryPlan;
