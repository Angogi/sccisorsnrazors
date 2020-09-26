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
                    <h3 className="second__text">Ten en cuenta que para acceder al descuento, tu visita debe ser entre lunes y jueves.</h3>
                    <br />
                    <br />

                  
                        

                    <h5> Sin descuento €47,5</h5>  
                    <h5> Con descuento €32,5</h5> 

                   


                </div>



            </div>

            <JotForm />

            <Map 
                googleMapURL= {mapUrl}
                containerElement= {<div style={{height: '400px', width: '90vw'}}></div>}
                mapElement= {<div style={{height: '100%'}}></div>}
                loadingElement= {<p>Cargando</p>}

            />
                
            

           
          
            
        </div>
    )
}

export default LandingPromoMen
