"use client"

import Map from '@/components/Map/Map';
import {Container} from "@mui/joy";
import Button from "@mui/joy/Button";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import * as React from "react";
import {useEffect, useState} from "react";



const DEFAULT_CENTER = [10.459,105.631]

export default function MapPage({}) {
    const [listLocation, setListLocation] = useState([])
    const [location, setLocation] = useState([10, 105]);

    useEffect(() => {
        fetchData()
        console.log("call 2 times")
    }, []);
    useEffect(() => {
        if('geolocation' in navigator) {
            // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                const { latitude, longitude } = coords;
                console.log('{ latitude, longitude }',  latitude+"-"+ longitude )
                setLocation([parseFloat(latitude), parseFloat(longitude) ]);
            })
        }
    }, []);
    const fetchData = async () => {
        fetch('/api/list-location/get-all').then( async r => {
            const result = await r.json();
            setListLocation(result.result)
        })
    }
    function LocationMarker() {
        console.log(location)
        // return location === null ? null : (
        //     <span sx={{filter: "hue-rotate(135deg)"}}>
        //     <Marker icon={redIcon} position={location}>
        //         <Popup>You are here</Popup>
        //     </Marker>
        //         </span>
        // )

        return null
    }

    return (
        <Container>
            <Map style={{
                width: '100%',
                height: '100%'
            }} width="800" height="400" markers={listLocation} center={DEFAULT_CENTER} zoom={15}>
                {({TileLayer, Marker, Popup, LayersControl}) => {
                    return (
                        <>
                            <LayersControl position="topright">
                                <LayersControl.Overlay checked name="Street">
                                    <TileLayer
                                        url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                                        maxZoom={20}
                                        subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
                                    />
                                </LayersControl.Overlay>
                                <LayersControl.Overlay name="Satellite">
                                    <TileLayer
                                        url="http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
                                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                                        maxZoom={20}
                                        subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
                                    />
                                </LayersControl.Overlay>
                            </LayersControl>
                            {
                                listLocation.map(item => (
                                    <Marker position={[parseFloat(item.lat), parseFloat(item.long)]}>
                                        <Popup sx={{width: "80%", height: "80%"}}>
                                            <strong>{item.name1}</strong>
                                            <br/> {item.name2}
                                            <br/> {item.name3}
                                            <br/>
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'flex-end',
                                            }}>
                                                <Button
                                                    color="primary"
                                                    startDecorator={<DownloadRoundedIcon/>}
                                                    size="sm"

                                                >
                                                    Edit
                                                </Button>

                                            </div>
                                        </Popup>
                                    </Marker>)
                                )
                            }
                            <LocationMarker/>
                        </>
                    );
                }}
            </Map>
        </Container>
    )
}
