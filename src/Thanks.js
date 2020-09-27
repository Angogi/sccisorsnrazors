import React from 'react';
import "./Thanks.css";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function Thanks() {
    return (
        <div className="thanks">
            <h1>¡En hora buena!<br/> Tu cita ha sido reservada con éxito.</h1>
            <div className="logo" />
            <h3>Un email con los datos de tu cita ha sido enviado. Si desea modificar o cancelar tu cita, 
                por favor hacerlo via Whatsapp o llamando al siguiente número de teléfono, (34) 722838161, con <span>24h de antelación.</span> </h3>
          
  
            <h3>Siguenos en nuestras redes sociales</h3>
            <div className="social-media-icons">  
                <a href="https://www.facebook.com/scissorsnrazorsoficial"><FacebookIcon /></a>
                <a href="https://www.instagram.com/scissorsnrazorsoficial" ><InstagramIcon /></a>
            </div> 

            <a href="https://wa.me/34722838161"className="whatsapp"><WhatsAppIcon /></a>
        </div>
    )
}

export default Thanks
