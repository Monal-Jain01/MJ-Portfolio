import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import myPhoto from '../assets/pic.png'
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';

export default function Home({ sectionId = "home" }) {
  // Find the longest string for width calculation
  const longestText = 'Aspiring Full Stack Web Developer';
  // Estimate width in px (adjust as needed for your font/size)
  const fixedWidth = '490px';

  return (
    <div
      id={sectionId}
      className='md:py-32 pt-12 text-xl flex flex-col-reverse md:flex-row items-center justify-between ml-0 md:ml-4 px-2 md:px-0'
    >
      <div className='flex flex-col py-4 items-center md:items-start justify-between m-4 lg:ml-40 w-full md:w-auto'>
        <h1 className='font-bold md:text-5xl text-3xl text-center w-full'>Hi, I&apos;m Monal</h1>
        <div
          className='m-4 mb-10 md:mb-20 ml-0 mr-0 pr-0 pl-0 md:w-[490px] w-[300px] flex items-center justify-center'
          style={{
            
            height: '2.75rem',
            whiteSpace: 'nowrap',
          }}
        >
          <TypeAnimation
            sequence={[
              'Aspiring FullStack Web Developer',
              2000,
              'Aspiring Software Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="text-lg lg:text-3xl font-medium bg-gradient-to-r from-[#3d35aa] to-[#78a3cb] bg-clip-text text-transparent"
            repeat={Infinity}
            style={{
              display: 'inline-block',
              whiteSpace: 'nowrap',
              width: '100%',
              textAlign: 'center',
            }}
          />
        </div>
        <button
        onClick={() => window.open("https://drive.google.com/file/d/1GfZ0wlhfmqRpRavRfkIpEnZ9an1hlbA0/view?usp=drivesdk")}
         className=' bg-blue-400 cursor-pointer rounded-xl m-4 p-3 self-center w-40 text-base md:text-2xl'>Resume <SimCardDownloadIcon/>  </button>
      </div>
      <div className=' w-40 h-40 md:w-[30%] md:h-auto rounded-full overflow-hidden bg-transparent lg:mr-60 mb-8 lg:mb-0 flex-shrink-0 flex items-center justify-center'>
        <img src={myPhoto} alt="" className='w-full h-full object-cover' />
      </div>
    </div>
  )
}
