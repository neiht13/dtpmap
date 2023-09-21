'use client';


import * as React from 'react';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Avatar from '@mui/joy/Avatar';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Sheet from '@mui/joy/Sheet';
// icons
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import MapRoundedIcon from '@mui/icons-material/MapRounded';
import DynamicFeedRoundedIcon from '@mui/icons-material/DynamicFeedRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import SupportRoundedIcon from '@mui/icons-material/SupportRounded';

import MuiLogo from '@/components/MuiLogo';
import {closeSidebar, openSidebar} from '@/components/utils';
import {Button} from "@mui/joy";
import {signIn} from "next-auth/react";
import {useState} from "react";
import Link from "next/link";


export default function FirstSidebar() {
    const [select, setSelect] = useState(0)
  return (
    <Sheet
      className="FirstSidebar"
      sx={{
        position: {
          xs: 'fixed',
          md: 'sticky',
        },
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
          md: 'none',
        },
        transition: 'transform 0.4s',
        zIndex: 10000,
        height: '100dvh',
        width: 'var(--FirstSidebar-width)',
        top: 0,
        p: 2,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
        borderRight: '1px solid',
        borderColor: 'divider',
      }}
    >
      <GlobalStyles
        styles={{
          ':root': {
            '--FirstSidebar-width': '68px',
          },
        }}
      />
      <MuiLogo />
      <List size="sm" sx={{ '--ListItem-radius': '6px', '--List-gap': '8px' }}>
        <ListItem>
            <Link href='/'>
                <ListItemButton selected={select === 1} onClick={e=>{
                    setSelect(1)
                    closeSidebar()
                }}>
                <HomeRoundedIcon />
          </ListItemButton>
            </Link>
        </ListItem>
        <ListItem>
            <ListItemButton selected={select === 2} onClick={e=>{
                setSelect(2)
                openSidebar()
            }}>
            <MapRoundedIcon />
          </ListItemButton>
        </ListItem>
        <ListItem>
            <ListItemButton selected={select === 3} onClick={e=>{
                setSelect(3)
                openSidebar()
            }}>
            <DynamicFeedRoundedIcon />
          </ListItemButton>
        </ListItem>
      </List>
      <List
        sx={{
          mt: 'auto',
          flexGrow: 0,
          '--ListItem-radius': '8px',
          '--List-gap': '4px',
        }}
      >
        <ListItem>
          <ListItemButton>
            <SupportRoundedIcon />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <SettingsRoundedIcon />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton  onClick={() => signIn()}>
              <Avatar variant="outlined" size="sm" src="/static/images/avatar/3.jpg" />
          </ListItemButton>
        </ListItem>
      </List>
    </Sheet>
  );
}
