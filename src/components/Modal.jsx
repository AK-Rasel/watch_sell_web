// src/components/Modal.js
import React from "react";

const Modal = ({ show, onClose, imageUrl }) => {
  if (!show) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className=" rounded-lg overflow-hidden  transform transition-all sm:max-w-lg sm:w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              {imageUrl && <img src={imageUrl} alt="Modal Content" />}
            </div>
          </div>
        </div>
        <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button className="bg-white" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
