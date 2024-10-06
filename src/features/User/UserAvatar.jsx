import UserImage from "../../assets/images/avatar/5.jpg";

function UserAvatar() {
  return (
    <img
      src={UserImage}
      alt="user"
      className="rounded-full ml-3 mt-2 sm:m-0 w-16 h-16 sm:h-auto sm:w-24 border-2 border-slate-300"
    />
  );
}

export default UserAvatar;
