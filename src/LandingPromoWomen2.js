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
                    <h3>Recibe tu descuento tan solo agendando tu próxima visita.</h3>
                    <br />
                    <h3 className="second__text">Ten en cuenta que para acceder al descuento tu visita debe ser entre lunes y jueves.</h3>

                    <h5>Sin Descuento €55</h5>
                    <h5>Con Descuento €35</h5>
                </div>
          
          

            </div>

            <JotForm />

            <Map 
                googleMapURL= {mapUrl}
                containerElement= {<div style={{height: '400px', width: '90vw'}}></div>}
                mapElement= {<div style={{height: '100%'}}></div>}
                loadingElement= {<p>Cargando</p>}

            />

            <div className="extra__content"> 
              
            </div>

            
    </div>
    )
}

export default LandingPromoWomen2
