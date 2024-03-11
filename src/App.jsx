import Accordion from "./components/Accordion/Accordion";
import RandomColor from "./components/RandomColor/RandomColor";
import StarRating from "./components/StarRating/StarRating";

const App = () => {
  return (
    <div>
      <Accordion />
      <RandomColor />
      <StarRating count={10} />
    </div>
  );
};

export default App;
