import React, { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
  buttonColor: "green" | "red"; // Color of the button (green for success, red for failure)
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  message,
  onClose,
  buttonColor,
}) => {
  // Disable scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden"); // Disable scroll
    } else {
      document.body.classList.remove("overflow-hidden"); // Enable scroll
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const buttonClass =
    buttonColor === "green"
      ? "bg-green-500 hover:bg-green-600"
      : "bg-red-500 hover:bg-red-600";

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm mx-auto">
        <p className="text-lg font-semibold mb-4 text-black">{message}</p>
        <button
          onClick={onClose}
          className={`${buttonClass} text-white px-4 py-2 rounded`}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
