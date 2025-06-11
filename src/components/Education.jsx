import React from 'react'
import EduLine from './EduLine'

export default function Education({ sectionId = "education" }) {
  return (
    <div id={sectionId} className='md:p-24'>
      <div className='text-4xl font-bold text-center mb-20'>
        Education
        <p className='text-gray-400 text-xl m-2 font-normal'>My Academic journey</p>
      </div>
      <div className='w-[100%]'>
      <EduLine />
      </div>
    </div>
  )
}
