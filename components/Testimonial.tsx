"use client";
import { useState, useEffect } from "react";
import { testimonials } from "./data";

const Testimonial = () => {
  const [testimonyIndex, setTestimonyIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  // const nextSlide}= () => {
  //   if (testimonyIndex === testimonials.length) {
  //     setTestimonyIndex(0);
  //   } else {
  //     setTestimonyIndex((prevIndex) => prevIndex + 1);
  //   }
  // };
  const nextSlide = () => {
    setTestimonyIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  const prevSlide = () => {
    if (testimonyIndex === testimonials.length) {
      setTestimonyIndex(testimonials.length);
    } else {
      setTestimonyIndex(
        (prevIndex) =>
          (prevIndex - 1 + testimonials.length) % testimonials.length,
      );
    }
  };
  useEffect(() => {
    const slide = document.querySelector(".slide");
    if (slide) {
      slide.classList.add(`slide-exit${direction ? "" : "-reverse"}`);
      slide.classList.add(`slide-exit-active${direction ? "" : "-reverse"}`);
      setTimeout(() => {
        slide.classList.remove(
          `slide-exit${direction ? "" : "-reverse"}`,
          `slide-exit-active${direction ? "" : "-reverse"}`,
        );
        slide.classList.add(`slide-enter${direction ? "" : "-reverse"}`);
        setTimeout(() => {
          slide.classList.add(
            `slide-enter-active${direction ? "" : "-reverse"}`,
          );
          setTimeout(() => {
            slide.classList.remove(
              `slide-enter${direction ? "" : "-reverse"}`,
              `slide-enter-active${direction ? "" : "-reverse"}`,
            );
          }, 500);
        }, 10);
      }, 500);
    }
  }, [testimonyIndex, direction]);

  const testimony = testimonials[testimonyIndex];
  return (
    <section className="relative flex w-full flex-col overflow-hidden">
      <div className="slide flex-grow">
        <p className="">{testimony.testimony}</p>
        <h1 className="2xl">{testimony.name}</h1>
      </div>
      <div className=" flex items-end justify-between">
        <button className="" onMouseDown={prevSlide}>
          Previous
        </button>
        <button className="" onMouseDown={nextSlide}>
          Next
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
