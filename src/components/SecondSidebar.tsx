'use client';

import * as React from 'react';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
// icons
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import StarsIcon from '@mui/icons-material/Stars';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

import { closeSidebar } from '@/components/utils';
import {useState} from "react";
import Link from 'next/link'
import Divider from "@mui/joy/Divider";
import Avatar from "@mui/joy/Avatar";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import {signOut, useSession} from "next-auth/react";
import Button from "@mui/joy/Button";

export default function SecondSidebar() {
    const [select, setSelect] = useState(0)

    const { data: session, status } = useSession()

    return (
    <React.Fragment>
      <Box
        className="SecondSidebar-overlay"
        sx={{
          position: 'fixed',
          zIndex: 9998,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          opacity: 'var(--SideNavigation-slideIn)',
          backgroundColor: 'var(--joy-palette-background-backdrop)',
          transition: 'opacity 0.4s',
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--FirstSidebar-width, 0px)))',
            lg: 'translateX(-100%)',
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Sheet
        className="SecondSidebar"
        color="neutral"
        sx={{
          position: {
            xs: 'fixed',
            lg: 'sticky',
          },
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--FirstSidebar-width, 0px)))',
            lg: 'none',
          },
          transition: 'transform 0.4s',
          zIndex: 9999,
          height: '100dvh',
          top: 0,
          p: 2,
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRight: '1px solid',
          borderColor: 'divider',
        }}
      >
        <List
          size="sm"
          sx={{
            '--ListItem-radius': '6px',
            '--List-gap': '6px',
          }}
        >
          <ListSubheader role="presentation" sx={{ fontWeight: 'lg' }}>
            Dashboard
          </ListSubheader>
          <ListItem>
              <Link href={""}>
                  <ListItemButton selected={select === 1} onClick={e=>{
                      setSelect(1)
                      closeSidebar()
                  }}>
                      <ListItemDecorator>
                          <BubbleChartIcon />
                      </ListItemDecorator>
                      <ListItemContent>Overview</ListItemContent>
                  </ListItemButton>
              </Link>

          </ListItem>
          <ListItem>

              <ListItemButton selected={select === 2} onClick={e=>{
                  setSelect(3)
                  closeSidebar()
              }}>
                  <ListItemDecorator>
                <InsertChartIcon />
              </ListItemDecorator>
              <ListItemContent>Analytics</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton selected>
              <ListItemDecorator>
                <ShoppingCartIcon />
              </ListItemDecorator>
              <ListItemContent>Orders</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={() => closeSidebar()}>
              <ListItemDecorator>
                <StarsIcon />
              </ListItemDecorator>
              <ListItemContent>Saved reports</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={() => closeSidebar()}>
              <ListItemDecorator>
                <AccountBoxIcon />
              </ListItemDecorator>
              <ListItemContent>User reports</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListSubheader role="presentation" sx={{ fontWeight: 700, mt: 2 }}>
            Workspace
          </ListSubheader>
          <ListItem>
              <Link href='/account'>
                  <ListItemButton selected={select === 6} onClick={e=>{
                      setSelect(6)
                      closeSidebar()
                  }}>
                  <ListItemDecorator>
                <PeopleRoundedIcon />
              </ListItemDecorator>
              <ListItemContent>Account</ListItemContent>
            </ListItemButton>
              </Link>
          </ListItem>
          <ListItem>
              <Link href='/home'>
                  <ListItemButton selected={select === 7} onClick={e=>{
                      setSelect(7)
                      closeSidebar()
                  }}>
              <ListItemDecorator>
                <BadgeRoundedIcon />
              </ListItemDecorator>
              <ListItemContent>Danh sách</ListItemContent>
            </ListItemButton>
              </Link>
          </ListItem>
          <ListItem>
              <Link href='/sign-up'>

                  <ListItemButton selected={select === 8} onClick={e=>{
                      setSelect(8)
                      closeSidebar()
                  }}>
                      <ListItemDecorator>
                <CreditCardRoundedIcon />
              </ListItemDecorator>
              <ListItemContent>Đăng ký</ListItemContent>
            </ListItemButton>
              </Link>
          </ListItem>
          <ListItem>
              <Link href="/map" >


                  <ListItemButton selected={select === 9} onClick={e=>{
                      setSelect(9)
                      closeSidebar()
                  }}>
                      <ListItemDecorator>
                <AnalyticsRoundedIcon />
              </ListItemDecorator>
              <ListItemContent>Bản đồ</ListItemContent>
            </ListItemButton>
              </Link>
          </ListItem>

        </List>
          <Divider />
          {session &&
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                  <Avatar
                      variant="outlined"
                      size="sm"
                      src={session?.user?.image || ""}
                  />
                  <Box sx={{ minWidth: 0, flex: 1 }}>
                      <Typography level="title-sm">{session?.user?.name}</Typography>
                      <Typography level="body-xs">{session?.user?.email}</Typography>
                  </Box>
                  <IconButton size="sm" variant="plain" color="neutral" onClick={e=> signOut({
                      callbackUrl: "/login"
                  })}>
                      <LogoutRoundedIcon />
                  </IconButton>
              </Box>
          }
      </Sheet>

    </React.Fragment>
  );
}
