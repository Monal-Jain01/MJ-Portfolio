import React, { useState, useRef, useEffect } from 'react'
import DropdownCard from './DropdownCard'
import CodeIcon from '@mui/icons-material/Code';
import ApiIcon from '@mui/icons-material/Api';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import work from '../assets/work.jpeg'
import { motion } from 'framer-motion';

export default function Skills({ sectionId = "skills" }) {
  const [openIndex, setOpenIndex] = useState(null);
  const containerRef = useRef();
//   const transition = {
//   duration: 0.8,
//   delay: 0.5,
//   ease: [0, 0.71, 0.2, 1.01],
// }

  // Optional: Close dropdown when clicking outside all dropdowns
  useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const skill_listF = [
    { s_name: "HTML", completedPercent: 90 },
    { s_name: "CSS", completedPercent: 80 },
    { s_name: "JavaScript", completedPercent: 85 },
    { s_name: "React Js", completedPercent: 85 },
  ];
  const skill_listB = [
    { s_name: "MONGODB", completedPercent: 75 },
    { s_name: "NODE JS", completedPercent: 70 },
    { s_name: "EXPRESS JS", completedPercent: 80 },
  ];
  const skill_listP = [
    { s_name: "C & C++", completedPercent: 90 },
    { s_name: "Python", completedPercent: 80 },
    { s_name: "Data Structures and Algorithms", completedPercent: 85 }
  ];
  const iconStyle = { width: 42, height: 42 };

  const dropdowns = [
    {
      skill_name: "Front End",
      skill_list: skill_listF,
      logo: <WysiwygIcon style={iconStyle} />
    },
    {
      skill_name: "Back End",
      skill_list: skill_listB,
      logo: <ApiIcon style={iconStyle} />
    },
    {
      skill_name: "Programming",
      skill_list: skill_listP,
      logo: <CodeIcon style={iconStyle} />
    }
  ];

  return (
    <div id={sectionId} className='py-32'>
      <div className='text-4xl font-bold text-center mb-20'>
        Skills
        <p className='text-gray-400 text-xl m-2 font-normal'>My Tech skills</p>
      </div>
      <div className={`flex sm:ml-40 ml-2 `}>
      <div
        ref={containerRef}
        className=' flex flex-col gap-4'
      >
        {dropdowns.map((dropdown, idx) => (
          <DropdownCard
            key={dropdown.skill_name}
            {...dropdown}
            open={openIndex === idx}
            onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
          />
        ))}
      </div>
      {openIndex === null && (<motion.div animate={{ x: 100 }}
  transition={{ type: "spring", stiffness: 100 }} className='hidden md:block w-[40%] object-cover rounded'><img src={work} className='rounded-lg w-full h-full' alt="" /> </motion.div>)}
      </div>
    </div>
  )
}
