import React from 'react'
import imgMe from './../img/img.jpg'

function Profile() {
  return (
    <div className='flex flex-col items-center space-y-7 px-10'>
      <img src={imgMe} className="w-48 h-48 rounded-full" />
      <ul className="flex space-x-2">
        <li className='border rounded-full p-4'></li>
        <li className='border rounded-full p-4'></li>
        <li className='border rounded-full p-4'></li>
      </ul>
      <h1 className='text-2xl text-left w-full'>Hi! I'm Mohamed Abdelrahman!</h1>
      <div className='relative'>
        <div className='h-64 overflow-y-auto no-scrollbar'>
          <p className='text-lg leading-7'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quasi quas, cum impedit accusantium at unde ad
          </p>
          <div className='absolute bottom-0 from-white to-transparent bg-gradient-to-t w-full h-1/3 z-10'></div>
        </div>
      </div>
    </div>
  )
}

export default Profile