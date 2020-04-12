import React from "react";
import { useSelector } from "react-redux";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const CustomModal = ({ children }) => {
  const { visible } = useSelector((state) => state.auth);

  return (
    <Modal open={visible} center showCloseIcon={false} onClose={() => false}>
      {children}
    </Modal>
  );
};

export default CustomModal;
