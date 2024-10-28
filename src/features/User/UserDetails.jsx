import { MdMarkEmailRead } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { BiSolidEdit } from "react-icons/bi";

function UserDetails({ seterFn, user }) {
  const { name, email, number } = user;

  return (
    <div className="flex justify-between grow w-full">
      <div>
        <h1 className="text-xl font-medium line-clamp-1 mb-2">{name}</h1>
        <span className="flex items-center gap-1">
          <MdMarkEmailRead className="text-primary" />
          <p className="text-sm text-slate-400 line-clamp-1">{email}</p>
        </span>
        <span className="flex items-center gap-1 mt-2">
          {number && <LuPhoneCall className="text-primary" />}
          <p className="text-sm text-slate-400 line-clamp-1">{number}</p>
        </span>
      </div>
      <span
        onClick={() => seterFn(true)}
        className="text-xl m-2 cursor-pointer absolute right-0 sm:static"
      >
        <BiSolidEdit />
      </span>
    </div>
  );
}

export default UserDetails;
