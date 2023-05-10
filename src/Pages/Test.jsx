import React from "react";
import Modal from "react-modal";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaSearch,
} from "react-icons/fa";

import { AiOutlineClose } from "react-icons/ai";

const customStyles = {
  content: {
    top: "15%",
    left: "83%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Test = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="hidden lg:flex">
      <button
        class="text-white bg-button hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-3 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={openModal}
      >
        <FaSearch />{" "}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex gap-3 p-4">
          <input
            type="text"
            className="rounded-full border-teal-300 w-96"
            placeholder="Search anything you want."
          />
          <button
            type="button"
            class="text-white bg-button hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-3 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <FaSearch />
          </button>
          <div className="absolute top-0 right-0">
            
            <button
              class="text-white bg-button hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-1 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={closeModal}
            >
              <AiOutlineClose size={15} />{" "}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Test;
