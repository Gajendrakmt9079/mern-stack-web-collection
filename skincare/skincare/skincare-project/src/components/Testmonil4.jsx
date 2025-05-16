import React, { useState, useRef, useEffect } from "react";

const ImageScroller = () => {
  const [active, setActive] = useState(null);
  const [selected, setSelected] = useState("skin");
  const wrapperRef = useRef(null);
  const scrollerRef = useRef(null);
  const topRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!active || !wrapperRef.current) return;
    let x = e.pageX - wrapperRef.current.getBoundingClientRect().left;
    scrollIt(x);
  };

  const scrollIt = (x) => {
    let transform = Math.max(0, Math.min(x, wrapperRef.current.offsetWidth));
    topRef.current.style.width = `${transform}px`;
    scrollerRef.current.style.left = `${transform - 25}px`;
  };

  useEffect(() => {
    document.body.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseup", () => setActive(null));
    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  const images = {
    skin: {
      before: "https://www.trihard.co/cdn/shop/files/Skin_Before_600x600.png?v=1707989225",
      after: "https://www.trihard.co/cdn/shop/files/Skin_After_600x600.png?v=1707989225",
    },
    hair: {
      before: "https://www.trihard.co/cdn/shop/files/Hair_Before_600x600.png?v=1707989219",
      after: "https://www.trihard.co/cdn/shop/files/Hair_After_600x600.png?v=1707989218",
    },
    eye: {
      before: "https://www.trihard.co/cdn/shop/files/Eye_Gel_After_600x600.png?v=1707989207",
      after: "https://www.trihard.co/cdn/shop/files/Eye_Gel_Before_600x600.png?v=1707989367",
    },
  };

  return (
    <div className="w-full h-screen flex select-none flex-col justify-center items-center  bg-gray-200 p-4">
      <h2 className="text-4xl mb-5">REAL PEOPLE REAL RESULTS</h2>
      <div className="mb-4 space-x-4 bg-gray-300 px-4 py-2 rounded-full">
        <button onClick={() => setSelected("skin")} className={`px-6 py-2  hover:bg-gray-200 text-black rounded-full ${selected == "skin" ? "bg-white" : "bg-transparent"
          }`}>Skin</button>
        <button onClick={() => setSelected("hair")} className={`px-6 py-2  hover:bg-gray-200 text-black rounded-full ${selected == "hair" ? "bg-white" : "bg-transparent"
          }`}>Hair</button>
        <button onClick={() => setSelected("eye")} className={`px-6 py-2  hover:bg-gray-200 text-black rounded-full ${selected == "eye" ? "bg-white" : "bg-transparent"
          }`}>Eye</button>
      </div>
      <div ref={wrapperRef} className="relative w-[50vw] max-w-4xl rounded-xl h-[40vh] sm:h-[50vh] md:h-[60vh] shadow-lg overflow-hidden">
        <div>
     <div className="absolute w-full h-full">
          <img src={images[selected].after} alt="After" className="h-full w-full object-cover" />
        </div>
        <div ref={topRef} className="absolute w-1/2 h-full overflow-hidden">
          <img src={images[selected].before} alt="Before" className="h-full w-full object-cover" />
        </div>
        <div
          ref={scrollerRef}
          className="absolute w-10 h-10 bg-white rounded-full shadow-md cursor-pointer top-1/2 transform -translate-y-1/2 left-1/2 flex justify-center items-center"
          onMouseDown={() => setActive(true)}
        >
          <svg width="30" height="30" viewBox="0 0 100 100">
            <polygon points="0 50 37 68 37 32 0 50" fill="#FFAB91" />
            <polygon points="100 50 64 32 64 68 100 50" fill="#FFAB91" />
          </svg>
        </div>
        </div>
   
      </div>

    </div>
  );
};

export default ImageScroller;
