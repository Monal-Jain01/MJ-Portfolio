import React, { useState, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContextProvider';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import BuildIcon from '@mui/icons-material/Build';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { motion, AnimatePresence } from 'framer-motion';
import toggle_light from '../assets/night.png'
import toggle_dark from '../assets/day.png'

const routes = [
  {
    path: "#home",
    name: "Home",
    icon: <HomeIcon />,
  },
  {
    path: "#about",
    name: "About",
    icon: <InfoIcon />,
  },
  {
    path: "#projects",
    name: "Projects",
    icon: <WorkIcon />,
  },
  {
    path: "#skills",
    name: "Skills",
    icon: <BuildIcon />,
  },
  {
    path: "#contact",
    name: "Contact",
    icon: <ContactMailIcon />,
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex">
      <motion.div
        animate={{
          width: isOpen ? "200px" : "45px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },
        }}
        className={`${
          theme === "dark"
            ? "bg-gradient-to-b from-[#0b091e] via-[#18162f] to-[#1a1a2b] text-slate-50"
            : "bg-gradient-to-b from-[#ada996] via-[#dbdbdb] to-[#eaeaea]"
        } w-full p-2.5 pt-4 overflow-y-auto`}
      >
        <div
          className={`flex justify-between items-center font-bold px-1 py-0.5`}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.h1
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                Monal Jain
              </motion.h1>
            )}
          </AnimatePresence>
          <div className="w-7 cursor-pointer">
            <MenuIcon onClick={toggle} />
          </div>
        </div>
        {isOpen && <section className="flex flex-col mt-4 gap-1">
          {routes.map((route, index) => (
            <AnchorLink
              href={route.path}
              key={index}
              className='flex gap-2 px-1 py-2 border-r border-r-transparent link'
            >
              <div className="icon">{route.icon}</div>
              <AnimatePresence>
                
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className=" whitespace-nowrap"
                  >
                    {route.name}
                  </motion.div>
                
              </AnimatePresence>
            </AnchorLink>
          ))}
          <div
              onClick={toggleTheme}
              className={`${
                theme === "dark"
                  ? "hover:bg-[#4d4e47] font-semibold"
                  : "hover:bg-[#c5d4f1]"
              } flex gap-2 px-1 py-2 border-r cursor-pointer border-r-transparent link`}
            >
              <img
                onClick={toggleTheme}
                src={theme === 'dark' ? toggle_dark : toggle_light}
                alt=""
                className="w-7 h-7"
                />
              <AnimatePresence>
                
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className=" whitespace-nowrap"
                  >
                    Theme
                  </motion.div>
                
              </AnimatePresence>
            </div>
          
        </section>}
      </motion.div>
    </div>
  );
}


