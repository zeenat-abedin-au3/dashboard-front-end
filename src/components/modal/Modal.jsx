import React from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    minWidth: "30vw",
  },
};

Modal.setAppElement("#root");

const CustomModal = ({ children }) => {
  const { visible } = useSelector((state) => state.auth);

  return (
    <Modal isOpen={visible} style={customStyles} contentLabel="Dialoge">
      {children}
    </Modal>
  );
};

export default CustomModal;
