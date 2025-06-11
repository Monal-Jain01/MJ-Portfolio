import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';


export default function EduLine() {
  const educationData = [
    {
      degree: "B.Tech - Computer Science Engineering",
      institution: "Jabalpur Engineering College",
      score: "CGPA: 8.05",
      duration: "2024 - Present",
    },
    {
      degree: "Class XII",
      institution: "St. Joseph's Convent School, Khandwa",
      score: "Score: 94%",
      duration: "2023-2024",
    },
    {
      degree: "Class X",
      institution: "St. Joseph's Convent School, Khandwa",
      score: "Score: 94.6%",
      duration: "2021-2022",
    },
  ];

  return (
    <div className="md:p-6 p-2">
      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute rounded left-1/2  h-full w-1 bg-blue-300"></div>

        {/* Timeline Items */}
{educationData.map((edu, index) => (
  <div
    key={index}
    className={`relative flex items-center  mb-8 w-full ${
      index % 2 === 0
        ? 'flex-row'
        : 'flex-row-reverse'
    }`}
  >
    {/* Timeline Dot */}
    <div className="absolute left-1/2 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-blue-300 rounded-full -translate-x-4 z-10 "> <SchoolIcon />
    </div>

    {/* Education Details */}
    <div className="w-1/2  pl-6 pr-6 md:pl-6 md:pr-0 md:ml-12 md:m-4 text-xs md:text-base ">
      <h3 className="md:text-lg text-md font-semibold">{edu.degree}</h3>
      <p className="text-gray-400">{edu.institution}</p>
      <p className="text-gray-400">{edu.score}</p>
      <p className="text-gray-400 flex items-center">
        <DateRangeRoundedIcon className='w-2 h-2 mr-2 mt-1' />
        {edu.duration}
      </p>
    </div>
    {/* Empty div for spacing on the other side */}
    <div className="hidden md:block m-4 w-1/2"></div>
  </div>
))}
      </div>
    </div>
  );


}
