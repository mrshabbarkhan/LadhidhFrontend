import { useState } from "react";
import Settings from "./Settings";
import { motion } from "framer-motion";
import Coupan from "./Coupan";
import useCoupan from "./useCoupan";
import Badge from "../../../../components/Badge";
function SettingsLayout() {
  const [showCoupan, setShowCoupan] = useState(false);
  const { data: coupans, isPending } = useCoupan();

  return (
    <section>
      <div className="relative flex items-center border w-72 rounded-md shadow-md overflow-hidden">
        <motion.div
          className="absolute top-0 h-full w-1/2 bg-gray-100"
          animate={{ x: showCoupan ? "100%" : "0%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        <button
          className={`relative z-10 px-5 py-1 ${
            !showCoupan ? "text-black" : "text-gray-500"
          }`}
          onClick={() => setShowCoupan(false)}
        >
          Delivery Charge
        </button>

        <button
          className={`relative z-10 px-5 py-1 ${
            showCoupan ? "text-black" : "text-gray-500"
          }`}
          onClick={() => setShowCoupan(true)}
        >
          <Badge data={coupans} className={"left-20"} />
          Coupans
        </button>
      </div>

      <div className="pt-5">{showCoupan ? <Coupan /> : <Settings />}</div>
    </section>
  );
}

export default SettingsLayout;
