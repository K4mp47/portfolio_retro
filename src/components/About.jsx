import React from 'react'
import Typed from 'react-typed';
import './styles.css'

const About = () => {
  return (
    <div className='main-about'>
      <div className='inside-main-about'>
        <p className='text-inside-about'><Typed
          strings = {
            [
              '$ I am an Hacker!! Just kidding, I\'m a simple 19 years guy who likes programming web pages, who wants transform his passion in a job.<br><br>$ Look at my projects and ask yourself about me: Can I ever arrived to my dreams?<br></br>$ Enjoy my portfolio :)',
            ]
          }
          cursorChar='&#9608;'
        ></Typed></p>
      </div>
    </div>
  );
}
    
export default About;
