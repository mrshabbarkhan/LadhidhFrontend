import OrderActions from "./OrderActions";
import UserAvatar from "./UserAvatar";
import UserDetails from "./UserDetails";
import UserFooter from "./UserFooter";
import { useState } from "react";
import EditUserDetails from "./EditUserDetails";
import AuthButton from "../auth/AuthButton";
import { useLocalStorage } from "../auth/LocalStorageContext";

function ProfilePage() {
  const { user } = useLocalStorage();
  const [showEditForm, setShowEditForm] = useState(false);

  if (user && showEditForm) {
    return <EditUserDetails user={user} seterFn={setShowEditForm} />;
  }

  return (
    <div>
      {user ? (
        <>
          <div className="flex flex-col gap-5 items-center sm:flex-row">
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
