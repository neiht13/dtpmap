'use client'
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {
    Sheet,
    Typography,
    FormControl,
    FormLabel,
    Input,
    Button,
    Link,
    Alert,
    FormHelperText,
} from '@mui/joy';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const router = useRouter();

    const handleInputChange = (e:any) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleLogin = async (e:any) => {
        e.preventDefault();
        try {
            const result = await signIn('credentials', {
                ...credentials,
                username: credentials.username.split('@')[0],
                redirect: false,
            });

            if (result?.error) {
                toast.error('Sai email hoặc mật khẩu!');
            } else {
                router.push('/');
            }
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
                        <strong>VNPT Đồng Tháp xin chào</strong>
                    </Typography>
                    <Typography level="body-sm">Đăng nhập để tiếp tục.</Typography>
                </div>
                <Alert color="danger" variant="outlined">
                    Sai email hoặc mật khẩu!
                </Alert>

                <form onSubmit={handleLogin}>
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
                        <FormLabel>Password</FormLabel>
                        <Input
                            name="password"
                            type="password"
                            placeholder="password"
                            required
                            value={credentials.password}
                            onChange={handleInputChange}
                        />
                    </FormControl>

                    <Button sx={{ mt: 1, alignSelf: 'center' }} type="submit">
                        1 2 3 Dzô
                    </Button>
                </form>
                <Typography
                    endDecorator={<Link href="/sign-up">Đăng ký</Link>}
                    fontSize="sm"
                    sx={{ alignSelf: 'center' }}
                >
                    Chưa có tài khoản?
                </Typography>
            </Sheet>
        </Sheet>
    );
}

