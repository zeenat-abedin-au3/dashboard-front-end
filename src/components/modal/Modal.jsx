import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import { hideModal } from "../../redux/actions/modal";
const CustomModal = ({ children }) => {
  const { visible } = useSelector((state) => state.auth);

  return (
    <Modal
      open={visible}
      center
      showCloseIcon={false}
      onClose={() => alert("First finish it. ")}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
