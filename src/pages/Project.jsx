import { Badge } from 'react-daisyui'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getOneProject, getReadme } from '../axios'
import ContainerApp from '../components/ContainerApp'

function Project() {
  let {name} = useParams()
  let navigate = useNavigate();
  function handleClick() {
    navigate("/project-not-found");
  }
  const [readMe, setReadMe] = useState('')
  const [project, setProject] = useState({})

  useEffect(() => {
    if (true) {
      getOneProject(name).then(data => {
        setProject(data)
      }).catch(e => console.log(e))
    }

    getReadme(name).then(myData => {
        myData ? setReadMe(myData) : setReadMe(false)
      }).catch(e => {
      setReadMe(false);
    })

  },[name])


  // const htmlDecode = (content) => {
  //   let e = document.createElement('div');
  //   e.innerHTML = content;
  //   return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  // }

  const isNewProject = (e) => {
    let a = new Date().toISOString().split('T')[0].replace(/-/g,'');
    let b = new Date(e).toISOString().split('T')[0].replace(/-/g,'');
    return (a - b)
  }



  return !project.name ? handleClick() : (
    <ContainerApp>
      <div className='rounded pb-5 w-full space-y-5 relative'>
          <div className='flex flex-col items-center md:-ml-10 md:space-x-10 space-y-10 lg:flex-row relative'>
            <div className={(isNewProject(project.updated_at) > 15 && 'p-2 ') + ' absolute top-0 right-0 z-10 flex items-center space-x-2'} >
                {isNewProject(project.updated_at) < 15 && <span className='rounded-tr rounded-bl p-1 bg-green-500 text-white text-sm font-medium'>New</span>}
            </div>
            <img className='w-32 h-32 rounded-xl' src={`https://raw.githubusercontent.com/m7md0a/${project.name}/main/screenshot.webp`} alt="" />
            <div className='flex flex-col items-center md:items-start space-y-4'>
              <h3 className='text-3xl md:text-6xl font-playFair'>{project.name}</h3>
              <p className='flex flex-col md:flex-row space-y-4 md:space-x-3 items-center md:divide-x text-lg'>
                <a target={'_blank'} rel="noreferrer" href={project.homepage} className='link link-primary text-sm -mb-3'>{project.homepage}</a>
                <span className='text-sm text-base-content/50 px-2'>{project.updated_at.replace(/T|Z/gi, ' ')}</span>
              </p>
            </div>
          </div>
          <div className='space-y-2'>
            <p className='text-xl md:w-3/4'>{project.description}</p>
            <div className='flex items-center flex-wrap space-y-2 space-x-2 [&>div:first-child]:ml-2 [&>div:first-child]:-mb-2'>
                {project.topics.map((e,i) => <Badge variant='outline' size='lg' className='border-base-content/50 text-base-content/50' key={i}>{e}</Badge>)}
            </div>
          </div>
          <img className='rounded-xl' src={`https://raw.githubusercontent.com/m7md0a/${project.name}/main/screenshot.webp`} alt="" />
          {readMe && (<div className='details-project w-full h-2/5 overflow-x-scroll hidden md:block' dangerouslySetInnerHTML={{__html: readMe}}></div>)}
      </div>
    </ContainerApp>
  )
}

export default Project