import { useNavigate } from "react-router-dom";

function SubCards({ sub, id }) {
  const navigate = useNavigate();
  const handleSubClick = () => {
    navigate(`/product-list/${id}/${sub._id}`);
  };

  return (
    <div
      onClick={handleSubClick}
      className="text-center flex flex-col justify-between items-center  px-1 rounded-md  border-primary w-32"
    >
      <img
        className="w-24  object-cover hover:scale-90 cursor-pointer transition-transform duration-200"
        src={sub.image}
        alt="Category"
      />
      <h1 className="font-semibold">{sub.name}</h1>
    </div>
  );
}

export default SubCards;
