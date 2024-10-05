
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
      {filterByCatId?.map((product, index) => (
        <FavoriteList
          key={product._id}
          product ={product}
        />
      ))}
    </>
  );
}

export default ProductListPage;
