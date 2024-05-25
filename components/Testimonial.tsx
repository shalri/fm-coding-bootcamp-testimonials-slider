"use client";
import { useState } from "react";
import { testimonials } from "./data";
import Image from "next/image";

const Testimonial = () => {
  const [testimonyIndex, setTestimonyIndex] = useState(0);
  const [elementOpacity, setElementOpacity] = useState(1);

  const nextSlide = () => {
    setElementOpacity(0);
    setTimeout(() => setElementOpacity(1), 400);
    setTimeout(
      () =>
        setTestimonyIndex((prevIndex) => (prevIndex + 1) % testimonials.length),
      400,
    );
  };
  const prevSlide = () => {
    setElementOpacity(0);
    setTimeout(() => setElementOpacity(1), 400);
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
    <section className="relative flex w-full max-w-[1440px] flex-col overflow-hidden text-center ">
      <div className="sm:bg-size-48 lg:bg-size-48 flex-grow bg-pattern-bg bg-contain bg-top bg-no-repeat sm:flex sm:flex-row sm:bg-right sm:pt-0">
        <div className="sm:order-last sm:w-[55%]">
          <div className="flex w-full items-center justify-center pb-9 pt-[1.80rem] sm:pb-[5rem] sm:pt-[4rem]">
            <div className="relative aspect-square w-[78%] sm:w-[77%]">
              <div className="absolute inset-0 rounded-lg shadow-xl shadow-black/20">
                <Image
                  src={testimony.img}
                  priority
                  fill
                  alt={testimony.name}
                  className="rounded-lg object-fill transition-all duration-500"
                  style={{ opacity: elementOpacity }}
                />
              </div>
            </div>
          </div>

          {/* <div className="z-50 -mt-14 mb-8 flex justify-center sm:-mt-24 sm:mb-9 "> */}
          <div className="z-50 -mt-14 mb-8 flex justify-center sm:-mt-24 sm:mb-9 sm:justify-start sm:pl-[25%] ">
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
        </div>
        <div
          className="duration-600 bg-size-18 sm:bg-size-15 quote-position z-10 mt-[2%] bg-quotes-bg bg-top bg-no-repeat transition-all sm:-mr-[12%] sm:ml-[6%] sm:mt-[12%] sm:w-[65%] sm:text-left"
          style={{ opacity: elementOpacity }}
        >
          <p className="clamp pt-6 leading-[1.36] text-cb-dark-blue sm:text-xl lg:pt-16 lg:text-body lg:leading-snug">
            {testimony.testimony}
          </p>
          {/* <h1 className="mt-4 text-[0.96rem] font-bold leading-tight text-cb-dark-blue"> */}
          <div className="mt-4 text-[0.96rem] sm:mt-8 sm:flex sm:items-center sm:text-[1rem] lg:text-xl">
            <h1 className="font-bold leading-tight text-cb-dark-blue ">
              {testimony.name}
            </h1>
            <p className="text-cb-grayish-blue sm:pl-3">{testimony.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
