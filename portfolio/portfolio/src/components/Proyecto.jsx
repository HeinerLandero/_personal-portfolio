import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { proyectos } from '../data/data';

export const Proyecto = () => {
  const [proyect, setProyect] = useState({});
  const params = useParams();

  useEffect(()=>{
    let proyect = proyectos.filter(proyecto => proyecto.id === params.id ); 
    
    setProyect(proyect[0]);
    
  },[params.id]);

  return (
      <div className='proyect_container container'>
        <div className='content_proyect'>
            <div className='container mt-5'>
                <div className='row d-flex flex-column-reverse flex-md-row align-items-center'>
                  <div className='col-md-6 col-12'>
                    <h1 className='title_page-proyect text-center text-md-start'>{proyect.name}</h1>
                    <p className='text_proyect'>
                      {proyect.content}
                    </p> 
                  </div>
                  <figure  className='col-md-6 col-12'>
                    <img loading="lazy" width='100%' src={proyect.imagen} alt={'imagen '+proyect.alt}/>
                  </figure>
                </div>
            </div>
        </div>
      </div>
  )
}
