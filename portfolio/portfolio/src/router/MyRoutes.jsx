import React from 'react';
import {Routes, Route, BrowserRouter, Navigate, Link} from 'react-router-dom';
import {Inicio} from '../components/Inicio';
import { Portafolio } from '../components/Portafolio';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';
import { Proyecto} from '../components/Proyecto';

export const MyRoutes = () => {
  return (
    <BrowserRouter>
         {/*Navegacion*/}
         <HeaderNav/>
         {/*Contenido*/}
         <section className='content'>
            <Routes>
                <Route path='/' element={< Navigate to ="/inicio"/>}/>
                <Route path='/inicio' element={<Inicio/>}/>
                <Route path='/portafolio' element={<Portafolio/>}/>
                <Route path='/portafolio/:id' element={<Proyecto/>}/>
                <Route path='*' element={
                  <div>
                      <h1>ERROR 404</h1>
                      <p>page no found</p>
                     <Link type='button' to="/" className='contact_me'>inicio</Link>
                  </div>

                }/>

            </Routes>
         </section>
        {/*Footer*/}
        <Footer/>

    </BrowserRouter>
  )
}
