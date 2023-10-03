'use client';


import * as React from 'react';
import { ColorPaletteProp } from '@mui/joy/styles';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalClose from '@mui/joy/ModalClose';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import Checkbox from '@mui/joy/Checkbox';
import IconButton, { iconButtonClasses } from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
// icons
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import BlockIcon from '@mui/icons-material/Block';
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListDivider from "@mui/joy/ListDivider";
import {useEffect, useState} from "react";
import {fetchData} from "next-auth/client/_utils";
import {Autocomplete, CircularProgress, Skeleton, Tooltip} from "@mui/joy";


function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    // @ts-ignore
    const order = comparator(parseInt(a[0]), parseInt(b[0]));
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// @ts-ignore
function RowMenu({row}) {
  const [open2, setOpen2] = React.useState(false);
  const [location, setLocation] = useState([10, 105]);
  const [name1, setName1] = useState(row.name1)
  const [name2, setName2] = useState(row.name2)
  const [name3, setName3] = useState(row.name3)
  const [stt, setStt] = useState(row.stt)
  const [lat, setLat] = useState(row.lat)
  const [long, setLong] = useState(row.long)
  const [FPT, setFPT] = useState(row.FPT)
  const [SCTV, setSCTV] = useState(row.SCTV)
  const [VTVCab, setVTVCab] = useState(row.VTVCab)
  const [VMS, setVMS] = useState(row.VMS)
  useEffect(() => {
    if('geolocation' in navigator) {
      // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        console.log('{ latitude, longitude }',  latitude+"-"+ longitude )
        // @ts-ignore
        setLocation([parseFloat(latitude), parseFloat(longitude) ]);
      })
    }
  }, []);

  const handleSave = () =>{
    fetch('/api/list-location/edit',
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
              {
                id: row.id,
                stt,
                name1,
                name2,
                name3,
                lat,
                long,
                FPT,
                SCTV,
                VTVCab,
                VMS
              }
          ) // body data type must match "Content-Type" header
        }
    ).then( async r => {
        setOpen2(false)
      const result = await r.json();
    })
  }
  return (
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: 'plain', color: 'neutral', size: 'sm' } }}
      >
          <Tooltip title="Thao tác" variant="soft">

          <SettingsIcon />
          </Tooltip>
      </MenuButton>
      <Menu size="sm" sx={{ minWidth: 140 }}>
        <MenuItem
            onClick={() => setOpen2(true)}
        >Edit</MenuItem>
        <MenuItem>Rename</MenuItem>
        <MenuItem>Move</MenuItem>
        <Divider />
        <MenuItem color="danger">Delete</MenuItem>
      </Menu>
      <Modal open={open2} onClose={() => setOpen2(false)}>
        <ModalDialog aria-labelledby="filter-modal" layout="center">
          <ModalClose />
          <Typography id="filter-modal" level="h2">
            Chỉnh sửa
          </Typography>
          <form style={{overflow: "scroll"}} onSubmit={e=> {
            e.preventDefault();
            handleSave()
          }
          }>
            <FormControl id="stt">
              <FormLabel>STT</FormLabel>
              <Input name="text" type="text" 
                     required
                     value={stt}
                     onChange={e=>setStt(e.target.value)}
              />
            </FormControl>
            <br/>
            <FormControl id="name1">
              <FormLabel>Tên cấp 1</FormLabel>
              <Input name="text" type="text" 
                     required
                     value={name1}
                     onChange={e=>setName1(e.target.value)}
              />
            </FormControl>
            <br/>
            <FormControl id="name2">
              <FormLabel>Tên cấp 2</FormLabel>
              <Input name="text" type="text" 

                     value={name2}
                     onChange={e=>setName2(e.target.value)}
              />
            </FormControl>
            <br/>
            <FormControl id="name3">
              <FormLabel>Tên cấp 3</FormLabel>
              <Input name="text" type="text" 
                     value={name3}
                     onChange={e=>setName3(e.target.value)}
              />
            </FormControl>
            <br/>

            <FormControl id="lat">
              <FormLabel>lat</FormLabel>
              <Input name="text" type="text" 
                     required
                     value={lat}
                     onChange={e=>setLat(e.target.value)}
                     endDecorator={<Button onClick={e=>setLat(location[0])}>lat hiện tại</Button>}
              />
            </FormControl>
            <br/>
            <FormControl id="long">
              <FormLabel>long</FormLabel>
              <Input name="text" type="text" 
                     required

                     value={long}
                     onChange={e=>setLong(e.target.value)}
                     endDecorator={<Button onClick={()=>setLong(location[1])}>long hiện tại</Button>}
              />
            </FormControl>
            <br/>
            <FormControl id="name3">
              <FormLabel>FPT</FormLabel>
              <Input name="text" type="text" 
                     value={FPT}
                     onChange={e=>setFPT(e.target.value)}
              />
            </FormControl>
            <br/>
            <FormControl id="name3">
              <FormLabel>SCTV</FormLabel>
              <Input name="text" type="text" 
                     value={SCTV}
                     onChange={e=>setSCTV(e.target.value)}
              />
            </FormControl>
            <br/>
            <FormControl id="name3">
              <FormLabel>VTVCab</FormLabel>
              <Input name="text" type="text" 
                     value={VTVCab}
                     onChange={e=>setVTVCab(e.target.value)}
              />
            </FormControl>
            <br/>
            <FormControl id="name3">
              <FormLabel>VMS</FormLabel>
              <Input name="text" type="text" 
                     value={VMS}
                     onChange={e=>setVMS(e.target.value)}
              />
            </FormControl>
            <br/>

            <Sheet sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button sx={{ mt: 1 , alignSelf: 'center'}} type='submit'>1 2 3 Dzô</Button>

            </Sheet>
          </form>
        </ModalDialog>
      </Modal>
    </Dropdown>
  );
}

