import React from 'react';
import { experiences } from '../data/experiences';

export const ExperienciaProfesional = () => {
  return (
    <div className='container container_experience' data-aos="zoom-in">
        <div className='intro_content col-12'>
            <h2 className='experience_title'>
                EXPERIENCIA
            </h2>
            <p className='experience_content'>
                Experiencia profesional y cargos ejercidos.
            </p>
        </div>
        <div className='experience_content-text d-flex'>
            {/* <span className='line_progress col-3'></span> */}
            <div className='container_article'>{experiences.map((experience)=>(
                <article className='experience'>
                    <h3 className='company '>{experience.company}</h3>
                    <p className='charge'>{experience.charge}</p>
                    <p className='funtions'>{experience.funtions}</p>
                    <p className='date_long'>{experience.date}</p>
                </article>
            ))}
            </div>
        </div>
        
    </div>
  )
}
