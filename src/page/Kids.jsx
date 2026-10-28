import { useContext, useEffect, useState } from "react";
import Layout from "../shared/Layout";
import ProductContext from "../context/ProductProvider";
import ProductsItems from "../shared/ProductsItems";

function Kids() {
  const { Products } = useContext(ProductContext);
  const [kidsProduts, setKidsProduct] = useState([]);

  useEffect(() => {
    const found = Products?.filter((item) => item?.category === "kids");
    if (found) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setKidsProduct(found);
    }
  }, [Products]);
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen">
        <p className="text-black font-semibold text-lg">Men</p>

        <ProductsItems Products={kidsProduts} />
      </div>
    </Layout>
  );
}

export default Kids;
