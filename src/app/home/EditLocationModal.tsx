import {
    Modal,
    ModalDialog,
    ModalClose,
    Typography,
    FormControl,
    FormLabel,
    Input,
    Button,
    Sheet, Card, CardCover,
} from "@mui/joy";
import * as React from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import {Clear} from "@mui/icons-material";
import Image from "next/image";
import dayjs from 'dayjs';
import {useSession} from "next-auth/react";

// @ts-ignore
const EditLocationModal = ({ locationData, onClose, onSave, open, location }) => {
    const { data: session, status } = useSession()
    const currentUser = session?.user?.email?.split("@")[0]
    const [locationEdit, setLocationEdit] = useState(locationData ||
        {
            "stt": "",
            "name3": "",
            "name1": "",
            "name2": "",
            "lat": "",
            "long": "",
            "FPT": "",
            "SCTV": "",
            "VTVCab": "",
            "VMS": "",
            "userCreated": currentUser,
            "dateCreated": dayjs().format('DD/MM/YYYY'),
            "userEdited": currentUser,
            "dateEdited": dayjs().format('DD/MM/YYYY'),
        });

    const onClose2 = () => {
        onClose();
        setImage("");
        setImageUrl("");
    };

    const departmentOptions = [
        {
            departmentId: "tpcl",
            departmentName: "Thành phố Cao Lãnh",
        },
        {
            departmentId: "tpsd",
            departmentName: "Thành phố Sa Đéc",
        },
        {
            departmentId: "tphn",
            departmentName: "Thành phố Hồng Ngự",
        },
        {
            departmentId: "hcl",
            departmentName: "Huyện Cao Lãnh",
        },
        {
            departmentId: "tmi",
            departmentName: "Huyện Tháp Mười",
        },
        {
            departmentId: "tbh",
            departmentName: "Huyện Thanh Bình",
        },
    ];

    const [image, setImage] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLocationEdit({ ...locationEdit, [name]: value });
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
                    ...locationEdit,
                    userEdited: currentUser,
                    dateEdited: dayjs().format('DD/MM/YYYY'),
                }),
            });
            const result = await response.json();
            // Handle the result as needed
        } catch (error) {
            console.error("Error saving data:", error);
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSave()
    };

    const uploadImage = async (e: any) => {
        if (e.target.files && e.target.files[0]) {
            let data = new FormData()
            console.log(e.target)
            data.append('source', 'ml')
            data.append('folder', 'dtp')
            data.append('api_key', '922982469845971')
            data.append('upload_preset', 'j7xlhzak')
            data.append('file', e.target.files[0])

            await fetch('https://api.cloudinary.com/v1_1/dt2vxc5jx/image/upload', {
                method: 'POST',
                body: data
            })
                .then(async r => {
                    const res = await r.json()
                    if (e.target.name === 'image') {
                        setImageUrl(res.secure_url)
                        setImage(e.target.files[0])
                        setLocationEdit({...locationEdit, image: res.secure_url});
                        console.log(imageUrl)
                    }
                })
        }
    }

    const deleteImage = async (e: any) => {
        let data = new FormData()
        data.append('public_id', 'i6tqxbeflpqszrmxqpat')
        data.append('api_key', '922982469845971')
        const cloudName = 'djmx3jbc1';
        const publicId = 'dtp/cg0nn4ux9szymgnpboyu';
        const apiKey = '714589799783159';
        const apiSecret = 'DHAluj5pyxTQnUxiaGqmSq2gNWc';

        const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload/${publicId}`;

            await fetch('/api/image/delete').then(async r => {
                const res = await r.json()
                console.log(res)
            })

    }

    return (
        <Modal open={open} onClose={onClose2}  sx={{marginTop: '50px'}}>
            <ModalDialog aria-labelledby="filter-modal" layout="center">
                <ModalClose />
                <Typography id="filter-modal" level="h2">
                    Chỉnh sửa
                </Typography>
                <form
                    style={{ overflow: "scroll" }}
                    onSubmit={
                        handleSubmit}
                >
                    <FormControl id="stt">
                        <FormLabel>STT</FormLabel>
                        <Input
                            name="stt"
                            type="text"
                            required
                            value={locationEdit.stt}
                            onChange={handleInputChange}
                        />
                    </FormControl>

                    <FormControl id="name1">
                        <FormLabel>Tên cấp 1</FormLabel>
                        <Input
                            name="name1"
                            type="text"
                            required
                            value={locationEdit.name1}
                            onChange={handleInputChange}
                        />
                    </FormControl>

                    <FormControl id="name2">
                        <FormLabel>Tên cấp 2</FormLabel>
                        <Input
                            name="name2"
                            type="text"
                            value={locationEdit.name2}
                            onChange={handleInputChange}
                        />
                    </FormControl>

                    <FormControl id="name3">
                        <FormLabel>Tên cấp 3</FormLabel>
                        <Input
                            name="name3"
                            type="text"
                            value={locationEdit.name3}
                            onChange={handleInputChange}
                        />
                    </FormControl>

                    <FormControl id="lat">
                        <FormLabel>lat</FormLabel>
                        <Input
                            name="lat"
                            type="text"
                            required
                            value={locationEdit.lat}
                            onChange={handleInputChange}
                            endDecorator={
                                <Button onClick={() => setLocationEdit({ ...locationEdit, lat: location[0] })}>
                                    lat hiện tại
                                </Button>
                            }
                        />
                    </FormControl>

                    <FormControl id="long">
                        <FormLabel>long</FormLabel>
                        <Input
                            name="long"
                            type="text"
                            required
                            value={locationEdit.long}
                            onChange={handleInputChange}
                            endDecorator={
                                <Button onClick={() => setLocationEdit({ ...locationEdit, long: location[1] })}>
                                    long hiện tại
                                </Button>
                            }
                        />
                    </FormControl>

                    <FormControl id="FPT">
                        <FormLabel>FPT</FormLabel>
                        <Input
                            name="FPT"
                            type="text"
                            value={locationEdit.FPT}
                            onChange={handleInputChange}
                        />
                    </FormControl>

                    <FormControl id="SCTV">
                        <FormLabel>SCTV</FormLabel>
                        <Input
                            name="SCTV"
                            type="text"
                            value={locationEdit.SCTV}
                            onChange={handleInputChange}
                        />
                    </FormControl>

                    <FormControl id="VTVCab">
                        <FormLabel>VTVCab</FormLabel>
                        <Input
                            name="VTVCab"
                            type="text"
                            value={locationEdit.VTVCab}
                            onChange={handleInputChange}
                        />
                    </FormControl>

                    <FormControl id="VMS">
                        <FormLabel>VMS</FormLabel>
                        <Input
                            name="VMS"
                            type="text"
                            value={locationEdit.VMS}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl id="image">
                        <FormLabel>Ảnh</FormLabel>
                        <Input
                            name="image"
                            type="file"
                            placeholder="file"
                            value={image}
                            disabled={image !== ''}
                            onChange={e=> uploadImage(e)}
                        />
                        {locationEdit.image && <Card component="li" sx={{ minWidth: 300,  minHeight: 300, marginTop: '5px', flexGrow: 1 }}>
                            <Button
                                aria-label="bookmark Bahamas Islands"
                                variant="plain"
                                color="neutral"
                                size="sm"
                                sx={{ zIndex: 2, position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                                onClick={deleteImage}
                            >
                                <Clear />
                            </Button>
                            <CardCover>
                                <Image
                                    alt="image"
                                    src={locationEdit.image}
                                    fill
                                    className="rounded"
                                    loading="lazy"
                                    objectFit="contain"
                                />
                            </CardCover>
                        </Card>
                        }
                    </FormControl>


                    <Sheet sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Button sx={{ mt: 1 , alignSelf: 'center'}} type='submit'>Lưu</Button>
                    </Sheet>
                </form>
            </ModalDialog>
        </Modal>
    );
};

export default EditLocationModal;
