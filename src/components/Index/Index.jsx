const Index = () => {
  function ScrollTo(componentId) {
    const accordian = document.getElementById(componentId);
    accordian.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
  }
  return (
    <div className="flex h-max min-h-[100vh] flex-col items-center justify-center gap-8 py-8">
      <h1 className="mainText">10+ React Machine Coding Interview Projects</h1>
      <div className="flex gap-8 max-md:flex-col max-md:gap-4">
        <div className="flex w-[350px] flex-col gap-4 max-sm:w-[300px]">
          <button className="linkToComponent" onClick={() => ScrollTo("1")}>
            1. Accordion
          </button>
          <button className="linkToComponent" onClick={() => ScrollTo("2")}>
            2. Random Color Generator
          </button>
          <button className="linkToComponent" onClick={() => ScrollTo("3")}>
            3. Star Rating
          </button>
          <button className="linkToComponent" onClick={() => ScrollTo("4")}>
            4. Image Slider
          </button>
          <button className="linkToComponent" onClick={() => ScrollTo("5")}>
            5. Load More Items
          </button>
        </div>
        <div className="flex w-[350px] flex-col gap-4">
          <button className="linkToComponent" onClick={() => ScrollTo("6")}>
            6. Progress Bar
          </button>
          <button className="linkToComponent" onClick={() => ScrollTo("7")}>
            7. Basic Quiz App
          </button>
          <button className="linkToComponent" onClick={() => ScrollTo("8")}>
            8. Stepper Component
          </button>
          <button className="linkToComponent" onClick={() => ScrollTo("9")}>
            9. Github Profile Finder
          </button>
          <button className="linkToComponent" onClick={() => ScrollTo("10")}>
            10. Search Auto Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
