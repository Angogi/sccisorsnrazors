import React from 'react';

import Typewriter from 'typewriter-effect';
import './LandingPromoWomen1.css';
import JotForm from './JotForm';

import Map from './Map';
import credentials from './Credentials';
const mapUrl = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

function LandingPromoWomen1() {
    return (
        <div className="landingPromoWomen1">
            
            <div className="datePickerCard__info">

                <div className="textCard">        
                    <h1>Super descuento de:
                        <Typewriter
                            options={{
                            strings: ['€25'],
                            autoStart: true,
                            loop: true,
                            
                            }}
                        />
                    </h1>
                    <br/>
                    
                    <h2>
                        <Typewriter
                            options={{
                            strings: ['Balayage', '+' , 'Matiz', '+' , 'Corte', '+', 'Hidratación de Botox'],
                            autoStart: true,
                            loop: true,
                            }}
                        />
                    </h2>
             

                </div>

                
                
                <div className="promo1__contentCard">
                    <h3>Recibe tu descuento tan solo agendando tu próxima visita.</h3>
                    <br />
                    <h3 className="second__text">Ten en cuenta que para acceder al descuento tu visita debe ser entre lunes y jueves.</h3>
                
                    <h5>
                        Sin Descuento €125
                    </h5>
                    <h5>
                        Con Descuento €100
                    </h5>
                </div>

               
          
          

            </div>

            <JotForm />

            <div className="map">
            <div className="closer">
                <h3> Estamos en Carrer de la Diputació, Número 50, 08015 Barcelona</h3>
            </div>

            <Map 
                googleMapURL= {mapUrl}
                containerElement= {<div style={{height: '400px'}}></div>}
                mapElement= {<div style={{height: '100%'}}></div>}
                loadingElement= {<p>Cargando</p>}

            />
            </div>
            <div className="extra__content"> 
              
            </div>

            
    </div>
    )
}

export default LandingPromoWomen1
