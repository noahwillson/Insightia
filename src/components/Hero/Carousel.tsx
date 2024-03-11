const Carousel = () => {
  return (
    <>
      <div className="p-9 w-1/2">
        <h1 className="text-5xl font-semibold">Digital Illustrations</h1>
        <p className="py-6 text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          voluptatem.
        </p>
        <button className="border-0 bg-[#00a3af] text-white px-4 py-2">
          Explore more
        </button>
      </div>
      <div className="carousel w-1/2 h-[361px]">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Carousel;
