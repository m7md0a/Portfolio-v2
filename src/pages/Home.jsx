

import About from '../components/Home/About'
import Contact from '../components/Home/Contact'
import TimelineWork from '../components/Home/TimelineWork'
import FooterApp from '../components/FooterApp'
import ContainerApp from '../components/ContainerApp'
import { useEffect, useState } from 'react'
import { getProfileData } from '../axios'
import getAbout from './../data/data.json'
import Metric from '../components/Home/Metric'
import HeroApp from '../components/Home/HeroApp'


function Home() {
  const [profileData, setProfileData] = useState([]);
  const {about, timeLine, metrics} = getAbout;

  useEffect(()=>{
    getProfileData().then(e => {
      setProfileData(e)
    })
  }, [])
  return profileData && (
    <>
      <HeroApp profileData={profileData} about={about} />
      <ContainerApp className='min-h-screen'>
        {profileData && <About data={profileData} about={about} />}
      </ContainerApp>
      <ContainerApp className="min-h-screen">
        {timeLine && <TimelineWork data={timeLine}/>}
      </ContainerApp>
      <ContainerApp className='min-h-[30vh] flex flex-col justify-center space-y-20 md:space-y-36 items-center'>
        <h2 className='section-title' data-text="Metrics">Metrics</h2>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-3 w-full'>
          {metrics.map((e,i) => <Metric key={i} title={e.title} count={e.count} />)}
        </div>
      </ContainerApp>
      <ContainerApp className='min-h-screen flex items-center'>
        <Contact />
      </ContainerApp>
      
      {profileData && <FooterApp data={profileData} />}
    </>
  )
}

export default Home