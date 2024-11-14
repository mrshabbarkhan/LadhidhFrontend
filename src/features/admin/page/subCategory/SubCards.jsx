import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function SubCards({ sub, id }) {
  const navigate = useNavigate();
  const handleSubClick = () => {
    navigate(`/product-list/${id}/${sub._id}`);
  };

  return (
    <div
      onClick={handleSubClick}
      className="text-center flex flex-col justify-between items-center px-1 rounded-md border-primary min-w-[8rem] flex-shrink-0"
    >
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="size-24 object-cover hover:scale-90 cursor-pointer transition-transform duration-200 "
        src={sub.image}
        alt="Category"
      />
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-semibold "
      >
        {sub.name}
      </motion.h1>
    </div>
  );
}

export default SubCards;
