import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";
import { useCategory } from "../admin/page/Categories/useCategory";

function Category({ children, heading, btn }) {
  const navigate = useNavigate();
  const { isPending } = useCategory();

  return (
    <section className="relative sm:mt-6 ">
      {heading && (
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-xl relative">{heading}  </h1>
          {btn && (
            <button
              onClick={() => navigate("/category")}
              className=" hover:underline px-1 rounded-md"
            >
              View All
            </button>
          )}
        </div>
      )}
      {isPending ? (
        <Loader className={"h-40 w-full"} />
      ) : (
        <div className="categories_img h-32 overflow-y-hidden p_text flex items-center gap-x-16 w-full sm:px-4  sm:mt-6 overflow-auto">
          {children}
        </div>
      )}
    </section>
  );
}

export default Category;
