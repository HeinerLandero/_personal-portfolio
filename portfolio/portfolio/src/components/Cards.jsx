import React from 'react';
import { skills } from '../data/skills';

export const Cards = () => {
  return (
    <section className="page card-1-page">
      <div className="cards">
        {skills.map((card) => (
          <label id={card.name} className='content_card'>
            <input type="checkbox" />
            <div className="card">
              <div className="front">
                <header>
                  <h2 className='title_skill'>{card.name}</h2>
                  <span className="material-symbols-outlined open"></span>
                </header>
                <figure className='container_logo-skill'>
                  <img loading="lazy" src={card.imagen} alt={card.alt}/>
                </figure>
                {/* <label for="disk_c">{`${(card.main) * 100}%`}</label>
                <meter id="disk_c" value={card.main} min="0" max="1"></meter> */}
              </div>
              <div className="back">
                <header>
                  <h2>{card.name}</h2>
                  <span className="material-symbols-outlined close"></span>
                </header>
                <ul className='list_url-skills'>
                  {card.proyects_relations.map((url)=>{
                    return <li className='item_url_skill' alt={url}>
                      <a target='_blank' rel="noopener noreferrer" href={`https://github.com/HeinerLandero/${url}`}>{url}</a></li>
                  })}
                </ul>
              </div>
            </div>
          </label>
        ))}
      </div>
    </section>
  );
};