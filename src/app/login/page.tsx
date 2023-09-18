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
                minHeight: '100vh',
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
                        <strong>Welcome back 👋</strong>
                    </Typography>
                    <Typography level="body-sm">Sign in to continue.</Typography>
                </div>

                <FormControl id="email">
                    <FormLabel>Username</FormLabel>
                    <Input name="text" type="text"
                           value={username}
                           onChange={e=>setUsername(e.target.value)}
                    />
                </FormControl>
                <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input name="password" type="password" placeholder="password"
                           value={password}
                           onChange={e=> setPassword(e.target.value)}
                    />
                </FormControl>
                <Button sx={{ mt: 1 }} onClick={e=>{
                    signIn('credentials', {username, password})
                }}>Login</Button>
                <Typography
                    endDecorator={<Link href="/sign-up">Sign up</Link>}
                    fontSize="sm"
                    sx={{ alignSelf: 'center' }}
                >
                    Don&apos;t have an account?
                </Typography>
            </Sheet>
        </Sheet>
    );
}
