import React, { useContext, useState } from 'react'
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import toggle_light from '../assets/night.png'
import toggle_dark from '../assets/day.png'
import { ThemeContext } from '../contexts/ThemeContextProvider';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Sidebar from './Sidebar';

export default function Header() {
  const {theme, toggleTheme} = useContext(ThemeContext);

  // List of nav items
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
    <div className="p-4 hidden w-full py-[1%] md:flex justify-between items-center">
      <div className="flex items-center">
        <PanoramaFishEyeIcon className="mr-2 m-1 mt-2" />
        <div className="text-2xl hover:text-gray-300 font-medium">Monal Jain</div>
      </div>
      <nav>
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <AnchorLink
                href={item.href}
                className='hover:text-gray-500 hover:border-b-3 border-b-blue-400 text-xl font-medium transition-colors'
              >
                {item.label}
              </AnchorLink>
            </li>
          ))}
          <li>
            <img
              onClick={toggleTheme}
              src={theme === 'dark' ? toggle_dark : toggle_light}
              alt=""
              className="w-8 h-8 cursor-pointer"
            />
          </li>
        </ul>
      </nav>
    </div>
    <div className='md:hidden fixed z-1000  '>
      <Sidebar />
    </div>
    </>
  )
}
