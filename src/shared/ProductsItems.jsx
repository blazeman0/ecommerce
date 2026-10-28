import { useContext, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ProductContext from "../context/ProductProvider";

function ProductsItems({ Products }) {
  const { AddTOCart } = useContext(ProductContext);
  const [showAll, setShowAll] = useState(false);
  const [few, setFew] = useState([]);
  useEffect(() => {
    const less = Products?.slice(0, 15);

    console.log("less:", less);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFew(less);
  }, [Products]);

  return (
    <div>
      {showAll ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
          {Products?.map((item) => (
            <div
              key={item.id}
              className="rounded-md shadow-2xl hover:scale-105 transition ease-in-out duration-200 mt-6"
            >
              <Link
                to={`/singleProduct/${item?.id}`}
                className="h-[300px] w-full block bg-center bg-cover"
                style={{ backgroundImage: `url("${item.image}")` }}
              ></Link>

              <div className="flexRow justify-between p-3">
                <div className="">
                  <p className="info">{item.name}</p>
                  <p className="info">${item.price}</p>
                </div>
                <div className="flexRow gap-2">
                  <span className="icon">
                    <FaHeart />
                  </span>

                  <span onClick={() => AddTOCart(item, 1)} className="icon">
                    <FaCartShopping />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
          {few?.map((item) => (
            <div
              key={item.id}
              className="rounded-md shadow-2xl hover:scale-105 transition ease-in-out duration-200 mt-6"
            >
              <Link
                to={`/singleProduct/${item?.id}`}
                className="h-[300px] w-full block bg-center bg-cover"
                style={{ backgroundImage: `url("${item.image}")` }}
              ></Link>

              <div className="flexRow justify-between p-3">
                <div className="">
                  <p className="info">{item.name}</p>
                  <p className="info">${item.price}</p>
                </div>
                <div className="flexRow gap-2">
                  <span className="icon">
                    <FaHeart />
                  </span>

                  <span onClick={() => AddTOCart(item, 1)} className="icon">
                    <FaCartShopping />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center items-center gap-4 p-4">
        <span onClick={() => setShowAll(true)} className="pag">
          More
        </span>
        <span onClick={() => setShowAll(false)} className="pag">
          Less
        </span>
      </div>
    </div>
  );
}

export default ProductsItems;
