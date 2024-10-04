import { useState } from "react";
import { useLocation } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";


function MenuSvg({ Component }) {
  const path = useLocation()
  const isOnAdmin = path.pathname.startsWith("/admin")
  const [on, setOn] = useState(false)
  return (
    <div onClick={() => setOn(!on)}  className="cursor-pointer ">
      {isOnAdmin ? (
        <i className="fa-solid fa-bars text-xl mx-2"></i>
      ) : (
        <HiBars3BottomRight className="text-2xl text-gray-500 hover:scale-90" />
      )}
      {on && <Component on={on} setOn={setOn} />}
    </div>
  );
}

export default MenuSvg
