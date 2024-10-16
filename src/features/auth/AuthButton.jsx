import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Link, useLocation } from "react-router-dom";
import BackButton from "../../components/BackButton";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { MdCancel } from "react-icons/md";

function AuthButton({ onClickOverlyHide = false }) {
  const [showForm, setShowForm] = useState(true);
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
          className="fixed h-[100vh] inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 overley"
        >
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8 relative ">
            {!onClickOverlyHide && (
              <div className="text-black absolute flex gap-2 items-center right-8 top-5 hover:cursor-pointer">
                <Link
                  to={"/dowanlod"}
                  className="float-end text-sm hover:underline hover:text-blue-700"
                >
                  Downlod our app
                </Link>
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
          </div>
        </div>
      )}
    </>
  );
}

export default AuthButton;
