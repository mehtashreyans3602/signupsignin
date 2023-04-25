import "./App.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./components/Modal";
import SIGN_IN from "./components/Sign_In/sign_in";
import SIGN_UP from "./components/Sign_Up/sign_up";
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => {
    setModalOpen(false);
  };
  const open = () => {
    setModalOpen(true);
    setShowSignIn(false);
    setShowSignUp(true);
  };
  const [modalOpen2, setModalOpen2] = useState(false);
  const close2 = () => {
    setModalOpen2(false);
  };
  const open2 = () => {
    setModalOpen2(true);
    setShowSignIn(true);
    setShowSignUp(false);
  };
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <div>
      <motion.button
        className="save-button"
        whileHover={{ scale: 2.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => (modalOpen ? close() : open())}
      >
        Sign_Up
      </motion.button>
      <br />
      <motion.button
        className="save-button"
        whileHover={{ scale: 2.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => (modalOpen2 ? close2() : open2())}
      >
        Sign_In
      </motion.button>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={close}>
            {showSignUp && <SIGN_UP handleClose={close} />}
          </Modal>
        )}
      </AnimatePresence>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen2 && (
          <Modal modalOpen2={modalOpen2} handleClose={close2}>
            {showSignIn && <SIGN_IN handleClose={close2} />}
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
