'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    Sheet,
    Typography,
    FormControl,
    FormLabel,
    Input,
    Button,
    Link,
    FormHelperText,
    Select,
    Option,
} from '@mui/joy';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        department: '',
    });
    const router = useRouter();

    const department = [
        {
        departmentId: 'tpcl',
        departmentName: 'Thành phố Cao Lãnh',
    },{
        departmentId: 'tpsd',
        departmentName: 'Thành phố Sa Đéc',
    },{
        departmentId: 'tphn',
        departmentName: 'Thành phố Hồng Ngự',
    },{
        departmentId: 'hcl',
        departmentName: 'Huyện Cao Lãnh',
    },{
        departmentId: 'tmi',
        departmentName: 'Huyện Tháp Mười ',
    }, {
            departmentId: 'tbh',
            departmentName: 'Huyện Thanh Bình',
        }
    ]
    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleChange = (
        event: React.SyntheticEvent | null,
        newValue: string | null,
    ) => {
        // @ts-ignore
        setCredentials({ ...credentials, department: newValue });
    };

    async function signUp(credentials1: string, param2: {
        password: string;
        confirmPassword: string;
        username: string
    }) {

    }

    const handleSignUp = async (e: any) => {
        e.preventDefault();
        if (credentials.password !== credentials.confirmPassword) {
            toast.error('Mật khẩu không khớp!');
            return;
        }

        try {
            const result = await signUp('credentials', {
                ...credentials,
                username: credentials.username.split('@')[0],
            });

            // if (result) {
            //     toast.error('Đăng ký thất bại!');
            // } else {
            //     router.push('/login');
            // }
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
        }
    };

    return (
        <Sheet
            sx={{
                display: 'flex',
                flexFlow: 'row nowrap',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '70vh',
            }}
        >
            <ToastContainer />

            <Sheet
                sx={{
                    width: 300,
                    mx: 'auto',
                    my: 4,
                    py: 3,
                    px: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    borderRadius: 'sm',
                    boxShadow: 'md',
                }}
                variant="outlined"
            >
                <div>
                    <Typography level="h4" component="h1">
                        <strong>Đăng ký tài khoản</strong>
                    </Typography>
                    <Typography level="body-sm">Tạo tài khoản để bắt đầu.</Typography>
                </div>

                <form onSubmit={handleSignUp}>
                    <FormControl id="email">
                        <FormLabel>Email</FormLabel>
                        <Input
                            name="username"
                            type="email"
                            placeholder="username"
                            value={credentials.username}
                            required
                            onChange={handleInputChange}
                        />
                        <FormHelperText>Với email VNPT, ví dụ: abc@vnpt.vn</FormHelperText>
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Mật khẩu</FormLabel>
                        <Input
                            name="password"
                            type="password"
                            placeholder="password"
                            required
                            value={credentials.password}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl id="confirmPassword">
                        <FormLabel>Xác nhận mật khẩu</FormLabel>
                        <Input
                            name="confirmPassword"
                            type="password"
                            placeholder="confirm password"
                            required
                            value={credentials.confirmPassword}
                            onChange={handleInputChange}
                        />
                        {(credentials.password !== credentials.confirmPassword) &&
                            <FormHelperText sx={{color: "tomato"}}>Mật khẩu không khớp</FormHelperText>}

                    </FormControl>
                    <FormControl id="department">
                        <FormLabel> Đơn vị</FormLabel>

                        <Select defaultValue={credentials.department} placeholder="Chọn đơn vị" name="department" onChange={handleChange}>
                            {
                                department.map(item=>(
                                    <Option value={item.departmentId}>{item.departmentName}</Option>
                                ))
                            }
                        </Select>
                    </FormControl>
                    <br/>
                    <Button sx={{ mt: 1, alignSelf: 'center' }} type="submit">
                        Đăng ký
                    </Button>
                </form>

                <Typography
                    endDecorator={<Link href="/login">Đăng nhập</Link>}
                    fontSize="sm"
                    sx={{ alignSelf: 'center' }}
                >
                    Đã có tài khoản?
                </Typography>
            </Sheet>
        </Sheet>
    );
}
