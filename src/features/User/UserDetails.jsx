import { MdMarkEmailRead } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";

function UserDetails({seterFn, user }) {
  const { name, email, number } = user

    return (
      <div className="flex justify-between grow">
        <div>
          <h1 className="text-xl font-medium">{name}</h1>
          <span className="flex items-center gap-1">
            <MdMarkEmailRead className="text-primary" />
            <p className="text-sm text-slate-400">{email}</p>
          </span>
          <span className="flex items-center gap-1 mt-2">
            {number && <LuPhoneCall className="text-primary" />}
            <p className="text-sm text-slate-400">{number}</p>
          </span>
        </div>
        <i
          onClick={() => seterFn(true)}
          className="fa-regular fa-pen-to-square m-2 cursor-pointer"
        ></i>
      </div>
    );
}

export default UserDetails
