import React, { useState } from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx";
const Featured = () => {
  const sliders = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlider = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const nextSlider = () => {
    const isLastSlide = currentIndex === sliders.length - 1 ;
    const newIndex = isLastSlide ? 0: currentIndex + 1;
    setCurrentIndex(newIndex);
  }
  const movetoSlide = (SlideIndex) => {
    setCurrentIndex(SlideIndex);
  }
  return (
    <div className="max-w-[1520px] h-[500px] w-full py-4 px-4 relative group">
      <div
        className="w-full h-full duration-500 bg-center bg-cover rounded-2xl"
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer " onClick={prevSlider}>
        <BsChevronCompactLeft/>
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer " onClick={nextSlider }>
        <BsChevronCompactRight/>
      </div>
      <div className="flex top-4 justify-center py2">
        {
        sliders.map((sliderItems, slideIndex) => (
          <div key={slideIndex} onClick={() => movetoSlide(slideIndex)}  className="text-2xl cursor-pointer">
            <RxDotFilled />
          </div>
        ))
        }
      </div>
    </div>
  );
};
export default Featured;