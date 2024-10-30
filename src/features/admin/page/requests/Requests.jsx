import { useState } from "react";
import ProductReq from "./ProductReq";
import UserDelReq from "./UserDelReq";

function Requests() {
  const [showRequest, setShowRequest] = useState(true);

  return (
    <div className="container mx-auto p-6">
      <div className="sm:space-x-5 space-y-5 mb-5 transition-all">
        <button
          onClick={() => setShowRequest(true)}
          className={`px-2 py-1 border rounded-md ${
            showRequest ? "bg-primary text-white" : "text-black"
          } `}
        >
          Product Requests
        </button>
        <button
          onClick={() => setShowRequest(false)}
          className={`px-2 py-1 border rounded-md ${
            showRequest ? "text-black" : "bg-primary  text-white"
          }`}
        >
          Account Delete Requests
        </button>
      </div>
      {showRequest ? <ProductReq /> : <UserDelReq />}
    </div>
  );
}

export default Requests;
