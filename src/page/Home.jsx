

import Layout from "../shared/Layout";
import { useContext, useEffect } from "react";
import ProductContext from "../context/ProductProvider";
import ProductsItems from "../shared/ProductsItems";

function Home() {
  const { Products } = useContext(ProductContext);

  useEffect(() => {
    // console.log("num:", num);
    console.log("home:", Products);
  }, [Products]);

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen ">
        <p className="text-black font-semibold text-lg">ALL</p>

        <ProductsItems Products={Products} />
      </div>
    </Layout>
  );
}

export default Home;
