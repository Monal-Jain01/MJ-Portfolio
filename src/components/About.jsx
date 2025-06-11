import React from 'react'

export default function About({ sectionId = "about" }) {
  return (
    <>
    <div id={sectionId} className='py-32 text-4xl font-bold text-center'>
      About Me
      <div className='text-xl text-gray-400 mt-16 mx-2 md:mx-20 font-normal text-justify'>
        Driven computer science student and Full Stack Developer with a strong grasp of Data Structures and Algorithms (DSA), building efficient and user-centric web applications. I’m thrilled to explore AI and Machine Learning, eager to merge my technical skills with cutting-edge technologies. Fueled by curiosity, I’m constantly diving into new frameworks, tools, and algorithms to tackle complex challenges creatively. Passionate about crafting impactful solutions, I’m ready to contribute to innovative projects while sharpening my expertise in AI/ML, DSA, and full stack development. Let’s create something extraordinary together!

      </div>
    </div>
  </>
  )
}
