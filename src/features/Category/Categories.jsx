import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Categories({ product }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isInCategoryPage =
    pathname === "/category"
      ? "h-12 w-12 min-h-12 min-w-12"
      : "h-20 w-20 min-h-20 min-w-20";

  return (
    <motion.div
      className="cursor-pointer"
      onClick={() => navigate(`/product-list/${product.cat_id}`)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.img
        className={`${isInCategoryPage} h-16 w-16 min-h-16 min-w-16 rounded-full overflow-visible sm:h-24 sm:w-24 object-center m-auto sm:min-h-24 sm:min-w-24 drop-shadow-xl`}
        src={product?.img}
        alt={product?.name}
      />
      <motion.p
        className="font-medium text-center text-sm sm:text-lg line-clamp-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {product?.name}
      </motion.p>
    </motion.div>
  );
}

export default Categories;
