'use client'

import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import {signIn} from "next-auth/react";
import {useState} from "react";
import {FormHelperText} from "@mui/joy";

export default function Home() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
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
                        <strong>VNPT Đồng Tháp xin chào  </strong>
                    </Typography>
                    <Typography level="body-sm">Đăng nhập để tiếp tục.</Typography>
                </div>

                <form onSubmit={e=>{
                    e.preventDefault();
                    signIn('credentials', {username: username.split("@")[0], password})
                    }
                }>
                <FormControl id="email">
                    <FormLabel>Email</FormLabel>
                    <Input name="text" type="email"  placeholder="username"
                           value={username}
                           required
                           onChange={e=>setUsername(e.target.value)}
                    />
                    <FormHelperText>Với email VNPT, ví dụ: abc@vnpt.vn</FormHelperText>
                </FormControl>
                    <br/>
                <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input name="password" type="password" placeholder="password"
                           required
                           value={password}
                           onChange={e=> setPassword(e.target.value)}
                    />
                </FormControl>
                <Button sx={{ mt: 1 , alignSelf: 'center'}} type='submit'>1 2 3 Dzô</Button>
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
