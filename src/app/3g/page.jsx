'use client'
import React, {useState, useEffect, Fragment} from "react";
import {
    Container,
    Button,
    FormControl,
    FormLabel,
    Input,
    Sheet, Card, CardCover, CardOverflow, CardContent, Chip,
} from "@mui/joy";
import {
    Modal,
    ModalDialog,
    ModalClose,
    Typography,
} from "@mui/joy";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import Map from '@/components/Map/Map';
// import LeafletIcon from './LeafletIcon';
import Header from "../../components/Header";
import EditLocationModal from "../home/EditLocationModal";
import {Add, AddCard, Clear, EditLocationAlt} from "@mui/icons-material";
import Image from "next/image";
import data from './data.json'
import AspectRatio from "@mui/joy/AspectRatio";
import dynamic from "next/dynamic";

const DEFAULT_CENTER = [10.459, 105.631];

export default function MapPage() {
    const [listLocation, setListLocation] = useState(data);
    const [location, setLocation] = useState([10, 105]);
    const [openEdit, setOpenEdit] = useState(false);
    const [openNew, setOpenNew] = useState(false)
    const [formData, setFormData] = useState({
        stt: "",
        name1: "",
        name2: "",
        name3: "",
        lat: "",
        long: "",
        FPT: "",
        SCTV: "",
        VTVCab: "",
        VMS: "",
    });



    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                const { latitude, longitude } = coords;
                setLocation([parseFloat(latitude), parseFloat(longitude)]);
            });
        }
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('/api/list-location/get-all');
            const result = await response.json();
            setListLocation(result.result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleSave = async () => {
        try {
            const response = await fetch('/api/list-location/edit', {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                }),
            });
            setOpenEdit(false);
            const result = await response.json();
            // Handle the result as needed
        } catch (error) {
            console.error("Error saving data:", error);
        }
    };

    const handleChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };


    const generateFormField = (fieldId, label, type, required = false) => (
        <FormControl id={fieldId}>
            <FormLabel>{label}</FormLabel>
            <Input
                name={fieldId}
                type={type}
                required={required}
                value={formData[fieldId]}
                onChange={(e) => handleChange(fieldId, e.target.value)}
            />
        </FormControl>
    );

    const iconData = {
        CLA: 'marker-icon-2x.png',
        HCL: 'green-marker-icon-2x.png',
        TMU: 'mint-marker-icon-2x.png',
        TBI: 'orange-marker-icon-2x.png',
        SDE: 'purple-marker-icon-2x.png',
        THO: 'yellow-marker-icon-2x.png',
        CTH: 'lemon-marker-icon-2x.png',
        LVU: 'gem-marker-icon-2x.png',
        HNG: 'pink-marker-icon-2x.png',
        HNU: 'gem-marker-icon-2x.png',
        TNO: 'blue-marker-icon-2x.png',
        LVO: 'red-marker-icon-2x.png',
        default: 'marker-icon-2x.png',
    };
    const defaultIconOptions = {
        iconRetinaUrl: `leaflet/images/red-marker-icon-2x.png`,
        iconUrl: 'leaflet/images/marker-icon.png',
        shadowUrl: 'leaflet/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41],
    };
    // @ts-ignore
    const iconUrl = `leaflet/images/${iconData.default}`;
        // const LeafletIcon = Leaflet.icon({
        //     ...defaultIconOptions,
        //     iconRetinaUrl: iconUrl,
        // });


    const [modalKey, setModalKey] = useState(0);

    function handleClickEdit(item) {
        setModalKey((prevKey) => prevKey + 1);
        setFormData(item)
        setOpenEdit(true);

    }


    return (
        <Container>
            <Header location={"Bản đồ"} children={
                <Button onClick={() => setOpenNew(true)} startDecorator={<Add />}>Thêm mới</Button>
            } />
            <EditLocationModal
                key={modalKey}
                locationData={null} onClose={() => setOpenNew(false)} onSave={handleSave} open={openNew} location={location} />
            <Map
                style={{ width: { xs: '80vw', sm: '70vw' }, height: "70vh" }}
                // markers={listLocation}
                center={DEFAULT_CENTER}
                zoom={15}
            >
                {({ TileLayer, Marker, Popup, LayersControl }) => (
                    <>
                        <LayersControl position="topright">
                            <LayersControl.Overlay checked name="Street">
                                <TileLayer
                                    url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                                    attribution="PHT"
                                    maxZoom={20}
                                    subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
                                />
                            </LayersControl.Overlay>
                            <LayersControl.Overlay name="Satellite">
                                <TileLayer
                                    url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
                                    attribution="PHT"
                                    maxZoom={20}
                                    subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
                                />
                            </LayersControl.Overlay>
                        </LayersControl>
                        <EditLocationModal
                            key={modalKey}
                            locationData={formData} onClose={() => setOpenEdit(false)} onSave={handleSave} open={openEdit} location={location} />
                        {listLocation.map((item) => (
                            <>

                                <Marker key={item.id} position={[item.Lat, item.Lon]}>
                                <Popup sx={{ width: "80%", height: "80%", margin: 0 }}>
                                    <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
                                        <CardOverflow>
                                            {item.image &&  <AspectRatio sx={{ minWidth: 200 }}>
                                                <Image
                                                    alt="image"
                                                    src={item.image}
                                                    fill
                                                    objectPosition={'block'}
                                                    className="rounded"
                                                    loading="lazy"
                                                    objectFit="contain"
                                                />

                                            </AspectRatio>
                                            }
                                        </CardOverflow>
                                        <CardContent>
                                            <Typography level="body-xs">
                                                <strong>{item.SiteID}</strong>
                                                <br />{item.MaCSHT}
                                                <br />{item.TenCSHT}
                                            </Typography>
                                            <Typography level="body-sm">
                                                {item.Diachi}
                                                <br />{item.Matram3G}
                                                <br />{item.Tentram3G}                                            </Typography>
                                        </CardContent>
                                        <CardOverflow>

                                            <Button
                                                variant="solid"
                                                color="primary"
                                                startDecorator={<EditLocationAlt />}
                                                size="sm"
                                                onClick={() => {
                                                    handleClickEdit(item);
                                                }
                                                }>
                                                Edit
                                            </Button>
                                        </CardOverflow>
                                    </Card>

                                </Popup>

                            </Marker>
                                </>
                        ))}
                    </>
                )}
            </Map>
        </Container>
    );
}
