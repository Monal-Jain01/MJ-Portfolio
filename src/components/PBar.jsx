import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

export default function PBar({s_name, completedPercent}) {
  return (
    <div className='p-4 pr-0'>
      <div className='text-xl mb-3'>{s_name}</div>
      <ProgressBar completed={completedPercent} height='12px' bgColor='#4286f4'></ProgressBar>
      
    </div>
  )
}
