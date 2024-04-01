import React, {useState, useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import Nasa from '../../data/Nasa Herc.kml';

//import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Mapa({latitud, longitud}){
    const [position, setPosition] = useState([34.710934, -86.641119]);
    useEffect(() => {
        setPosition([latitud, longitud]);
    }, [latitud, longitud]);

    const Marker = ({ text }) => (
        <div style={{ color: 'red', fontWeight: 'bold' }}>
            {text}
        </div>
    );

    return (
        <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_KEY }}
            defaultCenter={position}
            defaultZoom={15}
            onGoogleApiLoaded={({ map, maps }) => {
                
                const kml = new maps.KmlLayer({
                    url: {Nasa},
                    map: map,
                });
                kml.setMap(map);
            }}
        >

        </GoogleMapReact>
    );
}
export default Mapa;