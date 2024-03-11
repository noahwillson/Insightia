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
      <div className="carousel w-[550px] h-[361px]">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*TPwGgdePa9RHvrQ5.png"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*EcR05iUklm-XGr-Z.png"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*BX-8jDQ_-DxuLuzf.png"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*3o6sNdHNYTOGMn-I.png"
            className="w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Carousel;
