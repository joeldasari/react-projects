import { useEffect, useState } from "react";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import Loader from "./Loader";
const ImageSlider = ({ url, page, limit }) => {
  const [images, setImages] = useState([]);
  const [currentImg, setCurrentImg] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchImages = async () => {
    try {
      setLoading(true);
      const result = await fetch(`${url}?page=${page}&limit=${limit}`);
      const jsonData = await result.json();
      setImages(jsonData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleLeft = () => {
    setCurrentImg(currentImg === 0 ? images.length - 1 : currentImg - 1);
  };

  const handleRight = () => {
    setCurrentImg(currentImg === images.length - 1 ? 0 : currentImg + 1);
  };

  return (
    <div className="relative flex min-h-screen justify-center border border-b-gray-300 pt-24">
      <h1 className="absolute left-8 top-6 text-lg font-semibold">
        4. Image Slider
      </h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <p>Something went wrong :(</p>
      ) : (
        <div className="relative flex h-[400px] w-[600px] items-center justify-center max-sm:h-[200px] max-sm:w-[300px]">
          <FaChevronCircleLeft
            onClick={handleLeft}
            className="absolute left-4 cursor-pointer text-3xl text-white max-sm:text-xl"
          />
          {images.map((img, index) => (
            <img
              key={index}
              className={`rounded-lg ${index === currentImg ? "block" : "hidden"}`}
              src={img.download_url}
              alt={img.url}
            />
          ))}
          <FaChevronCircleRight
            onClick={handleRight}
            className="absolute right-4 cursor-pointer text-3xl text-white max-sm:text-xl"
          />
          <div className="absolute bottom-6 flex gap-2">
            {images.map((_, index) => (
              <button
                onClick={() => setCurrentImg(index)}
                key={index}
                className={`h-3 w-3 rounded-full max-sm:h-2 max-sm:w-2 ${index === currentImg ? "bg-white" : "bg-gray-500"}`}
              ></button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
