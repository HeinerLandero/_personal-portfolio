import { React, useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { proyectos } from '../data/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const Portafolio = ({ limite }) => {
  const [slide, setSlide] = useState(window.innerWidth > 992 ? 2 : 1);
  const location = useLocation();

  useEffect(() => {
    const updatedSlides = () => {
      setSlide(window.innerWidth > 992 ? 2 : 1);
    };
    window.addEventListener('resize', updatedSlides);
    return () => {
      window.removeEventListener('resize', updatedSlides);
    };
  }, []);

  const isHomePage = location.pathname === "/inicio";

  return (
    <div 
      className='container container_swiper' 
      {...(isHomePage ? { 'data-aos': 'zoom-in' } : {})}
    >
      <h2 className='title_porfolio mt-4 mb-4'>Proyectos</h2>
      <Swiper
        spaceBetween={80}
        slidesPerView={slide}
        centeredSlides={true}
        cssMode={true}
        navigation={true}
        mousewheel={false}
        keyboard={true}
        loop={false}
        modules={[Navigation, Mousewheel, Keyboard]}
      >
        {
          proyectos.map(proyecto => (
            <div className="col-12 col-md-6 col-lg-3 mb-4" key={proyecto.id}>
              <SwiperSlide className="card">
                <img loading="lazy" src={proyecto.imagen} className="card-img-top" alt={proyecto.alt} />
                <div className="card-body">
                  <h3 className="card-title">{proyecto.name}</h3>
                  <p className="card-text">{proyecto.content}</p>
                  <span className='learn_more-proyct'>
                    <Link to={'/portafolio/' + proyecto.id}>LEE MAS</Link>
                  </span>
                </div>
              </SwiperSlide>
            </div>
          ))
        }
      </Swiper>
    </div>
  )
}
