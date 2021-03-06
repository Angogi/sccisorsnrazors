import React from 'react';
import Typewriter from 'typewriter-effect';
import './LandingPromoWomen2.css';
import JotForm from './JotForm';

import Map from './Map';
import credentials from './Credentials';
const mapUrl = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;


function LandingPromoWomen2() {
    return (
        <div className="landingPromoWomen2">
           
      
            <div className="datePickerCard__info">

            <div className="textCard">        
                <h1>Super descuento de:
                    <Typewriter
                        options={{
                        strings: ['€20'],
                        autoStart: true,
                        loop: true,
                        
                        }}
                    />
                </h1>
                <br/>
                
                <h2>
                    <Typewriter
                        options={{
                        strings: ['Una Hora de','Quiromasaje localizado', 'O', 'Quiromasaje General'],
                        autoStart: true,
                        loop: true,
                        }}
                    />
                </h2>
                         

                </div>
                
                
                <div className="promo2__contentCard">
                    <h3>Recibe tu descuento tan solo agendando tu próxima cita.</h3>
                    <br />
                    <h3 className="second__text">Ten en cuenta que para acceder al descuento tu cita debe ser entre lunes y jueves.</h3>

                    <h5>Sin Descuento €55</h5>
                    <h5>Con Descuento €35</h5>
                </div>
          
          

            </div>

            <JotForm />

            <div>
            <div className="closer">
                <h3> Estamos en Carrer de la Diputació, Número 50, 08015 Barcelona.<br/>Fijo (34)935149968<br/> Movil 722838161 </h3>
            </div>

            <Map 
                googleMapURL= {mapUrl}
                containerElement= {<div style={{height: '400px'}}></div>}
                mapElement= {<div style={{height: '100%'}}></div>}
                loadingElement= {<p>Cargando</p>}

            />
            </div>

            <div className="extra__content"> 
                <h3>Scissors<br/> N <br/>Razors <br/>¡Cuida de ti!</h3>
            </div>

            
    </div>
    )
}

export default LandingPromoWomen2
