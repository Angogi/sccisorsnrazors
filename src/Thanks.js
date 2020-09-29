import React from 'react';
import "./Thanks.css";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function Thanks() {
    return (
        <div className="thanks">
            <h1><span>¡En hora buena!</span><br/> Tu cita ha sido reservada con éxito.</h1>
            <div className="logo" />
            <h3>Un email con los datos de tu cita ha sido enviado. <br /> Si desea modificar o cancelar tu cita, 
                puedes hacerlo via Whatsapp o llamando al siguiente número (34) 722838161, (fijo) 935149968 con <span>24h de antelación.</span> </h3>
          
  
            <h3>Siguenos en nuestras redes sociales</h3>
            <div className="social-media-icons">  
                <a href="https://www.facebook.com/scissorsnrazorsoficial" className="facebookIcon"><FacebookIcon /></a>
                <a href="https://www.instagram.com/scissorsnrazorsoficial" class="instagramIcon" ><InstagramIcon /></a>
                <a href="https://wa.me/34722838161"className="whatsapp"><WhatsAppIcon /></a>

               
            </div> 

        </div>
    )
}

export default Thanks
