import Accordion from "./components/Accordion/Accordion";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import RandomColor from "./components/RandomColor/RandomColor";
import StarRating from "./components/StarRating/StarRating";

const App = () => {
  return (
    <div>
      <Accordion />
      <RandomColor />
      <StarRating count={10} />
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
    </div>
  );
};

export default App;
