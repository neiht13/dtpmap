'use client';

import React, { useEffect, useState } from 'react';
import {
    Box,
    Button,
    Typography,
    Table,
    Checkbox,
    Dropdown,
    MenuButton,
    IconButton,
    Menu,
    MenuItem,
    Divider,
    Chip,
    Sheet,
    Skeleton
} from '@mui/joy';
import {
    Add,
    CancelOutlined,
    CheckCircleOutlineOutlined,
    Settings,
} from '@mui/icons-material'
import Map2 from "./Map2"
import UserEditModal from './UserEditModal';
import Header from "@/components/Header";
import {useSession} from "next-auth/react";

export default function JoyOrderDashboardTemplate() {
    const [users, setUsers] = useState([]);
    const [selected, setSelected] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isNewModalOpen, setIsNewModalOpen] = useState(false);
    const [userToEdit, setUserToEdit] = useState({});

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const response = await fetch('/api/user/get');
        const result = await response.json();
        setUsers(result.result || []);
        setLoading(false);
    };
// @ts-ignore
    const editAccount = async (data) => {
        const response = await fetch('/api/user/edit', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        fetchUsers();
    };
// @ts-ignore
    const newAccount = async (data) => {
        const response = await fetch('/api/user/create', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        fetchUsers();
    };

    // @ts-ignore
    function RowMenu({ row }) {
        const [isEditModalOpen, setIsEditModalOpen] = useState(false);
        // @ts-ignore
        const handleEditUser = (user) => {
            setUserToEdit(user);
            setIsEditModalOpen(true);
        };

        return (
            <Dropdown>
                <MenuButton
                    slots={{ root: IconButton }}
                    slotProps={{ root: { variant: 'plain', color: 'neutral', size: 'sm' } }}
                >
                    <Settings />
                </MenuButton>
                <Menu size="sm" sx={{ minWidth: 140 }}>
                    <MenuItem onClick={() => setIsEditModalOpen(true)}>Chỉnh sửa</MenuItem>
                    <MenuItem>Đổi mật khẩu</MenuItem>
                    <MenuItem onClick={() => {
                        const updatedUser = { ...row, status: !row.status };
                        editAccount(updatedUser);
                    }}>{row.status ? "Khóa" : "Kích hoạt"}</MenuItem>
                    <Divider />
                    <MenuItem color="danger">Xóa</MenuItem>
                </Menu>

                <UserEditModal
                    open={isEditModalOpen}
                    onClose={() => setIsEditModalOpen(false)}
                    userData={row}
                    onSave={editAccount}
                />
            </Dropdown>
        );
    }

    const { data: session, status } = useSession()

    console.log("session", session)
    if (session && !session?.user?.role?.includes('Admin')) {
        return (
            <>
                You are not permission!
            </>
        )
    }
    // @ts-ignore
    return (
        <>
            <Header location="Tài khoản" children={
                <Button onClick={() => setIsNewModalOpen(true)} startDecorator={<Add />}>Thêm mới</Button>
            } />
            <UserEditModal
                open={isNewModalOpen}
                onClose={() => setIsNewModalOpen(false)}
                userData={null}
                onSave={newAccount}
            />

            <Sheet sx={{
                width: '100%',
                borderRadius: 'sm',
                flexShrink: 1,
                overflow: 'auto',
                minHeight: 0,
            }}
                   variant="outlined"
            >
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
                                indeterminate={selected.length > 0 && selected.length !== users.length}
                                checked={selected.length === users.length}
                                onChange={() => {
                                    // @ts-ignore
                                    setSelected(selected.length === users.length ? [] : users.map((row) => row?.id))}}

                                color={selected.length > 0 || selected.length === users.length ? 'primary' : undefined}
                                sx={{ verticalAlign: 'text-bottom' }}
                            />
                        </th>
                        <th style={{ width: 140, padding: '12px 6px' }}>Tên</th>
                        <th style={{ width: 140, padding: '12px 6px' }}>Tài khoản</th>
                        <th style={{ width: 140, padding: '12px 6px' }}>Email</th>
                        <th style={{ width: 140, padding: '12px 6px' }}>Đơn vị</th>
                        <th style={{ width: 140, padding: '12px 6px' }}>Trạng thái</th>
                        <th style={{ width: 140, padding: '12px 6px' }}>Chức năng</th>
                        <th style={{ width: 140, padding: '12px 6px' }}> </th>
                    </tr>
                    </thead>
                    <tbody>
                    {(!loading && (!users || (users && users.length === 0))) ?
                        <tr key={'nodata'}>
                            <td colSpan={8} style={{ textAlign: 'center' }}>Không có dữ liệu</td>
                        </tr>
                        : users.map((row:any) => (
                            <tr key={row.id}>
                                <td style={{ textAlign: 'center', width: 120 }}>
                                    <Checkbox
                                        size="sm"
                                        // @ts-ignore
                                        checked={selected.includes(row?.id)}
                                        // @ts-ignore
                                        color={selected.includes(row?.id) ? 'primary' : undefined}
                                        // @ts-ignore
                                        onChange={() => setSelected(selected.includes(row.id) ? selected.filter((id) => id !== row.id) : [...selected, row.id])}
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
                                <td>
                                    <Chip
                                        variant="soft"
                                        size="sm"
                                        startDecorator={row?.status ? <CheckCircleOutlineOutlined /> : <CancelOutlined />}
                                        color={row?.status ? 'success' : 'danger'}
                                    >
                                        {row?.status ? "Đã kích hoạt" : "Khóa"}
                                    </Chip>
                                </td>
                                <td>
                                    <div role="group" aria-labelledby="rank">
                                        {['Admin', 'Trụ điện lực', 'Trụ BTS', 'Trụ VNPT'].map((item) => (
                                            <>
                                                {row.role.includes(item) && (
                                                    <Chip
                                                        variant="soft"
                                                        size="sm"
                                                        color={'primary'}
                                                    >
                                                        {item}
                                                    </Chip>
                                                )}
                                            </>
                                        ))}
                                    </div>
                                </td>
                                <td>
                                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                        <RowMenu row={row} />
                                    </Box>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
                {loading && (
                    <>
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                    </>
                )}
            </Sheet>
        </>
    );
}
