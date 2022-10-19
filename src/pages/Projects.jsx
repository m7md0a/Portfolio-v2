import React, { useEffect, useState } from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import SidebarMenu from '../components/SidebarMenu'
import {getProjects} from '../axios'
import getAbout from './../data/data.json'
import Loading from '../components/Loading'

function Projects() {
  const [isMobile, setIsMobile] = useState(false)
  const [linkActive, setLinkActive] = useState('All')
  const [projectsData, setProjectsData] = useState([])
  const [projectsDataFilter, setProjectsDataFilter] = useState([])
  const {skills} = getAbout;

  useEffect(() => {
    if(document.body.offsetWidth < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
    getProjects().then(res => {
      setProjectsData(res)
      setProjectsDataFilter(res)
    });
  }, [])
  
  function filterProjects(e) {
    setLinkActive(e)
    let param  = e.toLowerCase();
    let data = projectsData;
    if (param !== "all") {
      let newData = data.filter(e => {
        return param === 'all' ? true : e.topics.includes(param);
      })
      setProjectsDataFilter(newData)
    } else setProjectsDataFilter(projectsData)
  }

  return (
    <>
      <div className='flex'>
        <div className='fixed left-0 -mt-3 w-auto h-screen'>
          <SidebarMenu filterData={filterProjects} activeLink={linkActive} isMobile={isMobile} data={skills} /> 
        </div>
        <div className={(isMobile ? 'ml-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'ml-12 md:ml-64 lg:grid-cols-2 xl:grid-cols-3 max-w-7xl') + " mx-auto p-3 md:py-10 grid gap-4"}>
          {projectsDataFilter.length > 0 ? projectsDataFilter.map(e => e.name !== 'm7md0a' ? <ProjectCard key={e.id} data={e} /> : null ) : <Loading className="bg-red-500 w-screen"/>}
          {/* <ProjectCard data={{name : 'moamed'}}/> */}
        </div>
      </div>
    </>
  )
}

export default Projects