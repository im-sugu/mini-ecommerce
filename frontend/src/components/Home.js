import { useEffect, useState } from "react";
import ProductCart from "../pages/ProductCart";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [productsList, setProductsList] = useState([]);
  const [searchParams, setSearchparams] = useSearchParams();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productCall();
  }, [searchParams]);

  const productCall = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_BASE_URL + "/products?" + searchParams
      );
      const data = await response.json();
      setProductsList(data.products);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className=" bg-red-300">
      {productsList.length <= 0 ? (
        <div className="p-10 text-center font-bold text-3xl text-gray-500">
          No Data Found
        </div>
      ) : (
        <ProductCart productsList={productsList} />
      )}
    </div>
  );
}
