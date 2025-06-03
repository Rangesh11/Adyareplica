import React from 'react'
import vanji from '../assets/vanji.mp4'

const Vanjivideo = () => {
  return (
  <video
  src={vanji}
  className="w-full max-w-5xl rounded-xl shadow-lg"
  controls
/>
  )
}

export default Vanjivideo