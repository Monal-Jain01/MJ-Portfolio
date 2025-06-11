// DropdownCard.jsx
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import PBar from './PBar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function DropdownCard({ skill_name, skill_list, logo, open, onToggle }) {

  return (
    <div className="lg:p-4 p-2 md:r-0 " >
      <button
        onClick={onToggle}
        className=' lg:mr-20 p-2 pr-0 flex gap-2 md:w-80 w-72 bg-blue-400 rounded-lg items-center'
      >
        <div className='ml-3'>
          {logo}
        </div>
        <div className="py-2 p-4 font-semibold text-2xl rounded focus:outline-none">
          {skill_name}
        </div>
        <div className='m-auto'>
          {!open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        </div>
      </button>
      {open && (
        <motion.div  animate={{ x: 100 }}
  transition={{ type: "spring", stiffness: 100 }} className={`lg:absolute lg:left-58 lg:-translate-y-28 mr-0 lg:ml-96 mt-2 p-4 lg:w-80 w-72 rounded shadow-lg ${skill_name === 'Programming' && 'lg:-translate-y-80' } `}>
          {skill_list.map((skill, index) => (
            <PBar
              key={skill.s_name + index}
              s_name={skill.s_name}
              completedPercent={skill.completedPercent}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}