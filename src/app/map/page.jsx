'use client'
import React, { useState, useEffect } from "react";
import {
    Container,
    Button,
    FormControl,
    FormLabel,
    Input,
    Sheet,
} from "@mui/joy";
import {
    Modal,
    ModalDialog,
    ModalClose,
    Typography,
} from "@mui/joy";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import Map from '@/components/Map/Map';
import Header from "../../components/Header";

const DEFAULT_CENTER = [10.459, 105.631];

export default function MapPage() {
    const [listLocation, setListLocation] = useState([]);
    const [location, setLocation] = useState([10, 105]);
    const [open2, setOpen2] = useState(false);

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
        fetchData();
    }, []);

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
                    id: row.id,
                    ...formData,
                }),
            });
            setOpen2(false);
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

    const LocationMarker = () => {
        // Marker component code here
        return null;
    };

    function handleClickEdit(item) {
        
    }
    const positions = [
        { lat: 51.505, lon: -0.09, text: 'Marker 1' },
        { lat: 51.51, lon: -0.1, text: 'Marker 2' },
        { lat: 51.515, lon: -0.1, text: 'Marker 3' },
    ];

    return (
        <Container>
            <Header location={"Bản đồ"}/>

            <Map
                style={{ width: "80vw", height: "70vh" }}
                width="80vw"
                height="80vh"
                markers={listLocation}
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
                        <Modal open={open2} onClose={() => setOpen2(false)}>
                            <ModalDialog aria-labelledby="filter-modal" layout="center">
                                <ModalClose />
                                <Typography id="filter-modal" level="h2">
                                    Chỉnh sửa
                                </Typography>
                                <form
                                    style={{ overflow: "scroll" }}
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        handleSave();
                                    }}
                                >
                                    {generateFormField("stt", "STT", "text", true)}
                                    {generateFormField("name1", "Tên cấp 1", "text", true)}
                                    {generateFormField("name2", "Tên cấp 2", "text")}
                                    {generateFormField("name3", "Tên cấp 3", "text")}
                                    {generateFormField("lat", "lat", "text", true)}
                                    {generateFormField("long", "long", "text", true)}
                                    {generateFormField("FPT", "FPT", "text")}
                                    {generateFormField("SCTV", "SCTV", "text")}
                                    {generateFormField("VTVCab", "VTVCab", "text")}
                                    {generateFormField("VMS", "VMS", "text")}
                                    <Sheet sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                        <Button sx={{ mt: 1 , alignSelf: 'center'}} type='submit'>1 2 3 Dzô</Button>
                                    </Sheet>
                                </form>
                            </ModalDialog>
                        </Modal>
                        {listLocation.map((item) => (
                            <Marker key={item.id} position={[parseFloat(item.lat), parseFloat(item.long)]}>
                                <Popup sx={{ width: "80%", height: "80%" }}>
                                    <strong>{item.name1}</strong>
                                    <br />{item.name2}
                                    <br />{item.name3}
                                    <br />
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}>
                                        <Button
                                            color="primary"
                                            startDecorator={<DownloadRoundedIcon />}
                                            size="sm"
                                            onClick={() => handleClickEdit(item)}
                                        >
                                            Edit
                                        </Button>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                        <LocationMarker />
                    </>
                )}
            </Map>
        </Container>
    );
}
