import React from 'react';
// import DatePickerCard from './components/EnrollmentForm';
import Typewriter from 'typewriter-effect';
import './LandingPromoMen.css';
import JotForm from './JotForm';
import Map from './Map';
import credentials from './Credentials';
const mapUrl = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

function LandingPromoMen() {

   

    return (
        <div className="landingPromoMen">

             <div className="datePickerCard__info">

                <div className="promoMan__contentCard">

                    <div className="textCard">        
                        <h1>Super descuento de:
                            <Typewriter
                                options={{
                                strings: ['15€'],
                                autoStart: true,
                                loop: true,
                                
                                }}
                            />
                        </h1>
                        <br/>
                        
                        <h2>
                            <Typewriter
                                options={{
                                strings: ['Corte', '+' , 'Arreglo de Barba', '+','Limpieza Facial'],
                                autoStart: true,
                                loop: true,
                                }}
                            />
                        </h2>
    
                       

                    </div>
                   

                    <h3>Recibe tu descuento al reservar tu próxima cita.</h3>
                    <br />
                    <h3 >Ten en cuenta que para acceder al descuento, tu cita debe ser entre lunes y jueves.</h3>
                    <br />
                    <br />

                  
                        

                    <h5> Sin descuento €47,5</h5>  
                    <h5> Con descuento €32,5</h5> 

                   


                </div>


            </div>

            <JotForm />
            <div>
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
                
            

           
          
            
        </div>
    )
}

export default LandingPromoMen
