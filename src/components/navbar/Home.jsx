import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const buttonClass = `px-5 py-1 min-w-fit bg-[#e74c3c] block h-fit text-center rounded-md text-white text-xl flex-grow-[1]`;
  return (
    <section className="p-10">
      <div className="container mx-auto flex gap-5 flex-wrap p-5 border shadow-md rounded-md ">
        <Link to="/nav-without-overflow" className={buttonClass}>
          Navbar-whitout-overflow
        </Link>
        <Link to="/nav-overflow" className={buttonClass}>
          Navbar-overflow
        </Link>
        <Link to="/hero" className={buttonClass}>
          Hero
        </Link>
      </div>
    </section>
  );
};

export default Home;