export default function OrderTable() {
  const [order, setOrder] = React.useState<Order>('desc');
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState('')
  const [rows2, setRows2] = useState([])
    const [tenChinh, setTenChinh] = useState('')
  useEffect(() => {
      fetchData()
  }, []);
    const fetchData = async () => {
        fetch('/api/list-location/get-all').then( async r => {
            const result = await r.json();
            setRows2(result.result)
            setLoading(false)
        })
    }

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any, newValue: number | null) => {
        if(newValue) setRowsPerPage(parseInt(newValue.toString(), 10));
        setPage(0);
    };

    const uniqueName1Set = new Set();
    if (rows2?.length > 0) {
        rows2.forEach((item: any) => {
            uniqueName1Set.add(item.name1);
        });
    }
    const uniqueName1List = Array.from(uniqueName1Set);
    console.log('console.log(uniqueName1List)', uniqueName1List);

    function labelDisplayedRows({
                                    from,
                                    to,
                                    count,
                                }: {
        from: number;
        to: number;
        count: number;
    }) {
        return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
    }
    const getLabelDisplayedRowsTo = () => {
        if (rows2.length === -1) {
            return (page + 1) * rowsPerPage;
        }
        return rowsPerPage === -1
            ? rows2.length
            : Math.min(rows2.length, (page + 1) * rowsPerPage);
    };

    // @ts-ignore
    const renderFilters = () => (
    <React.Fragment>
      <FormControl size="sm">
        <FormLabel>Tên chính</FormLabel>
          <Autocomplete
              placeholder="Combo box"
              options={uniqueName1List}
              sx={{ width: 200 }}
              loading={loading}
              onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                      event.defaultMuiPrevented = true;
                      // @ts-ignore
                    setTenChinh(event.target?.value)
                  }
              }}
              onChange={(event, value) => {
                  // @ts-ignore
                  setTenChinh(value)
                  }
              }
          />
      </FormControl>


    </React.Fragment>
  );
  return (
    <React.Fragment>
      <Sheet
        className="SearchAndFilters-mobile"
        sx={{
          display: {
            xs: 'flex',
            sm: 'none',
          },
          my: 1,
          gap: 1,
        }}
      >
          <FormControl>
              <FormLabel>Tìm kiếm</FormLabel>
        <Input
          size="sm"
          placeholder="Search"
          onChange={e=>setSearchText(e.target.value)}
          startDecorator={<SearchIcon />}
          sx={{ flexGrow: 1 }}
        />
          </FormControl>
          <FormControl>
          <FormLabel>Tên chính</FormLabel>
          <Autocomplete
              placeholder="Combo box"
              options={uniqueName1List}
              sx={{ width: 150 }}
              loading={loading}
              onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                      event.defaultMuiPrevented = true;
                      // @ts-ignore
                      setTenChinh(event.target?.value)
                  }
              }}
              onChange={(event, value) => {
                  // @ts-ignore
                  setTenChinh(value)
              }
              }
          />
      </FormControl>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog aria-labelledby="filter-modal" layout="center">
            <ModalClose />
            <Typography id="filter-modal" level="h2">
              Chỉnh sửa
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Sheet sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <form onSubmit={e=>{
                e.preventDefault();
              }
              }>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input name="text" type="email"
                         required
                  />
                </FormControl>
                <br/>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input name="password" type="password" placeholder="password"
                         required
                  />
                </FormControl>
                <Button sx={{ mt: 1 , alignSelf: 'center'}} type='submit'>1 2 3 Dzô</Button>
              </form>
            </Sheet>
          </ModalDialog>
        </Modal>
      </Sheet>
      <Box
        className="SearchAndFilters-tabletUp"
        sx={{
          borderRadius: 'sm',
          py: 2,
          display: {
            xs: 'none',
            sm: 'flex',
          },
          flexWrap: 'wrap',
          gap: 1.5,
          '& > *': {
            minWidth: {
              xs: '120px',
              md: '160px',
            },
          },
        }}
      >
        <FormControl sx={{ flex: 1 }} size="sm">
          <FormLabel>Search</FormLabel>
          <Input size="sm" placeholder="Search"
                 onChange={e=>setSearchText(e.target.value)}
                 startDecorator={<SearchIcon />} />
        </FormControl>
        {renderFilters()}
      </Box>
      <Sheet
        className="OrderTableContainer"
        variant="outlined"
        sx={{
          display: { xs: 'initial', sm: 'initial' },
          width: '100%',
          borderRadius: 'sm',
          flexShrink: 1,
          overflow: 'auto',
          minHeight: 0,
        }}
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
                  indeterminate={
                    selected?.length > 0 && selected?.length !== rows2?.length
                  }
                  checked={selected?.length === rows2?.length}
                  onChange={(event) => {
                    setSelected(
                      event.target.checked ? rows2.map((row: any) => row.stt) : [],
                    );
                  }}
                  color={
                      selected?.length > 0 || selected?.length === rows2?.length
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
              <th style={{ width: 40, padding: '12px 6px' }}>STT</th>
              <th style={{ width: 140, padding: '12px 6px' }}>Name 1</th>
              <th style={{ width: 140, padding: '12px 6px' }}>Name 2</th>
              <th style={{ width: 140, padding: '12px 6px' }}>Name 3</th>
              <th style={{ width: 100, padding: '12px 6px' }}>lat</th>
              <th style={{ width: 100, padding: '12px 6px' }}>long</th>
              <th style={{ width: 50, padding: '12px 6px' }}>FPT</th>
              <th style={{ width: 50, padding: '12px 6px' }}>SCTV</th>
              <th style={{ width: 50, padding: '12px 6px' }}>VTVCab</th>
              <th style={{ width: 50, padding: '12px 6px' }}>VMS</th>
              <th style={{ width: 140, padding: '12px 6px' }}> </th>
            </tr>
          </thead>
          <tbody>
            {stableSort(rows2, getComparator(order, 'stt'))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: any) => {
                    if (tenChinh && row.name1 !== tenChinh) {
                        return false
                    }
                    let name1: string = row.name1?.toLowerCase() || '';
                    let name2: string = row.name2?.toLowerCase() || '';
                    let name3: string = row.name3?.toLowerCase() || '';
                    let ext = searchText?.toLowerCase()
                    if (ext && !name1.includes(searchText) && !name2.includes(searchText)&& !name3.includes(searchText)) {
                        return false
                    }
                        return (
                            <tr key={row.stt}>
                                <td style={{textAlign: 'center', width: 120}}>
                                    <Checkbox
                                        size="sm"
                                        checked={selected.includes(row.stt)}
                                        color={selected.includes(row.stt) ? 'primary' : undefined}
                                        onChange={(event) => {
                                            setSelected((ids) =>
                                                event.target.checked
                                                    ? ids.concat(row.stt)
                                                    : ids.filter((itemId) => itemId !== row.stt),
                                            );
                                        }}
                                        slotProps={{checkbox: {sx: {textAlign: 'left'}}}}
                                        sx={{verticalAlign: 'text-bottom'}}
                                    />
                                </td>
                                <td>
                                    <Typography level="body-xs">{row.stt}</Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">{row.name1}</Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">{row.name2}</Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">{row.name3}</Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">{row.lat}</Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">{row.long}</Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">{row.FPT}</Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">{row.SCTV}</Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">{row.VTVCab}</Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">{row.VMS}</Typography>
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
                                    <Box sx={{display: 'flex', gap: 2, alignItems: 'center'}}>
                                        <RowMenu row={row}/>
                                    </Box>
                                </td>
                            </tr>
                        )
                }
            )}
          </tbody>
            <tfoot>
            <tr>
                <td colSpan={12}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            justifyContent: 'flex-end',
                        }}
                    >
                        <FormControl orientation="horizontal" size="sm">
                            <FormLabel>Dòng hiển thị:</FormLabel>
                            <Select onChange={handleChangeRowsPerPage} value={rowsPerPage}>
                                <Option value={10}>10</Option>
                                <Option value={30}>30</Option>
                                <Option value={rows2.length}>Tất cả</Option>
                            </Select>
                        </FormControl>
                        <Typography textAlign="center" sx={{ minWidth: 80 }}>
                            {labelDisplayedRows({
                                from: rows2.length === 0 ? 0 : page * rowsPerPage + 1,
                                to: getLabelDisplayedRowsTo(),
                                count: rows2.length === -1 ? -1 : rows2.length,
                            })}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton
                                size="sm"
                                color="neutral"
                                variant="outlined"
                                disabled={page === 0}
                                onClick={() => handleChangePage(page - 1)}
                                sx={{ bgcolor: 'background.surface' }}
                            >
                                <KeyboardArrowLeftIcon />
                            </IconButton>
                            <IconButton
                                size="sm"
                                color="neutral"
                                variant="outlined"
                                disabled={
                                    rows2.length !== -1
                                        ? page >= Math.ceil(rows2.length / rowsPerPage) - 1
                                        : false
                                }
                                onClick={() => handleChangePage(page + 1)}
                                sx={{ bgcolor: 'background.surface' }}
                            >
                                <KeyboardArrowRightIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </td>
            </tr>
            </tfoot>
        </Table>

          {loading && (
              <>
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
              </>
          )}
      </Sheet>
      {/*<Box*/}
      {/*  className="Pagination-laptopUp"*/}
      {/*  sx={{*/}
      {/*    pt: 2,*/}
      {/*    gap: 1,*/}
      {/*    [`& .${iconButtonClasses.root}`]: { borderRadius: '50%' },*/}
      {/*    display: {*/}
      {/*      xs: 'none',*/}
      {/*      md: 'flex',*/}
      {/*    },*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Button*/}
      {/*    size="sm"*/}
      {/*    variant="outlined"*/}
      {/*    color="neutral"*/}
      {/*    startDecorator={<KeyboardArrowLeftIcon />}*/}
      {/*  >*/}
      {/*    Previous*/}
      {/*  </Button>*/}

      {/*  <Box sx={{ flex: 1 }} />*/}
      {/*  {['1', '2', '3', '…', '8', '9', '10'].map((page) => (*/}
      {/*    <IconButton*/}
      {/*      key={page}*/}
      {/*      size="sm"*/}
      {/*      variant={Number(page) ? 'outlined' : 'plain'}*/}
      {/*      color="neutral"*/}
      {/*    >*/}
      {/*      {page}*/}
      {/*    </IconButton>*/}
      {/*  ))}*/}
      {/*  <Box sx={{ flex: 1 }} />*/}

      {/*  <Button*/}
      {/*    size="sm"*/}
      {/*    variant="outlined"*/}
      {/*    color="neutral"*/}
      {/*    endDecorator={<KeyboardArrowRightIcon />}*/}
      {/*  >*/}
      {/*    Next*/}
      {/*  </Button>*/}
      {/*</Box>*/}
    </React.Fragment>
  );
}
