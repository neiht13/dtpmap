"use client"

import Map from '@/components/Map/Map';
import {Container} from "@mui/joy";
import Button from "@mui/joy/Button";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import * as React from "react";
import {useEffect, useState} from "react";
import EditModal from "../../components/EditModal";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Sheet from "@mui/joy/Sheet";



const DEFAULT_CENTER = [10.459,105.631]

export default function MapPage({}) {
    const [listLocation, setListLocation] = useState([])
    const [location, setLocation] = useState([10, 105]);
    const [open2, setOpen2] = React.useState(false);

    const [name1, setName1] = useState("")
    const [name2, setName2] = useState("")
    const [name3, setName3] = useState("")
    const [stt, setStt] = useState("")
    const [lat, setLat] = useState("")
    const [long, setLong] = useState("")
    const [FPT, setFPT] = useState("")
    const [SCTV, setSCTV] = useState("")
    const [VTVCab, setVTVCab] = useState("")
    const [VMS, setVMS] = useState("")

    useEffect(() => {
        fetchData()
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
    const handleSave = () =>{
        fetch('/api/list-location/edit',
            {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    {
                        id: row.id,
                        stt,
                        name1,
                        name2,
                        name3,
                        lat,
                        long,
                        FPT,
                        SCTV,
                        VTVCab,
                        VMS
                    }
                ) // body data type must match "Content-Type" header
            }
        ).then( async r => {
            setOpen2(false)
            const result = await r.json();
        })
    }




    const handleClickEdit = (row) => {
        setOpen2(true)
        setStt(row.stt)
        setName1(row.name1)
        setName2(row.name2)
        setName3(row.name3)
        setLat(row.lat)
        setLong(row.long)
        setFPT(row.FPT)
        setSCTV(row.SCTV)
        setVTVCab(row.VTVCab)
        setVMS(row.VMS)
    }
    const EModal =(row) =>{
        return (
            <Modal open={open2} onClose={() => setOpen2(false)}>
                <ModalDialog aria-labelledby="filter-modal" layout="center">
                    <ModalClose />
                    <Typography id="filter-modal" level="h2">
                        Chỉnh sửa
                    </Typography>
                    <form style={{overflow: "scroll"}} onSubmit={e=> {
                        e.preventDefault();
                        handleSave()
                    }
                    }>
                        <FormControl id="stt">
                            <FormLabel>STT</FormLabel>
                            <Input name="text" type="text"
                                   required
                                   value={stt}
                                   onChange={e=>setStt(e.target.value)}
                            />
                        </FormControl>
                        <br/>
                        <FormControl id="name1">
                            <FormLabel>Tên cấp 1</FormLabel>
                            <Input name="text" type="text"
                                   required
                                   value={name1}
                                   onChange={e=>setName1(e.target.value)}
                            />
                        </FormControl>
                        <br/>
                        <FormControl id="name2">
                            <FormLabel>Tên cấp 2</FormLabel>
                            <Input name="text" type="text"

                                   value={name2}
                                   onChange={e=>setName2(e.target.value)}
                            />
                        </FormControl>
                        <br/>
                        <FormControl id="name3">
                            <FormLabel>Tên cấp 3</FormLabel>
                            <Input name="text" type="text"
                                   value={name3}
                                   onChange={e=>setName3(e.target.value)}
                            />
                        </FormControl>
                        <br/>

                        <FormControl id="lat">
                            <FormLabel>lat</FormLabel>
                            <Input name="text" type="text"
                                   required
                                   value={lat}
                                   onChange={e=>setLat(e.target.value)}
                                   endDecorator={<Button onClick={e=>setLat(location[0])}>lat hiện tại</Button>}
                            />
                        </FormControl>
                        <br/>
                        <FormControl id="long">
                            <FormLabel>long</FormLabel>
                            <Input name="text" type="text"
                                   required

                                   value={long}
                                   onChange={e=>setLong(e.target.value)}
                                   endDecorator={<Button onClick={()=>setLong(location[1])}>long hiện tại</Button>}
                            />
                        </FormControl>
                        <br/>
                        <FormControl id="name3">
                            <FormLabel>FPT</FormLabel>
                            <Input name="text" type="text"
                                   value={FPT}
                                   onChange={e=>setFPT(e.target.value)}
                            />
                        </FormControl>
                        <br/>
                        <FormControl id="name3">
                            <FormLabel>SCTV</FormLabel>
                            <Input name="text" type="text"
                                   value={SCTV}
                                   onChange={e=>setSCTV(e.target.value)}
                            />
                        </FormControl>
                        <br/>
                        <FormControl id="name3">
                            <FormLabel>VTVCab</FormLabel>
                            <Input name="text" type="text"
                                   value={VTVCab}
                                   onChange={e=>setVTVCab(e.target.value)}
                            />
                        </FormControl>
                        <br/>
                        <FormControl id="name3">
                            <FormLabel>VMS</FormLabel>
                            <Input name="text" type="text"
                                   value={VMS}
                                   onChange={e=>setVMS(e.target.value)}
                            />
                        </FormControl>
                        <br/>

                        <Sheet sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Button sx={{ mt: 1 , alignSelf: 'center'}} type='submit'>1 2 3 Dzô</Button>

                        </Sheet>
                    </form>
                </ModalDialog>
            </Modal>
        )
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
                width: '80vw',
                height: '70vh'
            }} width="80vw" height="80vh" markers={listLocation} center={DEFAULT_CENTER} zoom={15}>
                {({TileLayer, Marker, Popup, LayersControl}) => {
                    return (
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
                            <EModal row={null}/>

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
                                                    onClick={() => handleClickEdit(item)}
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
