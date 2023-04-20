import React, { useEffect, useState } from 'react'
import {FaFolder} from 'react-icons/fa'
import Typed from 'react-typed'

const Projects = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollthreshold = 300;
      
      if(scrollPosition > scrollthreshold)
        setIsActive(true);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })
  return (
    <div>
      <div className='prog-container'>
        <div className='prog-inside'>
          <h3><FaFolder size={30}/> &nbsp;&nbsp;src</h3>
          <h3>&nbsp;&nbsp;|__&nbsp;&nbsp;<FaFolder size={30} />&nbsp;&nbsp;quote generator</h3>
          <h3>&nbsp;&nbsp;|__&nbsp;&nbsp;<FaFolder size={30} />&nbsp;&nbsp;first portfolio</h3>
        </div>
      </div>
      <div className='prog-desc'>
        <div className='inside-desc'>
          {isActive &&
          <p style={{ paddingLeft: '5%', paddingRight: '5%', paddingTop: '1%' }}>
            <Typed
            strings = {
              [
                '$ In this section you can see my work<br></br>$ this is my little apprenticeship to demonstrate what I\'m capable of doing<br></br>$ It cost me a lot of time, I hope you\'ll like it'
              ]
            }
            typeSpeed={20}
            cursorChar='&#9608;'
            ></Typed>
          </p>
          }
        </div>  
      </div>
    </div>
  )
}
export default Projects;
