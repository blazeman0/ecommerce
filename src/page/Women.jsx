import { useContext, useEffect, useState } from "react";
import ProductContext from "../context/ProductProvider";
import Layout from "../shared/Layout";
import ProductsItems from "../shared/ProductsItems";

function Women() {
   const { Products } = useContext(ProductContext);
   const [womenProduts, setWenProduct] = useState([]);

    useEffect(() => {
       const found = Products?.filter((item) => item?.category === "women");
       if(found){
         // eslint-disable-next-line react-hooks/set-state-in-effect
         setWenProduct(found)
       }
     }, [Products]);
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen">
        <p className="text-black font-semibold text-lg">Men</p>

        <ProductsItems Products={womenProduts} />
      </div>
    </Layout>
  );
}

export default Women;
