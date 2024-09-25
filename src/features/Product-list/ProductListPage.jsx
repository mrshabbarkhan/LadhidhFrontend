import { useSelector } from "react-redux";
import FavoriteList from "../Favorites/FavoriteList";
import { useParams } from "react-router-dom";
import { useProducts } from "../admin/page/products/useProducts";

function ProductListPage() {
  const { products } = useProducts()
  const param = useParams()

  const filterByCatId = products?.filter(item => item.cat_id === param.id)
  
  if (!filterByCatId.length >0) {
    return <h1 className="text-center text-lg">No Item Found</h1>
  }

  return (
    <>
      {filterByCatId?.map((dtl, index) => (
        <FavoriteList
          key={index}
          id={dtl._id}
          img={dtl.img}
          pack={dtl.pack}
          tittle={dtl.title}
          discount={dtl.discount}
          code={dtl.code}
          price={dtl.price}
        />
      ))}
    </>
  );
}

export default ProductListPage;
