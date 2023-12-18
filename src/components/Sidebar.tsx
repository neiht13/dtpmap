'use client';
import * as React from 'react';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import LinearProgress from '@mui/joy/LinearProgress';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import SupportRoundedIcon from '@mui/icons-material/SupportRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import ColorSchemeToggle from './ColorSchemeToggle';
import { closeSidebar } from './utils';
import Link from "next/link";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import PlaceIcon from "@mui/icons-material/Place";
import {useState} from "react";
import {signOut, useSession} from "next-auth/react";
import {Tooltip} from "@mui/joy";

function Toggler({
                     defaultExpanded = false,
                     renderToggle,
                     children,
                 }: {
    defaultExpanded?: boolean;
    children: React.ReactNode;
    renderToggle: (params: {
        open: boolean;
        setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    }) => React.ReactNode;
}) {

    const [open, setOpen] = React.useState(defaultExpanded);
    return (
        <React.Fragment>
            {renderToggle({ open, setOpen })}
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateRows: open ? '1fr' : '0fr',
                    transition: '0.2s ease',
                    '& > *': {
                        overflow: 'hidden',
                    },
                }}
            >
                {children}
            </Box>
        </React.Fragment>
    );
}

// @ts-ignore
export default function Sidebar() {
    const [select, setSelect] = useState(0)

    const { data: session, status } = useSession()
    return (
        <Sheet
            className="Sidebar"
            sx={{
                position: {
                    xs: 'fixed',
                    md: 'sticky',
                },
                transform: {
                    xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
                    md: 'none',
                },
                transition: 'transform 0.4s, width 0.4s',
                zIndex: 10000,
                height: '100dvh',
                width: 'var(--Sidebar-width)',
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
            <GlobalStyles
                styles={(theme) => ({
                    ':root': {
                        '--Sidebar-width': '220px',
                        [theme.breakpoints.up('lg')]: {
                            '--Sidebar-width': '240px',
                        },
                    },
                })}
            />
            <Box
                className="Sidebar-overlay"
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
                        xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
                        lg: 'translateX(-100%)',
                    },
                }}
                onClick={() => closeSidebar()}
            />
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <img alt={'logo'} width={24} src='/vnpt_logo.png'/>
                <Typography level="title-lg">DTP Maps</Typography>
                <ColorSchemeToggle sx={{ ml: 'auto' }} />
            </Box>
            <Input size="sm" startDecorator={<SearchRoundedIcon />} placeholder="Search" />
            <Box
                sx={{
                    minHeight: 0,
                    overflow: 'hidden auto',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    [`& .${listItemButtonClasses.root}`]: {
                        gap: 1.5,
                    },
                }}
            >
                <List
                    size="sm"
                    sx={{
                        gap: 1,
                        '--List-nestedInsetStart': '30px',
                        '--ListItem-radius': (theme) => theme.vars.radius.sm,
                    }}
                >
                    <ListItem>
                        <Link href='/account'>
                            <ListItemButton selected={select === 6} onClick={e=>{
                                setSelect(6)
                                closeSidebar()
                            }}>
                                <ListItemDecorator>
                                    <PeopleRoundedIcon />
                                </ListItemDecorator>
                                <ListItemContent>Tài khoản</ListItemContent>
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
                                    <PlaceIcon />
                                </ListItemDecorator>
                                <ListItemContent>Trụ điện lực </ListItemContent>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="/3g" >


                            <ListItemButton selected={select === 10} onClick={e=>{
                                setSelect(10)
                                closeSidebar()
                            }}>
                                <ListItemDecorator>
                                    <WifiTetheringIcon />
                                </ListItemDecorator>
                                <ListItemContent>BTS 3G</ListItemContent>
                            </ListItemButton>
                        </Link>
                    </ListItem>


                    {/*<ListItem nested>*/}
                    {/*    <Toggler*/}
                    {/*        renderToggle={({ open, setOpen }) => (*/}
                    {/*            <ListItemButton onClick={() => setOpen(!open)}>*/}
                    {/*                <GroupRoundedIcon />*/}
                    {/*                <ListItemContent>*/}
                    {/*                    <Typography level="title-sm">Users</Typography>*/}
                    {/*                </ListItemContent>*/}
                    {/*                <KeyboardArrowDownIcon*/}
                    {/*                    sx={{ transform: open ? 'rotate(180deg)' : 'none' }}*/}
                    {/*                />*/}
                    {/*            </ListItemButton>*/}
                    {/*        )}*/}
                    {/*    >*/}
                    {/*        <List sx={{ gap: 0.5 }}>*/}
                    {/*            <ListItem sx={{ mt: 0.5 }}>*/}
                    {/*                <ListItemButton*/}
                    {/*                    role="menuitem"*/}
                    {/*                    component="a"*/}
                    {/*                    href="/joy-ui/getting-started/templates/profile-dashboard/"*/}
                    {/*                >*/}
                    {/*                    My profile*/}
                    {/*                </ListItemButton>*/}
                    {/*            </ListItem>*/}
                    {/*            <ListItem>*/}
                    {/*                <ListItemButton>Create a new user</ListItemButton>*/}
                    {/*            </ListItem>*/}
                    {/*            <ListItem>*/}
                    {/*                <ListItemButton>Roles & permission</ListItemButton>*/}
                    {/*            </ListItem>*/}
                    {/*        </List>*/}
                    {/*    </Toggler>*/}
                    {/*</ListItem>*/}
                </List>


                {/*<Card*/}
                {/*    invertedColors*/}
                {/*    variant="soft"*/}
                {/*    color="warning"*/}
                {/*    size="sm"*/}
                {/*    sx={{ boxShadow: 'none' }}*/}
                {/*>*/}
                {/*    <Stack direction="row" justifyContent="space-between" alignItems="center">*/}
                {/*        <Typography level="title-sm">Used space</Typography>*/}
                {/*        <IconButton size="sm">*/}
                {/*            <CloseRoundedIcon />*/}
                {/*        </IconButton>*/}
                {/*    </Stack>*/}
                {/*    <Typography level="body-xs">*/}
                {/*        Your team has used 80% of your available space. Need more?*/}
                {/*    </Typography>*/}
                {/*    <LinearProgress variant="outlined" value={80} determinate sx={{ my: 1 }} />*/}
                {/*    <Button size="sm" variant="solid">*/}
                {/*        Upgrade plan*/}
                {/*    </Button>*/}
                {/*</Card>*/}
            </Box>
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
                        <Tooltip sx={{zIndex: 10000}} title="Đăng xuất" variant="soft">

                            <LogoutRoundedIcon />
                        </Tooltip>
                    </IconButton>
                </Box>
            }
        </Sheet>
    );
}
