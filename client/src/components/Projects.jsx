import React from 'react'
import Slider from './Slider'
import cc_img from '../assets/cc_img.png'
import rtk_img from '../assets/rtk_img.png'
import rps_img from '../assets/rps_img.png'

const images =  [
  {
    id: 1,
    title: "Cuisine Catalyst",
    description: "Introducing Cuisine Catalyst, an ultimate culinary companion built with the power of the MERN stack! Discover a world of flavors with our intuitive recipe generator website- simply input your available ingredient.  With a sleek React-based interface, seamless API calls via Express and Node.js, and a robust MongoDB database storing thousands of recipes, users can save their favorite dishes. It also features a user-friendly authentication system, allowing users to create accounts and securely log in.",
    image: cc_img,
  },
  {
    id: 2,
    title: "E-commerce website",
    description: "Dive into a vibrant  e-commerce experience with our React-based website. It also features redux to keep track of the cart. ",
    image: rtk_img,
    
  },
  {
    id: 3,
    title: "Rock Paper Scissors",
    description: "In a pixelated arena glowing on your screen, three ancient champions—Rock, Paper, and Scissors—await your command. Coded in JavaScript, this digital duel pits your wits against a cunning computer opponent. With a click, you summon Rock’s unyielding might, Paper’s sly coverage, or Scissors’ sharp precision.",
    image: rps_img,
    
  },
  
];

export default function Projects({ sectionId = "projects" }) {
  return (
    <div id={sectionId} className='py-20'>
        <div className='text-4xl font-bold text-center mb-20'>
        Projects
        <p className='text-gray-400 text-xl m-2 font-normal'>Executing knowledge into practice</p>
      </div>
      <Slider images= {images} />
    </div>
  )
}
