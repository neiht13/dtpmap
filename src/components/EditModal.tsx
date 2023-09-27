import * as React from "react";
import {useEffect, useState} from "react";
import Dropdown from "@mui/joy/Dropdown";
import MenuButton from "@mui/joy/MenuButton";
import IconButton from "@mui/joy/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import Divider from "@mui/joy/Divider";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Sheet from "@mui/joy/Sheet";

// @ts-ignore
const EditModal = (props) => {
    const {row, open, setOpen, location} = props
    const [name1, setName1] = useState(row.name1)
    const [name2, setName2] = useState(row.name2)
    const [name3, setName3] = useState(row.name3)
    const [stt, setStt] = useState(row.stt)
    const [lat, setLat] = useState(row.lat)
    const [long, setLong] = useState(row.long)
    const [FPT, setFPT] = useState(row.FPT)
    const [SCTV, setSCTV] = useState(row.SCTV)
    const [VTVCab, setVTVCab] = useState(row.VTVCab)
    const [VMS, setVMS] = useState(row.VMS)


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
            setOpen(false)
            const result = await r.json();
        })
    }
    return (
            <Modal open={open} onClose={() => setOpen(false)}>
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
    );
}

export default EditModal