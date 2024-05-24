"use client";
import { useState, useEffect } from "react";
import { testimonials } from "./data";
import Image from "next/image";

const Testimonial = () => {
  const [testimonyIndex, setTestimonyIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);

  const nextSlide = () => {
    setImageOpacity(0); // Set opacity to 0 when prevSlide is clicked
    setTimeout(() => setImageOpacity(1), 400); // Reset opacity after 500ms (adjust timing as needed)
    setTimeout(
      () =>
        setTestimonyIndex((prevIndex) => (prevIndex + 1) % testimonials.length),
      400,
    );
    // setTestimonyIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  const prevSlide = () => {
    setImageOpacity(0); // Set opacity to 0 when prevSlide is clicked
    setTimeout(() => setImageOpacity(1), 400); // Reset opacity after 600ms (adjust timing as needed)
    setTimeout(() => {
      if (testimonyIndex === 0) {
        setTestimonyIndex(testimonials.length - 1);
      } else {
        setTestimonyIndex(
          (prevIndex) =>
            (prevIndex - 1 + testimonials.length) % testimonials.length,
        );
      }
    }, 400);
  };

  const testimony = testimonials[testimonyIndex];
  return (
    <section className="relative flex w-full flex-col overflow-hidden text-center">
      <div className="slide flex-grow bg-pattern-bg bg-contain bg-top bg-no-repeat">
        <div className="flex w-full items-center justify-center pb-9 pt-[1.80rem]">
          <div className="relative aspect-square w-[78%]">
            <div className="absolute inset-0 rounded-lg shadow-xl shadow-black/20">
              <Image
                src={testimony.img}
                priority
                fill
                alt={testimony.name}
                className="rounded-lg object-fill transition-all duration-500"
                style={{ opacity: imageOpacity }}
              />
            </div>
          </div>
        </div>

        <div className="z-50 -mt-14 mb-8 flex justify-center">
          <button
            className="z-50 rounded-l-full bg-white px-4 py-3"
            onMouseDown={prevSlide}
          >
            <div className="relative h-[13px] w-[10px]">
              <Image
                src="./images/icon-prev.svg"
                fill
                alt="previous"
                className="absolute object-fill"
              />
            </div>
          </button>
          <button
            className="z-50 rounded-r-full bg-white px-4 py-3"
            onMouseDown={nextSlide}
          >
            <div className="relative h-[13px] w-[10px]">
              <Image
                src="./images/icon-next.svg"
                fill
                alt="previous"
                className="absolute object-fill"
              />
            </div>
          </button>
        </div>
        <div
          className="duration-600 bg-size-18 mt-6 bg-quotes-bg bg-top bg-no-repeat transition-all"
          style={{ opacity: imageOpacity }}
        >
          <p className="pt-6 text-lg leading-[1.36] text-cb-dark-blue">
            {testimony.testimony}
          </p>
          <h1 className="mt-4 text-[0.96rem] font-bold leading-tight text-cb-dark-blue">
            {testimony.name}
          </h1>
          <p className="text-[0.96rem] text-cb-grayish-blue">
            {testimony.role}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
