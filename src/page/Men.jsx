import { useContext, useEffect, useState } from "react";
import Layout from "../shared/Layout";
import ProductsItems from "../shared/ProductsItems";
import ProductContext from "../context/ProductProvider";

function Men() {
  const { Products } = useContext(ProductContext);
  const [menProduts, setMenProduct] = useState([]);

  useEffect(() => {
    const found = Products?.filter((item) => item?.category === "men");
    if(found){
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMenProduct(found)
    }
  }, [Products]);
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen p-5">
        <p className="text-black font-semibold text-lg">Men</p>

        <ProductsItems Products={menProduts} />
      </div>
    </Layout>
  );
}

export default Men;
