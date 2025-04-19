import { useState } from "react";
import { MagicCard } from "react-magic-motion";
import "react-magic-motion/card.css";
import imgPerson from '../images/default.webp';
import iconClose from '../images/cerrar.png';
import iconOpen from '../images/menu.png';
 
function CloseFullscreenSvg() {
  return (
    <>
        <img loading="lazy" width="32" height="32" className="icon-button" src={iconClose} alt="close"/>
    </>
  );
}
 
function OpenFullscreenSvg() {
  return (
    <>
        <img loading="lazy" width="32" height="32" className="icon-button" src={iconOpen}  alt="open"/>
    </>
  );
}
 
export default function PersonCard(){
  const [isCardExpanded, setIsCardExpanded] = useState(false);
 
  return (
    <MagicCard
      isCardExpanded={isCardExpanded}
      onBackgroundFadeClick={() => setIsCardExpanded(false)}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div
        style={{
          width: isCardExpanded ? "40rem" : "17rem",
          gap: "1rem",
          display: "flex",
          flexDirection: "column",
          padding: "2.35rem 0",
          color: isCardExpanded ? "white" : "currentColor",
          scrollbarWidth: 'none'
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <button
            style={{ position: "absolute", right: 0, zIndex: 9999, background : 'transparent', border:'none', overflow:'visible' }}
            onClick={() => setIsCardExpanded(!isCardExpanded)}
          >
            <figure >
              {isCardExpanded ? (
                <CloseFullscreenSvg  />
              ) : (
                <OpenFullscreenSvg />
              )}
            </figure>
          </button>
        </div>
        <div >
          <img loading="lazy" onClick={() => setIsCardExpanded(!isCardExpanded)}
            style={{
              width: isCardExpanded ? "24rem" : "17.5rem",
              height: "auto",
            }}
            alt="Heiner Imagen"
            src={imgPerson}
          />
          {isCardExpanded && (
            <section
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
                <h4 style={{ fontSize: "1.2em", fontWeight: 600 }}>
                    Heiner Landero Montoya 
                </h4>
                <h4 style={{ fontSize: "1.2em", fontWeight: 600 }}>
                    ¡Bienvenido, conoce un poco sobre mi!
                </h4>
              <p>
                  Con una sólida experiencia en el dinámico mundo del marketing centrado en la industria hotelera, mi pasión por crear estrategias efectivas y creativas se combina perfectamente con mi amor por el trabajo en equipo. Siempre he creído que la colaboración es la clave para el éxito, y me comprometo a aportar mi energía y habilidades para alcanzar nuestros objetivos comunes.
                  <br></br>
                  Me considero un eterno aprendiz autodidacta, siempre buscando nuevas formas de mejorar y adaptarme a un entorno en constante cambio. Creo firmemente que el conocimiento es la herramienta más poderosa que podemos poseer, y estoy dedicado a expandir mis habilidades y conocimientos para seguir siendo relevante en este apasionante campo.
                  <br></br>
                  ¡Explora mi portfolio y descubre cómo puedo contribuir al crecimiento y éxito de tu proyecto!
              </p>
            </section>
          )}
        </div>
      </div>
    </MagicCard>
  );
}