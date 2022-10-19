import React from 'react'
import { Button, Hero } from 'react-daisyui'
import HeroImg from './../../assets/img/hero-1.jpg'

function HeroApp(props) {
    const {profileData, about} = props;
  return (
    <Hero className='h-[92vh] -mt-20 mb-20 bg-opacity-1'
        style={{
            backgroundImage:
            `url(${HeroImg})`,
        }}
    >
        <Hero.Overlay />
        <Hero.Content className="text-center text-white">
            <div className="max-w-2xl">
            <code className='font-medium'>Hi, my name is</code>
            <h1 className="text-3xl md:text-6xl font-playFair">{profileData.name}</h1>
            <p className="py-6 text-lg md:text-xl">
                {profileData.bio}
            </p>

            <a href={about.downloadPDF} download="Mohamed-Abdelrahman.pdf" target="_blank" rel="noreferrer">
                <Button color='primary'>Download PDF</Button>
            </a>
            </div>
        </Hero.Content>
    </Hero>
  )
}

export default HeroApp