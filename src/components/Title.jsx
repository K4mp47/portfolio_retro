import React from 'react'
import Typed from 'react-typed'
import './styles.css'

const Title = () => {
  return (
    <div className='title-one'>
      <div className='inside-title-one'>
        <pre className='text-title-one'>$ Hi, my name is Alberto</pre>
        <pre className='text-title-one'>$ I'm a&nbsp;
        <Typed className='text-title-one' 
          strings = {
            [
              'Developer',
              'Designer',
              'Freelancer'
            ]
          }
          typeSpeed={100}
          backSpeed={100}
          smartBackspace={false}
          loop
          backDelay={2700} 
          cursorChar='&#9608;'  
        ></Typed>
        </pre>
      </div>
    </div>  
  );
}

export default Title;
