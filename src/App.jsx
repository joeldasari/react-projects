import Accordion from "./components/Accordion/Accordion";
import GithubProfileFinder from "./components/GithubProfileFinder/GithubProfileFinder";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import Index from "./components/Index/Index";
import LoadMore from "./components/LoadMore/LoadMore";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Quiz from "./components/Quiz/Quiz";
import RandomColor from "./components/RandomColor/RandomColor";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SearchAutoComplete from "./components/SearchAutoComplete/SearchAutoComplete";
import StarRating from "./components/StarRating/StarRating";
import Stepper from "./components/Stepper/Stepper";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Index />
      <ScrollToTop />
      <Accordion />
      <RandomColor />
      <StarRating count={10} />
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
      <LoadMore
        url={"https://dummyjson.com/products?select=title,price,thumbnail"}
        limit={100}
        skip={0}
      />
      <ProgressBar />
      <Quiz />
      <Stepper />
      <GithubProfileFinder />
      <SearchAutoComplete />
    </div>
  );
};

export default App;
