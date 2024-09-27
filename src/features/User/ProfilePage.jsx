import { useSelector } from "react-redux";
import OrderActions from "./OrderActions";
import UserAvatar from "./UserAvatar";
import UserDetails from "./UserDetails";
import UserFooter from "./UserFooter";
// import AuthForm from "../auth/AuthForm";
import RegisterForm from "../auth/RegisterForm";
import LoginForm from "../auth/LoginForm";
import { useState } from "react";
import EditUserDetails from "./EditUserDetails";
import AuthButton from "../auth/AuthButton";
import { useLocalStorage } from "../auth/LocalStorageContext";

function ProfilePage() {
  const { user } = useLocalStorage();
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false)

  if (user && showEditForm) {
    return <EditUserDetails user={user} seterFn={setShowEditForm} />;
  }

  return (
    <div>
      {user ? (
        <>
          <div className="flex gap-5">
            <UserAvatar />
            <UserDetails seterFn={setShowEditForm} user={user} />
          </div>
          <section className="flex items-center justify-around py-6 rounded-xl my-4 Profile_List">
            <OrderActions />
          </section>
          <section className="mb-20">
            <UserFooter />
          </section>
        </>
      ) : (
        <AuthButton onClickOverlyHide="true" />
      )}
    </div>
  );
}

export default ProfilePage;
