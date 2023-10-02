'use client';
import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
// icons
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';

// @ts-ignore
import FirstSidebar from '@/components/FirstSidebar';
import SecondSidebar from '@/components/SecondSidebar';
import OrderTable from '@/components/OrderTable';
import OrderList from '@/components/OrderList';
import Header from '@/components/Header';
import ColorSchemeToggle from "@/components/ColorSchemeToggle";
import {useEffect, useState} from "react";
import {signIn, signOut, useSession} from "next-auth/react";
import {Add} from "@mui/icons-material";

export default function JoyOrderDashboardTemplate() {


    const Sign = ()=>{

        const { data: session, status } = useSession()

        console.log("session", session)
        if (session) {
            return (
                <>
                    Signed in as {session?.user?.email} <br />
                    <Button onClick={() => signOut()}>Sign out</Button>
                </>
            )
        }
        return (
            <>
                Not signed in <br />
                <Button onClick={() => signIn()}>Sign in</Button>
            </>
        )
    }


    return (
       <>
           <Header location="Trang chủ" children={undefined}  />
                    <OrderTable/>
                    <OrderList />
        </>
    );
}
