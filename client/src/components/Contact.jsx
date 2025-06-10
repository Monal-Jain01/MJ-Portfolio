import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact({sectionId="contact"}) {
  return (
    <div id={sectionId} className='py-32'>
      <div>
        <h1 className='text-4xl font-bold text-center mb-2'>Contact Me</h1>
        <p className='text-gray-400 text-xl text-center mb-12'>Lets connect, collaborate and contribute.</p>
      </div>
      <div className='flex items-center md:gap-16 justify-center'>
      <button onClick={() => window.open('https://www.linkedin.com/in/monal-jain-1a4884330', '_blank')} className='m-2 p-2 bg-blue-500 rounded-lg hover:bg-blue-600 cursor-pointer transition-colors'>
        <LinkedInIcon />
      </button>
      <button onClick={() => window.open('https://github.com/Monal-Jain01/')} className='m-2 p-2 cursor-pointer bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors'>
        <GitHubIcon />
      </button>
      <div className='flex text-xs items-center'>
        <div className='m-2 p-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors'><EmailIcon /></div>
         monaljain1901@gmail.com</div>
      </div>

    </div>
  )
}
