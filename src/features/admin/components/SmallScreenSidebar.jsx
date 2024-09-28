import React from "react";
import AdminSidebar from "./AdminSidebar";

const SmallScreenSidebar = ({ on, setOn }) => {

  return (
    <>
      <div
        className={`dark-overlay active fixed h-full w-full bg-black`}
        onClick={() => setOn(!on)}
      ></div>
      <div
        className={`sidebar fixed inset-y-0 left-0 w-[200px] z-[999999] transition-all duration-500 ${
          on ? "flex" : "hidden"
        } flex-col overflow-y-scroll`}
        onClick={() => setOn(!on)}
      >
        <AdminSidebar />
      </div>
    </>
  );
};

export default SmallScreenSidebar;
