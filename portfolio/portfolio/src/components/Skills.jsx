import React from 'react';
import { Cards } from './Cards';

export const Skills = () => {
  return (
    <div className='container_main container flex-column d-flex align-items-center about-me skills-section' data-aos="zoom-in">
      <div className='container d-flex'> 
        <div className='col-12 intro_content'>
          <h2 className='mt-4 col-12 title'>Skills</h2>
          <p className='col-12 '>
            Conoce un poco sobre mis habilidades, experiencias y conocimientos en este espacio, comunicate conmigo!!
          </p>
              <Cards/>
        </div>
      </div>
    </div>
  )
}
