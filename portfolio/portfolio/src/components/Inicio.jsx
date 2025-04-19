import {React, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Skills } from './Skills';
import  PersonCard  from './PersonCard';
import { Portafolio } from './Portafolio';
import { ExperienciaProfesional } from './ExperienciaProfesional';
import { FormContact } from './FormContact';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Inicio = () => {
  useEffect(()=>{
    AOS.init({duration:800});
  } , [])
  return (
    <div className='container'>
      <div className='inicio_container row' data-aos="zoom-in">
        <div className='intro_content-text'>
            <span className='subtitle_top col-12'>Bienvenido!!</span>
            <h1 className='title_init col-12'>
              Frontend <span className='dev'>Dev</span>eloper
            </h1>
            <p className='col-12'>Conoce un poco de mí, de mi trabajo, habilidades y proyectos personales.</p>
            <div className='short_description'>
              Para saber mas de mi experiencia como desarrollador <Link type='button' to="/" className='contact_me'>contactame !</Link>
            </div>
        </div>
        <div className='person_card'>
          <div className='container_person'>
            <PersonCard/>
          </div>
        </div>
      </div>
      <Portafolio />
      <ExperienciaProfesional/>
      <Skills />
      <FormContact/>

    </div>
  )
}
