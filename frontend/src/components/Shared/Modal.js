import React from "react";

const Modal = ({ show, children }) => {
  return (
    show && (
      <div className="modal">
        <div className="modal-content">{children}</div>
      </div>
    )
  );
};

export default Modal;
