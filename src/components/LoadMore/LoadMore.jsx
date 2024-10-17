import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const LoadMore = ({ url, limit, skip }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [count, setCount] = useState(20);
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const result = await fetch(`${url}&limit=${limit}&skip=${skip}`);
      const jsonData = await result.json();
      setProducts(jsonData.products);
      setLoading(false);
    } catch (e) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="relative flex h-max min-h-screen items-center justify-center border border-b-gray-300">
      <h1 className="absolute left-8 top-6 text-lg font-semibold">
        5. Load More Items
      </h1>
      {loading ? (
        <Spinner />
      ) : products.length > 0 ? (
        <div className="my-24 space-y-8">
          <div className="grid grid-cols-5 gap-12 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:gap-6">
            {products.slice(0, count).map((item) => (
              <div
                className="flex h-[200px] w-[200px] flex-col gap-4 rounded-lg border p-6 shadow-lg max-sm:w-[150px]"
                key={item.id}
              >
                <img
                  className="h-[60%] object-contain"
                  src={item.thumbnail}
                  alt={item.title}
                />
                <p className="text-center text-xs font-semibold">
                  {item.title.length > 30
                    ? item.title.slice(0, 30) + "..."
                    : item.title}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center text-xs font-semibold">
            {count === 100 ? (
              <p>No items to be displayed :(</p>
            ) : (
              <button
                onClick={() => setCount(count + 20)}
                className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                Load more
              </button>
            )}
          </div>
        </div>
      ) : (
        <p>No items to be displayed :(</p>
      )}
    </div>
  );
};

export default LoadMore;
