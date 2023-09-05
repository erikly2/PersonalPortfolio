import React, { useEffect, useState }from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center bg-opacity-70 backdrop-blur-lg fixed py-5 top-0 z-20`}
    >
      <Link
        to='/'
        className='flex items-center gap-2'
        onClick={()=> {
          setActive("");
          window.scrollTo(0, 0);
        }}
      >
        <img 
          src={logo} 
          alt='logo' 
          className='w-9 h-9 object-contain fixed' 
          style={{ zIndex: 1 }}
        />
      </Link>

      <div className="w-full flex justify-center items-center max-w-7xl mx-auto">
        <ul className="list-none hidden sm:flex flex-row gap-20">
          {navLinks.map((Link)=>(
            <li
              key={Link.id}
              className={`${
                active === Link.title ? "text-[#7fffd4]":"text-white"
              } hover:text-[#7fffd4] text-[18px] font-medium cursor-pointer text-[16px]`}
              onClick={() => {
                setActive(nav.title)}
              }
            > 
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden': 'flex' } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
            <ul className="list-none flexjustify-end items-start flex-col gap-4">
              {navLinks.map((Link)=>(
                <li
                  key={Link.id}
                  className={`${
                    active === Link.title ? "text-[#7fffd4]":"text-white"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(Link.title);
                  }}
                > 
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar