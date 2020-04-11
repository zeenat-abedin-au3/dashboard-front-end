import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";

import { hideModal } from "../../redux/actions/modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const CustomModal = ({ children }) => {
  const dispatch = useDispatch();
  const { visible } = useSelector((state) => state.auth);

  const closeModal = () => {
    dispatch(hideModal());
  };
  return (
    <Modal
      isOpen={visible}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Dialoge"
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
