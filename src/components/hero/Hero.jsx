import React from "react";
import bgHero from "../../Assets/bg-hero.jpg";
const Hero = () => {
  const buttonClass = `px-5 py-1 min-w-fit bg-[#e74c3c] block h-fit text-center rounded-md text-white text-xl flex-grow-[1]`;
  return (
    <section className="container mx-auto p-5">
      <div className="border rounded-md px-10 py-[100px] flex justify-between items-center">
        <div className="w-[45%]">
          <h1 className="text-4xl font-semibold font-sans uppercase mb-5">
            The fact is, I am Iron Man
          </h1>
          <p className="mb-3 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit,
            necessitatibus cumque esse obcaecati debitis fuga consectetur, soluta placeat laboriosam
            ratione tenetur cupiditate quos velit rerum quas fugit. Cum, magnam doloremque maxime
            modi adipisci molestias odio eveniet a eum sint.
          </p>
          <button className={buttonClass}>See More</button>
        </div>
        <div className="w-[45%]">
          <img src={bgHero} className="rounded-md" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
