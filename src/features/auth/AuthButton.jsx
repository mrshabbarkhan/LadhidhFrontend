import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useLocation } from "react-router-dom";
import BackButton from "../../components/BackButton";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { MdCancel } from "react-icons/md";
import { motion } from "framer-motion";

function AuthButton({ onClickOverlyHide = false, initial = false }) {
  const [showForm, setShowForm] = useState(initial);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const location = useLocation();
  const isInCart = location.pathname == "/cart";
  const isInProfile = location.pathname == "/profile";

  const handleClick = (e) => {
    if (!onClickOverlyHide) {
      if (
        typeof e.target.className === "string" &&
        e.target.className.includes("overley")
      ) {
        setShowForm(false);
      }
    }
  };

  const resetStates = () => {
    setShowForm(!showForm);
    setShowRegisterForm(false);
  };

  return (
    <>
      <span
        onClick={() => setShowForm(!showForm)}
        className="flex items-center gap-2 text-xl border-2 h-9 w-9 rounded-full cursor-pointer hover:scale-95"
      >
        <HiOutlineUserCircle className="text-6xl" />
      </span>

      {showForm && (
        <div
          onClick={handleClick}
          className="fixed h-[100vh] inset-0 flex items-center justify-center  bg-slate-200 bg-opacity-50 z-50 overley"
        >
          <motion.div
            key="AuthButton"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-xl w-full max-w-md p-8 relative "
          >
            {!onClickOverlyHide && (
              <div className="text-black absolute flex gap-2 items-center right-8 top-5 hover:cursor-pointer ">
                <MdCancel onClick={resetStates} className="text-xl" />
              </div>
            )}
            {(isInCart || isInProfile) && (
              <div className=" left-10 top-5">
                <BackButton>Back</BackButton>
              </div>
            )}
            {showRegisterForm ? (
              <RegisterForm showRegistration={setShowRegisterForm} />
            ) : (
              <LoginForm showRegistration={setShowRegisterForm} />
            )}
          </motion.div>
        </div>
      )}
    </>
  );
}

export default AuthButton;
