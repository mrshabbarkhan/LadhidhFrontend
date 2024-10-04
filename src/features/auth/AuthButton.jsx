import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useLocation } from "react-router-dom";
import BackButton from "../../components/BackButton";
import { HiOutlineUserCircle } from "react-icons/hi2";

function AuthButton({ onClickOverlyHide = false }) {
  const [showForm, setShowForm] = useState(true);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const location = useLocation()
  const isInCart = location.pathname == "/cart"
  const isInProfile = location.pathname == "/profile"

  const handleClick = (e) => {
    if (!onClickOverlyHide) {
      if (e.target.className.includes("overley")) {
        setShowForm(false);
      }
    }
  };

  return (
    <>
      <span
        onClick={() => setShowForm(!showForm)}
        className="flex items-center gap-2 text-xl border-2 h-9 w-9 rounded-full cursor-pointer"
      >
        <HiOutlineUserCircle className="text-6xl" />
      </span>
      {showForm && (
        <div
          onClick={handleClick}
          className="fixed h-[100vh] inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 overley"
        >
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8 relative ">
            {!onClickOverlyHide && (
              <div
                onClick={() => setShowForm(!showForm)}
                className="text-black absolute right-10 top-7 hover:cursor-pointer"
              >
                <i class="fa-regular fa-circle-xmark text-lg"></i>
              </div>
            )}
            {(isInCart || isInProfile) && (
              <div className=" left-10 top-5">
                <BackButton>Back</BackButton>
              </div>
            )}
            {showRegisterForm ? (
              <RegisterForm setRegister={setShowRegisterForm} />
            ) : (
              <LoginForm setRegister={setShowRegisterForm} />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default AuthButton;
