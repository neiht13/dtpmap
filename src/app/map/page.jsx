'use client'
import React, { useState, useEffect } from "react";
import {
    Container,
    Button,
    FormControl,
    FormLabel,
    Input,
    Sheet, Card, CardCover, Autocomplete, CardOverflow, CardContent,
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
import EditLocationModal from "../home/EditLocationModal";
import {Add, Clear, EditLocationAlt} from "@mui/icons-material";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import AspectRatio from "@mui/joy/AspectRatio";

const DEFAULT_CENTER = [10.459, 105.631];

export default function MapPage() {
    const [listLocation, setListLocation] = useState([]);
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
    const [searchText, setSearchText] = useState('');
    const [tenChinh, setTenChinh] = useState('');
    const uniqueName1Set = new Set();
    if (listLocation?.length > 0) {
        listLocation.forEach((item) => {
            uniqueName1Set.add(item.name1);
        });
    }
    const uniqueName1List = Array.from(uniqueName1Set);

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



    const [modalKey, setModalKey] = useState(0);

    function handleClickEdit(item) {
        setModalKey((prevKey) => prevKey + 1);
        setFormData(item)
        setOpenEdit(true);

    }
    const positions = [
        { lat: 51.505, lon: -0.09, text: 'Marker 1' },
        { lat: 51.51, lon: -0.1, text: 'Marker 2' },
        { lat: 51.515, lon: -0.1, text: 'Marker 3' },
    ];

    return (
        <Container>
            <Header location={"Bản đồ"} children={
                <Button onClick={() => setOpenNew(true)} startDecorator={<Add />}>Thêm mới</Button>
            } />
            <Sheet
                className="SearchAndFilters-mobile"
                sx={{
                    display: {
                        xs: 'flex',
                        sm: 'flex',
                    },
                    my: 1,
                    gap: 1,
                }}
            >
                <FormControl>
                    <FormLabel>Tìm kiếm</FormLabel>
                    <Input
                        size="sm"
                        placeholder="Search"
                        onChange={e => setSearchText(e.target.value)}
                        startDecorator={<SearchIcon />}
                        sx={{ flexGrow: 1 }}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Tên chính</FormLabel>
                    <Autocomplete
                        placeholder="Combo box"
                        options={uniqueName1List}
                        sx={{ width: 150 }}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                event.defaultMuiPrevented = true;
                                // @ts-ignore
                                setTenChinh(event.target?.value);
                            }
                        }}
                        onChange={(event, value) => {
                            // @ts-ignore
                            setTenChinh(value);
                        }}
                    />
                </FormControl>
            </Sheet>
            <EditLocationModal
                key={modalKey}
                locationData={null} onClose={() => setOpenNew(false)} onSave={handleSave} open={openNew} location={location} />
            <Map
                style={{ width: { xs: '80vw', sm: '70vw' }, height: "70vh" }}
                width="80vw"
                height="80vh"
                markers={listLocation}
                center={DEFAULT_CENTER}
                zoom={15}
            >
                {({ TileLayer, Marker, Popup, LayersControl }) => (
                    <>
                        <LayersControl position="topright">
                                <TileLayer
                                    url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                                    attribution="PHT"
                                    maxZoom={20}
                                    subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
                                />
                            <LayersControl.Overlay name="Bản đồ vệ tinh">
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
                        {listLocation.map((item) => {
                            if (tenChinh && item.name1 !== tenChinh) {
                                return false;
                            }
                            let name1 = item.name1?.toLowerCase() || '';
                            let name2 = item.name2?.toLowerCase() || '';
                            let name3 = item.name3?.toLowerCase() || '';
                            let ext = searchText?.toLowerCase()
                            if (ext && !name1.includes(searchText) && !name2.includes(searchText) && !name3.includes(searchText)) {
                                return false;
                            }
                            return (
                                    <Marker
                                        key={item.id} position={[parseFloat(item.lat), parseFloat(item.long)]}>
                                        <Popup sx={{width: "80%", height: "80%"}}>
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

                                                        <strong>{item.name1}</strong>
                                                        <br/>
                                                    </Typography>
                                                    <Typography level="body-sm">
                                                        {item.name2}
                                                        <br/>{item.name3}
                                                        <br/>
                                                    </Typography>
                                                    <Typography level="body-sm">
                                                        Độ cao: {item.doCao} | Ngày thuê: {item.ngayThue}
                                                        <br/>
                                                    </Typography>
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
                            )
                        })}
                    </>
                )
                }
            </Map>
        </Container>
    );
}
