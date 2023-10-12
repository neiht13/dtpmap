'use client'
import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel, { formLabelClasses } from '@mui/joy/FormLabel';
import IconButton, { IconButtonProps } from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import ColorSchemeToggle from "@/components/ColorSchemeToggle";
import {FormHelperText} from "@mui/joy";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {signIn} from "next-auth/react";
import {toastRender} from "@/components/Header";

interface FormElements extends HTMLFormControlsCollection {
    email: HTMLInputElement;
    password: HTMLInputElement;
    persistent: HTMLInputElement;
}
interface SignInFormElement extends HTMLFormElement {
    readonly elements: FormElements;
}


export default function JoySignInSideTemplate() {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const router = useRouter();
    const [loading, setLoading] = useState(false)
    const handleInputChange = (e:any) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleLogin = async (e:any) => {
        e.preventDefault();
        setLoading(true)
        try {
            const result = await signIn('credentials', {
                ...credentials,
                username: credentials.username.split('@')[0],
                redirect: false,
            });
            if (result) setLoading(false)

            if (result?.error) {
                debugger;
                console.log(result?.error);
                toastRender('error')
            } else {
                toastRender('success')

                router.push('/');
            }
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
        }
    };
    return (
        <div>
            <GlobalStyles
                styles={{
                    ':root': {
                        '--Collapsed-breakpoint': '769px', // form will stretch when viewport is below `769px`
                        '--Cover-width': '50vw', // must be `vw` only
                        '--Form-maxWidth': '800px',
                        '--Transition-duration': '0.4s', // set to `none` to disable transition
                    },
                }}
            />
            <Box
                sx={(theme) => ({
                    width:
                        'clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)',
                    transition: 'width var(--Transition-duration)',
                    transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    backdropFilter: 'blur(12px)',
                    backgroundColor: 'rgba(255 255 255 / 0.2)',
                    [theme.getColorSchemeSelector('dark')]: {
                        backgroundColor: 'rgba(19 19 24 / 0.4)',
                    },
                })}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '100dvh',
                        width:
                            'clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)',
                        maxWidth: '100%',
                        px: 2,
                    }}
                >
                    <Box
                        component="header"
                        sx={{
                            py: 3,
                            display: 'flex',
                            alignItems: 'left',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box
                            sx={{
                                gap: 2,
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <img alt={'logo'} width={24} src='/vnpt_logo.png'/>

                            <Typography level="title-lg">VNPT</Typography>
                        </Box>
                        <ColorSchemeToggle />
                    </Box>
                    <Box
                        component="main"
                        sx={{
                            my: 'auto',
                            py: 2,
                            pb: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            width: 400,
                            maxWidth: '100%',
                            mx: 'auto',
                            borderRadius: 'sm',
                            '& form': {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                            },
                            [`& .${formLabelClasses.asterisk}`]: {
                                visibility: 'hidden',
                            },
                        }}
                    >
                        <Stack gap={4} sx={{ mb: 2 }}>
                            <Stack gap={1}>
                                <Typography level="h4" component="h1">
                                    <strong>VNPT Đồng Tháp xin chào</strong>
                                </Typography>
                                <Typography level="body-sm">Đăng nhập để tiếp tục.</Typography>
                            </Stack>


                        </Stack>
                        <Divider
                            sx={(theme) => ({
                                [theme.getColorSchemeSelector('light')]: {
                                    color: { xs: '#FFF', md: 'text.tertiary' },
                                    '--Divider-lineColor': {
                                        xs: '#FFF',
                                        md: 'var(--joy-palette-divider)',
                                    },
                                },
                            })}
                        >
                            </Divider>
                        <Stack gap={4} sx={{ mt: 2 }}>
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

                                <Button fullWidth loading={loading} sx={{ mt: 1, alignSelf: 'center' }} type="submit">
                                    Đăng nhập
                                </Button>
                                <Typography
                                    endDecorator={<Link href="/sign-up">Đăng ký</Link>}
                                    fontSize="sm"
                                    sx={{ alignSelf: 'right' }}
                                >
                                    Chưa có tài khoản?
                                </Typography>
                            </form>
                        </Stack>
                    </Box>
                    <Box component="footer" sx={{ py: 3 }}>
                        <Typography level="body-xs" textAlign="center">
                            © VNPT Đồng Tháp {new Date().getFullYear()}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={(theme) => ({
                    height: '100%',
                    position: 'fixed',
                    right: 0,
                    top: 0,
                    bottom: 0,
                    left: 'clamp(0px, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))',
                    transition:
                        'background-image var(--Transition-duration), left var(--Transition-duration) !important',
                    transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
                    backgroundColor: 'background.level1',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage:
                        'url("/vnpt-background.jpg")',
                    [theme.getColorSchemeSelector('dark')]: {
                        backgroundImage:
                            'url("/vnpt-background.jpg")',
                    },
                })}
            />
        </div>
    );
}