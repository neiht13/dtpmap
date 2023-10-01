import React, {ChangeEvent, FormEvent, useState} from 'react';
import {
    Modal,
    ModalDialog,
    ModalClose,
    Typography,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Select,
    Sheet,
    Switch,
    Button, Option,
} from '@mui/joy';
import {Done} from '@mui/icons-material';
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Checkbox from "@mui/joy/Checkbox";
import Image from "next/image";

// @ts-ignore
export default function UserEditModal({open, onClose, userData, onSave}) {
    const [userEdit, setUserEdit] = useState(userData || {
        username: '',
        name: '',
        email: '',
        password: '',
        role: [],
        department: '',
        status: false
    });
    const department = [
        {
            departmentId: 'tpcl',
            departmentName: 'Thành phố Cao Lãnh',
        }, {
            departmentId: 'tpsd',
            departmentName: 'Thành phố Sa Đéc',
        }, {
            departmentId: 'tphn',
            departmentName: 'Thành phố Hồng Ngự',
        }, {
            departmentId: 'hcl',
            departmentName: 'Huyện Cao Lãnh',
        }, {
            departmentId: 'tmi',
            departmentName: 'Huyện Tháp Mười ',
        }, {
            departmentId: 'tbh',
            departmentName: 'Huyện Thanh Bình',
        }
    ]
    const [image, setImage] = useState()
    const [imageUrl, setImageUrl] = useState('')
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUserEdit({...userEdit, [name]: value});
    };

    // @ts-ignore
    const handleChange = (event, newValue) => {
        setUserEdit({...userEdit, department: newValue});
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSave(userEdit);
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
            await fetch('https://api.cloudinary.com/v1_1/dt2vxc5jx/upload', {
                method: 'POST',
                body: data
            }).then(async r => {
                const res = await r.json()
                if (e.target.name === 'image') {
                    setImageUrl(res.url)
                    setImage(e.target.files[0])
                    console.log(imageUrl)
                }
            })
        }
    }

    return (
        <Modal open={open} onClose={onClose}>
            <ModalDialog aria-labelledby="user-edit-modal" layout="center">
                <ModalClose/>
                <Typography id="user-edit-modal" level="h2">
                    Chỉnh sửa
                </Typography>
                <form style={{overflow: "scroll"}} onSubmit={handleSubmit}>
                    <FormControl id="username">
                        <FormLabel>Username</FormLabel>
                        <Input
                            name="username"
                            type="text"
                            placeholder="username"
                            value={userEdit.username}
                            required
                            disabled
                        />
                    </FormControl>
                    <FormControl id="email">
                        <FormLabel>Email</FormLabel>
                        <Input
                            name="email"
                            type="email"
                            placeholder="email"
                            value={userEdit.email}
                            required
                            onChange={e=>
                                setUserEdit({
                                    ...userEdit,
                                    email: e.target?.value,
                                    username: e.target?.value.split('@')[0]
                                })

                            }
                        />
                        <FormHelperText>Với email VNPT, ví dụ: abc@vnpt.vn</FormHelperText>
                    </FormControl>
                    <FormControl id="name">
                        <FormLabel> Tên </FormLabel>
                        <Input
                            name="name"
                            type="text"
                            placeholder="name"
                            value={userEdit.name}
                            required
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel> Chức năng </FormLabel>

                        <Sheet variant="outlined" sx={{width: 360, p: 2, borderRadius: 'sm'}}>
                            <div role="group" aria-labelledby="rank">
                                <List
                                    orientation="horizontal"
                                    wrap
                                    sx={{
                                        '--List-gap': '8px',
                                        '--ListItem-radius': '20px',
                                        '--ListItem-minHeight': '32px',
                                    }}
                                >
                                    {['Admin', 'Trụ điện lực', 'Trụ BTS', 'Trụ VNPT'].map(
                                        (item, index) => (
                                            <ListItem key={item}>
                                                {userEdit.role.includes(item) && (
                                                    <Done
                                                        color="primary"
                                                        sx={{ml: -0.5, mr: 0.5, zIndex: 2, pointerEvents: 'none'}}
                                                    />
                                                )}
                                                <Checkbox

                                                    size="sm"
                                                    disableIcon
                                                    overlay
                                                    label={item}
                                                    checked={userEdit.role.includes(item)}
                                                    variant={userEdit.role.includes(item) ? 'soft' : 'outlined'}
                                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                        if (event.target.checked) {
                                                            setUserEdit({...userEdit, role: [...userEdit.role, item]});
                                                        } else {
                                                            setUserEdit({...userEdit, role: userEdit.role.filter((text: string) => text !== item)});
                                                        }
                                                    }}
                                                    slotProps={{
                                                        action: ({checked}) => ({
                                                            sx: checked
                                                                ? {
                                                                    border: '1px solid',
                                                                    borderColor: 'primary.500',
                                                                }
                                                                : {},
                                                        }),
                                                    }}
                                                />
                                            </ListItem>
                                        ),
                                    )}
                                </List>
                            </div>
                        </Sheet>
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Mật khẩu</FormLabel>
                        <Input
                            name="password"
                            type="password"
                            placeholder="password"
                            required
                            value={userEdit.password}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl id="image">
                        <FormLabel>Ảnh</FormLabel>
                        <Input
                            name="image"
                            type="file"
                            placeholder="file"
                            required
                            value={image}
                            onChange={e=> uploadImage(e)}
                        />
                            <div className="mt-10 col-span-3" style={{position: 'relative', height: 200}}>
                                <Image
                                    alt="image"
                                    src={'https://res.cloudinary.com/dt2vxc5jx/image/upload/v1696143224/dtp/v6lmjm70cppsdtggpw3c.jpg'}
                                    layout="fill"
                                    className="rounded"
                                    objectFit="contain"
                                />
                            </div>
                    </FormControl>
                    <FormControl id="status">
                        <FormLabel>Trạng thái&nbsp;&nbsp;&nbsp;<Switch
                            checked={userEdit.status}
                            onChange={(event) => setUserEdit({...userEdit, status: event.target.checked})}
                        /></FormLabel>

                    </FormControl>
                    <FormControl id="department">
                        <FormLabel> Đơn vị</FormLabel>

                        <Select defaultValue={userEdit.department} placeholder="Chọn đơn vị" name="department"
                                onChange={handleChange}>
                            {
                                department.map(item => (
                                    <Option value={item.departmentId}>{item.departmentName}</Option>
                                ))
                            }
                        </Select>
                    </FormControl>
                    <br/>
                    <Button sx={{mt: 1, alignSelf: 'center'}} type="submit">
                        Lưu
                    </Button>
                </form>
            </ModalDialog>
        </Modal>
    );
}
