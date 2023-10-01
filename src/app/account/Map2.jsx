import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Map2() {
    const positions = [
        { lat: 51.505, lon: -0.09, text: 'Marker 1' },
        { lat: 51.51, lon: -0.1, text: 'Marker 2' },
        { lat: 51.515, lon: -0.1, text: 'Marker 3' },
    ];

    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {positions.map((position, index) => (
                <Marker
                    key={index}
                    position={[position.lat, position.lon]}
                >
                    <Popup>{position.text}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default Map2;