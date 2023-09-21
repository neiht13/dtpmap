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
import Table from "@mui/joy/Table";
import Checkbox from "@mui/joy/Checkbox";
import Dropdown from "@mui/joy/Dropdown";
import MenuButton from "@mui/joy/MenuButton";
import IconButton from "@mui/joy/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import Divider from "@mui/joy/Divider";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Avatar from "@mui/joy/Avatar";
import Chip from "@mui/joy/Chip";
import ListDivider from "@mui/joy/ListDivider";
import Sheet from "@mui/joy/Sheet";

export default function JoyOrderDashboardTemplate() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers()
    }, []);
    const fetchUsers = async () => {
        fetch('/api/user/get').then( async r => {
            const result = await r.json();
            setUsers(result.result)
        })
    }
    const activeAccount = async (row: any) => {
        const {username, status } = row;
        fetch('/api/user/edit',
            {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: "follow", // manual, *follow, error
                referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify({username, status: !status}) // body data type must match "Content-Type" header
            }
            ).then( async r => {
            const result = await r.json();
            fetchUsers()
            // setUsers(result.result)
        })
    }
    
    // @ts-ignore
    function RowMenu({row}) {
        const [open2, setOpen2] = React.useState(false);

        return (
            <Dropdown>
                <MenuButton
                    slots={{ root: IconButton }}
                    slotProps={{ root: { variant: 'plain', color: 'neutral', size: 'sm' } }}
                >
                    <SettingsIcon />
                </MenuButton>
                <Menu size="sm" sx={{ minWidth: 140 }}>
                    <MenuItem
                        onClick={() => setOpen2(true)}
                    >Edit</MenuItem>
                    <MenuItem>Rename</MenuItem>
                    <MenuItem
                        onClick={() => activeAccount(row)}
                    >{row.status ? "Inactive" :"Active"} </MenuItem>
                    <Divider />
                    <MenuItem color="danger">Delete</MenuItem>
                </Menu>
                <Modal open={open2} onClose={() => setOpen2(false)}>
                    <ModalDialog aria-labelledby="filter-modal" layout="center">
                        <ModalClose />
                        <Typography id="filter-modal" level="h2">
                            Filters
                        </Typography>
                        <List
                            key={row?.id}
                            size="sm"
                            sx={{
                                '--ListItem-paddingX': 0,
                            }}
                        >
                            <ListItem
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'start',
                                }}
                            >
                                <ListItemContent sx={{ display: 'flex', gap: 2, alignItems: 'start' }}>
                                    <ListItemDecorator>
                                        <Avatar size="sm">{row?.customer?.initial}</Avatar>
                                    </ListItemDecorator>
                                    <div>
                                        <Typography fontWeight={600} gutterBottom>
                                            {row?.customer?.name}
                                        </Typography>
                                        <Typography level="body-xs" gutterBottom>
                                            {row?.customer?.email}
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                gap: 0.5,
                                                mb: 1,
                                            }}
                                        >
                                            <Typography level="body-xs">{row?.date}</Typography>
                                            <Typography level="body-xs">&bull;</Typography>
                                            <Typography level="body-xs">{row?.id}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                            <Link level="body-sm" component="button">
                                                Download
                                            </Link>
                                            <RowMenu row={row}/>
                                        </Box>
                                    </div>
                                </ListItemContent>
                                <Chip
                                    variant="soft"
                                    size="sm"

                                >
                                    {row?.status}
                                </Chip>
                            </ListItem>
                            <ListDivider />
                        </List>
                        <Divider sx={{ my: 2 }} />
                        <Sheet sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Button color="primary" onClick={() => setOpen2(false)}>
                                Submit
                            </Button>
                        </Sheet>
                    </ModalDialog>
                </Modal>
            </Dropdown>
        );
    }


    const [order, setOrder] = useState('desc');
    const [selected, setSelected] = useState([]);
    const [open, setOpen] = useState(false);

    const { data: session, status } = useSession()

    console.log("session", session)
    if (session && session?.user?.role !== 'admin') {
        return (
            <>
                You are not permission!
            </>
        )
    }

    return (
       <Sheet sx={{overflow: 'auto'}}>

           <Table
               aria-labelledby="tableTitle"
               stickyHeader
               hoverRow
               sx={{
                   '--TableCell-headBackground': 'var(--joy-palette-background-level1)',
                   '--Table-headerUnderlineThickness': '1px',
                   '--TableRow-hoverBackground': 'var(--joy-palette-background-level1)',
                   '--TableCell-paddingY': '4px',
                   '--TableCell-paddingX': '8px',
               }}
           >
               <thead>
               <tr>
                   <th style={{ width: 48, textAlign: 'center', padding: '12px 6px' }}>
                       <Checkbox
                           size="sm"
                           indeterminate={
                               selected?.length > 0 && selected?.length !== users?.length
                           }
                           checked={selected?.length === users?.length}
                           // onChange={(event) => {
                           //     setSelected(
                           //         event.target.checked ? users.map((row) => row.stt) : [],
                           //     );
                           // }}
                           color={
                               selected?.length > 0 || selected?.length === users?.length
                                   ? 'primary'
                                   : undefined
                           }
                           sx={{ verticalAlign: 'text-bottom' }}
                       />
                   </th>
                   {/*<th style={{ width: 120, padding: '12px 6px' }}>*/}
                   {/*  <Link*/}
                   {/*    underline="none"*/}
                   {/*    color="primary"*/}
                   {/*    component="button"*/}
                   {/*    onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}*/}
                   {/*    fontWeight="lg"*/}
                   {/*    endDecorator={<ArrowDropDownIcon />}*/}
                   {/*    sx={{*/}
                   {/*      '& svg': {*/}
                   {/*        transition: '0.2s',*/}
                   {/*        transform:*/}
                   {/*          order === 'desc' ? 'rotate(0deg)' : 'rotate(180deg)',*/}
                   {/*      },*/}
                   {/*    }}*/}
                   {/*  >*/}
                   {/*    Invoice*/}
                   {/*  </Link>*/}
                   {/*</th>*/}
                   <th style={{ width: 140, padding: '12px 6px' }}>Name</th>
                   <th style={{ width: 140, padding: '12px 6px' }}>Username</th>
                   <th style={{ width: 140, padding: '12px 6px' }}>Email</th>
                   <th style={{ width: 140, padding: '12px 6px' }}>Department</th>
                   <th style={{ width: 140, padding: '12px 6px' }}> </th>
               </tr>
               </thead>
               <tbody>
               {users.map((row: any) => (
                   <tr key={row?.id}>
                       <td style={{ textAlign: 'center', width: 120 }}>
                           <Checkbox
                               size="sm"
                               // checked={selected.includes(row?.stt)}
                               // color={selected.includes(row?.stt) ? 'primary' : undefined}
                               // onChange={(event) => {
                               //     setSelected((ids) =>
                               //         event.target.checked
                               //             ? ids.concat(row.stt)
                               //             : ids.filter((itemId) => itemId !== row.stt),
                               //     );
                               // }}
                               slotProps={{ checkbox: { sx: { textAlign: 'left' } } }}
                               sx={{ verticalAlign: 'text-bottom' }}
                           />
                       </td>
                       <td>
                           <Typography level="body-xs">{row?.name}</Typography>
                       </td>
                       <td>
                           <Typography level="body-xs">{row?.username}</Typography>
                       </td>
                       <td>
                           <Typography level="body-xs">{row?.email}</Typography>
                       </td>
                       <td>
                           <Typography level="body-xs">{row?.department}</Typography>
                       </td>
                       {/*<td>*/}
                       {/*  <Chip*/}
                       {/*    variant="soft"*/}
                       {/*    size="sm"*/}
                       {/*    startDecorator={*/}
                       {/*      {*/}
                       {/*        Paid: <CheckRoundedIcon />,*/}
                       {/*        Refunded: <AutorenewRoundedIcon />,*/}
                       {/*        Cancelled: <BlockIcon />,*/}
                       {/*      }[row.status]*/}
                       {/*    }*/}
                       {/*    color={*/}
                       {/*      {*/}
                       {/*        Paid: 'success',*/}
                       {/*        Refunded: 'neutral',*/}
                       {/*        Cancelled: 'danger',*/}
                       {/*      }[row.status] as ColorPaletteProp*/}
                       {/*    }*/}
                       {/*  >*/}
                       {/*    {row.status}*/}
                       {/*  </Chip>*/}
                       {/*</td>*/}
                       {/*<td>*/}
                       {/*  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>*/}
                       {/*    <Avatar size="sm">{row.customer.initial}</Avatar>*/}
                       {/*    <div>*/}
                       {/*      <Typography level="body-xs">{row.customer.name}</Typography>*/}
                       {/*      <Typography level="body-xs">{row.customer.email}</Typography>*/}
                       {/*    </div>*/}
                       {/*  </Box>*/}
                       {/*</td>*/}
                       <td>
                           <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                               <RowMenu row={row}/>
                           </Box>
                       </td>
                   </tr>
               ))}
               </tbody>
           </Table>
       </Sheet>
    );
}
