import React, { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";

const NavbarWithoutOverflow = ({ bgColor }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const linkHover = `hover:bg-[#ecf0f1] p-2 rounded-md transition-all duration-300 cursor-pointer text-lg`;
  return (
    <nav className="p-5">
      <div
        className={`container mx-auto lg:flex lg:items-center lg:justify-between relative lg:text-black text-white`}
      >
        {/* here will the name or logo of the company */}
        <div
          className={`w-full lg:w-fit flex justify-between items-center lg:bg-transparent bg-slate-600 p-5 rounded-lg`}
        >
          <h1 className="text-3xl font-mono">Dummy Company</h1>
          <CgMenuRightAlt className="text-3xl lg:hidden" onClick={() => setMenuOpen(!menuOpen)} />
          {/* menu */}
        </div>
        {/* navitems */}
        <div
          className={`lg:flex lg:static absolute w-fit right-0 z-10 lg:bg-transparent bg-slate-600 p-5 rounded-lg transition-all duration-500 ${
            menuOpen ? "top-[80px]" : "top-[-200px]"
          }`}
        >
          <ul className="min-w-[100px] lg:flex lg:items-center gap-5">
            <li className={linkHover}>Link 1</li>
            <li className={linkHover}>Link 2</li>
            <li className={linkHover}>Link 3</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarWithoutOverflow;
