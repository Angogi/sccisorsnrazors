import React from "react";
import  {GoogleMap, withScriptjs, withGoogleMap, InfoWindow, Marker} from 'react-google-maps';




const Map = (props) => {

    
     
    return (
        <GoogleMap 
            defaultZoom={15}
            defaultCenter={{lat: 41.379228, lng: 2.152531}}
            
            
        >
            <Marker
                name={'SccisorsNrazors'}
                title={'The marker`s title will appear as a tooltip.'}
                position={{lat: 41.379228, lng: 2.152531}} />
            <Marker />
           
        </GoogleMap>
    );
};

export default  withScriptjs(
    withGoogleMap(
        Map
    )
)

