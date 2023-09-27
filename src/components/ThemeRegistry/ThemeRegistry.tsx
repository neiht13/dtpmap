'use client';
import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import theme from './theme';
import Box from "@mui/joy/Box";
import Header from "@/components/Header";
import FirstSidebar from "@/components/FirstSidebar";
import SecondSidebar from "@/components/SecondSidebar";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Link from "@mui/joy/Link";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Typography from "@mui/joy/Typography";
import ColorSchemeToggle from "@/components/ColorSchemeToggle";
import Button from "@mui/joy/Button";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import {signOut, useSession} from "next-auth/react";
import {redirect} from "next/navigation";
import { usePathname } from 'next/navigation'
import {useEffect, useState} from "react";


export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    const { data: session, status } = useSession()
    const pathname = usePathname()
    console.log(pathname)
    debugger;
    if (session === null && pathname !=="/login") {
         redirect('/login')
    }
    const [supportsPwa, setSupportsPwa] = useState(false);

    useEffect(() => {
        if ("serviceWorker" in navigator && window.matchMedia("(display-mode: standalone)").matches) {
            setSupportsPwa(true);
            console.log("supportsPwa",supportsPwa)
        }
    }, []);

    return (
    <NextAppDirEmotionCacheProvider options={{ key: 'joy' }}>
      {/*<CssVarsProvider theme={theme}>*/}
      {/*  <CssBaseline />*/}
      {/*  {children}*/}
      {/*</CssVarsProvider>*/}
        <CssVarsProvider  theme={theme}>
            <CssBaseline />
            <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
                    <>
                    <Header />
                    <FirstSidebar />
                    <SecondSidebar />
                        <Box
                            component="main"
                            className="MainContent"
                            sx={{
                                px: {
                                    xs: 2,
                                    md: 6,
                                },
                                pt: {
                                    xs: 'calc(12px + var(--Header-height))',
                                    sm: 'calc(12px + var(--Header-height))',
                                    md: 3,
                                },
                                pb: {
                                    xs: 2,
                                    sm: 2,
                                    md: 3,
                                },
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                minWidth: 0,
                                height: '100dvh',
                                gap: 1,
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Breadcrumbs
                                    size="sm"
                                    aria-label="breadcrumbs"
                                    separator={<ChevronRightRoundedIcon />}
                                >
                                    <Link
                                        underline="none"
                                        color="neutral"
                                        href="/"
                                        aria-label="Home"
                                    >
                                        <HomeRoundedIcon />
                                    </Link>
                                    <Link
                                        underline="hover"
                                        color="neutral"
                                        href="/"
                                        fontSize={12}
                                        fontWeight={500}
                                    >
                                        Dashboard
                                    </Link>
                                    <Typography color="primary" fontWeight={500} fontSize={12}>
                                        Orders
                                    </Typography>
                                </Breadcrumbs>
                                <ColorSchemeToggle
                                    sx={{ ml: 'auto', display: { xs: 'none', md: 'inline-flex' } }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    my: 1,
                                    gap: 1,
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    alignItems: { xs: 'start', sm: 'center' },
                                    flexWrap: 'wrap',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography level="h2">Orders</Typography>
                                <Button
                                    color="primary"
                                    startDecorator={<DownloadRoundedIcon />}
                                    size="sm"
                                    onClick={()=> alert(location)}
                                >
                                    Download PDF
                                </Button>
                                {supportsPwa ? (
                                    <Button
                                        color="primary"
                                        size="sm"
                                        onClick={() => {
                                            navigator.serviceWorker.register("/sw.js");
                                        }}
                                    >
                                        Install PWA
                                    </Button>
                                ) : null}
                            </Box>
                            {children}
                        </Box>
                </>
            </Box>
        </CssVarsProvider>

    </NextAppDirEmotionCacheProvider>
  );
}
