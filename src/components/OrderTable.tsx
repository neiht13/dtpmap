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

const rows = [
  {
    id: 'INV-1234',
    date: 'Feb 3, 2023',
    status: 'Refunded',
    customer: {
      initial: 'O',
      name: 'Olivia Ryhe',
      email: 'olivia@email.com',
    },
  },
  {
    id: 'INV-1233',
    date: 'Feb 3, 2023',
    status: 'Paid',
    customer: {
      initial: 'S',
      name: 'Steve Hampton',
      email: 'steve.hamp@email.com',
    },
  },
  {
    id: 'INV-1232',
    date: 'Feb 3, 2023',
    status: 'Refunded',
    customer: {
      initial: 'C',
      name: 'Ciaran Murray',
      email: 'ciaran.murray@email.com',
    },
  },
  {
    id: 'INV-1231',
    date: 'Feb 3, 2023',
    status: 'Refunded',
    customer: {
      initial: 'M',
      name: 'Maria Macdonald',
      email: 'maria.mc@email.com',
    },
  },
  {
    id: 'INV-1230',
    date: 'Feb 3, 2023',
    status: 'Cancelled',
    customer: {
      initial: 'C',
      name: 'Charles Fulton',
      email: 'fulton@email.com',
    },
  },
  {
    id: 'INV-1229',
    date: 'Feb 3, 2023',
    status: 'Cancelled',
    customer: {
      initial: 'J',
      name: 'Jay Hooper',
      email: 'hooper@email.com',
    },
  },
  {
    id: 'INV-1228',
    date: 'Feb 3, 2023',
    status: 'Refunded',
    customer: {
      initial: 'K',
      name: 'Krystal Stevens',
      email: 'k.stevens@email.com',
    },
  },
  {
    id: 'INV-1227',
    date: 'Feb 3, 2023',
    status: 'Paid',
    customer: {
      initial: 'S',
      name: 'Sachin Flynn',
      email: 's.flyn@email.com',
    },
  },
  {
    id: 'INV-1226',
    date: 'Feb 3, 2023',
    status: 'Cancelled',
    customer: {
      initial: 'B',
      name: 'Bradley Rosales',
      email: 'brad123@email.com',
    },
  },
  {
    id: 'INV-1234',
    date: 'Feb 3, 2023',
    status: 'Paid',
    customer: {
      initial: 'O',
      name: 'Olivia Ryhe',
      email: 'olivia@email.com',
    },
  },
  {
    id: 'INV-1233',
    date: 'Feb 3, 2023',
    status: 'Cancelled',
    customer: {
      initial: 'S',
      name: 'Steve Hampton',
      email: 'steve.hamp@email.com',
    },
  },
  {
    id: 'INV-1232',
    date: 'Feb 3, 2023',
    status: 'Paid',
    customer: {
      initial: 'C',
      name: 'Ciaran Murray',
      email: 'ciaran.murray@email.com',
    },
  },
  {
    id: 'INV-1231',
    date: 'Feb 3, 2023',
    status: 'Refunded',
    customer: {
      initial: 'M',
      name: 'Maria Macdonald',
      email: 'maria.mc@email.com',
    },
  },
  {
    id: 'INV-1230',
    date: 'Feb 3, 2023',
    status: 'Paid',
    customer: {
      initial: 'C',
      name: 'Charles Fulton',
      email: 'fulton@email.com',
    },
  },
  {
    id: 'INV-1229',
    date: 'Feb 3, 2023',
    status: 'Cancelled',
    customer: {
      initial: 'J',
      name: 'Jay Hooper',
      email: 'hooper@email.com',
    },
  },
  {
    id: 'INV-1228',
    date: 'Feb 3, 2023',
    status: 'Cancelled',
    customer: {
      initial: 'K',
      name: 'Krystal Stevens',
      email: 'k.stevens@email.com',
    },
  },
  {
    id: 'INV-1227',
    date: 'Feb 3, 2023',
    status: 'Paid',
    customer: {
      initial: 'S',
      name: 'Sachin Flynn',
      email: 's.flyn@email.com',
    },
  },
  {
    id: 'INV-1226',
    date: 'Feb 3, 2023',
    status: 'Cancelled',
    customer: {
      initial: 'B',
      name: 'Bradley Rosales',
      email: 'brad123@email.com',
    },
  },
];

const rows2 = [
    {
      "stt": "1",
      "name3": "- Hai Bà Trưng - Ngô Quyền",
      "name1": "Đường Nguyễn Đình Chiểu",
      "name2": "- Hai Bà Trưng - Ngô Quyền",
      "Lat": "10.2730257",
      "Long": "105.3828722",
      "FPT": "1"
    },
    {
      "stt": "2",
      "name3": "- Ngô Sỹ Liên - Cách Mạng Tháng 8",
      "name1": "Đường Nguyễn Đình Chiểu",
      "name2": "- Ngô Sỹ Liên - Cách Mạng Tháng 8",
      "Lat": "10.4463502",
      "Long": "105.6408804",
      "FPT": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "3",
      "name3": "Cột 1",
      "name1": "Đường Nguyễn Trãi",
      "name2": "- Lê Lợi - Phạm Nhơn Thuần",
      "Lat": "10.4552210",
      "Long": "105.6403055",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "FPT_2": "1"
    },
    {
      "stt": "4",
      "name3": "Cột 2",
      "name1": "Đường Nguyễn Trãi",
      "name2": "- Lê Lợi - Phạm Nhơn Thuần",
      "Lat": "10.4550380",
      "Long": "105.6403472",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "5",
      "name3": "Cột 3",
      "name1": "Đường Nguyễn Trãi",
      "name2": "- Lê Lợi - Phạm Nhơn Thuần",
      "Lat": "10.4547851",
      "Long": "105.6405489",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "FPT_2": "1",
      "VTVCab_2": "1"
    },
    {
      "stt": "6",
      "name3": "Cột 4",
      "name1": "Đường Nguyễn Trãi",
      "name2": "- Lê Lợi - Phạm Nhơn Thuần",
      "Lat": "10.4547079",
      "Long": "105.6405791",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "7",
      "name3": "Cột 5",
      "name1": "Đường Nguyễn Trãi",
      "name2": "- Lê Lợi - Phạm Nhơn Thuần",
      "Lat": "10.4543752",
      "Long": "105.6407727",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "8",
      "name3": "Cột 6",
      "name1": "Đường Nguyễn Trãi",
      "name2": "- Lê Lợi - Phạm Nhơn Thuần",
      "Lat": "10.4538301",
      "Long": "105.6410252",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "9",
      "name3": "Cột 7",
      "name1": "Đường Nguyễn Trãi",
      "name2": "- Lê Lợi - Phạm Nhơn Thuần",
      "Lat": "10.4535299",
      "Long": "105.6411924",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "10",
      "name3": "Cột 8",
      "name1": "Đường Nguyễn Trãi",
      "name2": "- Lê Lợi - Phạm Nhơn Thuần",
      "Lat": "10.4526564",
      "Long": "105.6416476",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "11",
      "name3": "Cột 1",
      "name1": "Đường Cách Mạng Tháng 8",
      "name2": "- Cầu Xáng - Nhà Máy Nước Thải",
      "Lat": "10.4500627",
      "Long": "105.6377795",
      "FPT": "1",
      "VTVCab": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "12",
      "name3": "Cột 2",
      "name1": "Đường Cách Mạng Tháng 9",
      "name2": "- Cầu Xáng - Nhà Máy Nước Thải",
      "Lat": "10.4485540",
      "Long": "105.6382485",
      "FPT": "1",
      "VTVCab": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "13",
      "name3": "Cột 3",
      "name1": "Đường Cách Mạng Tháng 10",
      "name2": "- Cầu Xáng - Nhà Máy Nước Thải",
      "Lat": "10.4482768",
      "Long": "105.6384975",
      "VTVCab": "1"
    },
    {
      "stt": "14",
      "name3": "Cột 4",
      "name1": "Đường Cách Mạng Tháng 11",
      "name2": "- Cầu Xáng - Nhà Máy Nước Thải",
      "Lat": "10.4479694",
      "Long": "105.6387021",
      "FPT": "1",
      "VTVCab": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "15",
      "name3": "Cột 5",
      "name1": "Đường Cách Mạng Tháng 12",
      "name2": "- Cầu Xáng - Nhà Máy Nước Thải",
      "Lat": "10.4477288",
      "Long": "105.6389138",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "16",
      "name3": "Cột 6",
      "name1": "Đường Cách Mạng Tháng 13",
      "name2": "- Cầu Xáng - Nhà Máy Nước Thải",
      "Lat": "10.4472581",
      "Long": "105.6393274",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VMS": "1",
      "FPT_2": "1",
      "VMS_2": "1"
    },
    {
      "stt": "17",
      "name3": "Cột 7",
      "name1": "Đường Cách Mạng Tháng 14",
      "name2": "- Cầu Xáng - Nhà Máy Nước Thải",
      "Lat": "10.4469272",
      "Long": "105.6398979",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "18",
      "name3": "Cột 8",
      "name1": "Đường Cách Mạng Tháng 15",
      "name2": "- Cầu Xáng - Nhà Máy Nước Thải",
      "Lat": "10.4457596",
      "Long": "105.6416468",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "19",
      "name3": "Cột 9",
      "name1": "Đường Cách Mạng Tháng 16",
      "name2": "- Cầu Xáng - Nhà Máy Nước Thải",
      "Lat": "10.4452353",
      "Long": "105.6431717",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "FPT_2": "1"
    },
    {
      "stt": "20",
      "name3": "Cột 10",
      "name1": "Đường Cách Mạng Tháng 17",
      "name2": "- Cầu Xáng - Nhà Máy Nước Thải",
      "Lat": "10.4449387",
      "Long": "105.6452597",
      "FPT": "1",
      "VTVCab": "1"
    },
    {
      "stt": "21",
      "name3": "Cột 11",
      "name1": "Đường Cách Mạng Tháng 18",
      "name2": "- Cầu Xáng - Nhà Máy Nước Thải",
      "Lat": "10.4449202",
      "Long": "105.6520342",
      "FPT": "1"
    },
    {
      "stt": "22",
      "name3": "Cột 12",
      "name1": "Đường Cách Mạng Tháng 19",
      "name2": "- Cầu Xáng - Nhà Máy Nước Thải",
      "Lat": "10.4449179",
      "Long": "105.6522882",
      "FPT": "1"
    },
    {
      "stt": "23",
      "name3": "Cột 13",
      "name1": "Đường Cách Mạng Tháng 20",
      "name2": "- Cầu Xáng - Nhà Máy Nước Thải",
      "Lat": "10.4450430",
      "Long": "105.6542084",
      "FPT": "1"
    },
    {
      "stt": "24",
      "name3": "Cột 14",
      "name1": "Đường Cách Mạng Tháng 21",
      "name2": "- Cầu Xáng - Nhà Máy Nước Thải",
      "Lat": "10.4450776",
      "Long": "105.6548170",
      "FPT": "1"
    },
    {
      "stt": "25",
      "name3": "Cột 15",
      "name1": "Đường Cách Mạng Tháng 22",
      "name2": "- Cầu Xáng - Nhà Máy Nước Thải",
      "Lat": "10.4452829",
      "Long": "105.6564080",
      "FPT": "1"
    },
    {
      "stt": "26",
      "name3": "Cột 1",
      "name1": "Đường Phạm Nhơn Thuần",
      "name2": "- Ngô Quyền - Cách Mạng Tháng Tám",
      "Lat": "10.4520160",
      "Long": "105.6413351",
      "FPT": "1",
      "FPT_2": "1"
    },
    {
      "stt": "27",
      "name3": "Cột 2",
      "name1": "Đường Phạm Nhơn Thuần",
      "name2": "- Ngô Quyền - Cách Mạng Tháng Tám",
      "Lat": "10.4525238",
      "Long": "105.6423477",
      "FPT": "1"
    },
    {
      "stt": "28",
      "name3": "Cột 3",
      "name1": "Đường Phạm Nhơn Thuần",
      "name2": "- Ngô Quyền - Cách Mạng Tháng Tám",
      "Lat": "10.4551485",
      "Long": "105.6475398",
      "FPT": "1"
    },
    {
      "stt": "29",
      "name1": "Lê Thị Hường",
      "Lat": "10.2720374",
      "Long": "105.3847829",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VTVCab_2": "1"
    },
    {
      "stt": "30",
      "name3": "Đường số 9M",
      "name1": "Đường số 9M",
      "Lat": "10.2651599",
      "Long": "105.3818615",
      "VTVCab": "1"
    },
    {
      "stt": "31",
      "name3": "Cột 1",
      "name1": "Đường Lê Duẫn",
      "name2": "- Cầu Đình Trung – Cầu Rạch Chanh",
      "Lat": "10.4651547",
      "Long": "105.6406749",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "32",
      "name3": "Cột 2",
      "name1": "Đường Lê Duẫn",
      "name2": "- Cầu Đình Trung – Cầu Rạch Chanh",
      "Lat": "10.4676213",
      "Long": "105.6394762",
      "FPT": "1"
    },
    {
      "stt": "33",
      "name3": "Cột 3",
      "name1": "Đường Lê Duẫn",
      "name2": "- Cầu Đình Trung – Cầu Rạch Chanh",
      "Lat": "10.4687227",
      "Long": "105.6386640",
      "FPT": "1"
    },
    {
      "stt": "34",
      "name3": "Cột 4",
      "name1": "Đường Lê Duẫn",
      "name2": "- Cầu Đình Trung – Cầu Rạch Chanh",
      "Lat": "10.4689922",
      "Long": "105.6384881",
      "FPT": "1"
    },
    {
      "stt": "35",
      "name3": "Cột 5",
      "name1": "Đường Lê Duẫn",
      "name2": "- Cầu Đình Trung – Cầu Rạch Chanh",
      "Lat": "10.4692357",
      "Long": "105.6383134",
      "FPT": "1"
    },
    {
      "stt": "36",
      "name3": "Cột 6",
      "name1": "Đường Lê Duẫn",
      "name2": "- Cầu Đình Trung – Cầu Rạch Chanh",
      "Lat": "10.4694981",
      "Long": "105.6380808",
      "FPT": "1"
    },
    {
      "stt": "37",
      "name3": "Cột 7",
      "name1": "Đường Lê Duẫn",
      "name2": "- Cầu Đình Trung – Cầu Rạch Chanh",
      "Lat": "10.4698643",
      "Long": "105.6378273",
      "FPT": "1"
    },
    {
      "stt": "38",
      "name3": "Cột 8",
      "name1": "Đường Lê Duẫn",
      "name2": "- Cầu Đình Trung – Cầu Rạch Chanh",
      "Lat": "10.4701283",
      "Long": "105.6376392",
      "FPT": "1"
    },
    {
      "stt": "39",
      "name3": "Cột 9",
      "name1": "Đường Lê Duẫn",
      "name2": "- Cầu Đình Trung – Cầu Rạch Chanh",
      "Lat": "10.4703885",
      "Long": "105.6374739",
      "FPT": "1"
    },
    {
      "stt": "40",
      "name3": "Cột 10",
      "name1": "Đường Lê Duẫn",
      "name2": "- Cầu Đình Trung – Cầu Rạch Chanh",
      "Lat": "10.4706323",
      "Long": "105.6372674",
      "FPT": "1"
    },
    {
      "stt": "41",
      "name3": "Cột 1",
      "name1": "Đường Nguyễn Huệ",
      "name2": "- Cầu Đình Trung – Cầu An Bình",
      "Lat": "10.4533664",
      "Long": "105.6560758",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "42",
      "name3": "Cột 2",
      "name1": "Đường Nguyễn Huệ",
      "name2": "- Cầu Đình Trung – Cầu An Bình",
      "Lat": "10.4531768",
      "Long": "105.6530769",
      "FPT": "1"
    },
    {
      "stt": "43",
      "name3": "Cột 3",
      "name1": "Đường Nguyễn Huệ",
      "name2": "- Cầu Đình Trung – Cầu An Bình",
      "Lat": "10.4542730",
      "Long": "105.6500833",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "44",
      "name3": "Cột 1",
      "name1": "Tôn Đức Thắng",
      "name2": "- Cầu Cái Sao Thượng – Tôn Đức Thắng+Lê đại Hành",
      "Lat": "10.4683268",
      "Long": "105.6393678",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "45",
      "name3": "Cột 2",
      "name1": "Tôn Đức Thắng",
      "name2": "- Cầu Cái Sao Thượng – Tôn Đức Thắng+Lê đại Hành",
      "Lat": "10.4686156",
      "Long": "105.6398829",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "46",
      "name3": "Cột 3",
      "name1": "Tôn Đức Thắng",
      "name2": "- Cầu Cái Sao Thượng – Tôn Đức Thắng+Lê đại Hành",
      "Lat": "10.4713063",
      "Long": "105.6451804",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "47",
      "name3": "Cột 4",
      "name1": "Tôn Đức Thắng",
      "name2": "- Cầu Cái Sao Thượng – Tôn Đức Thắng+Lê đại Hành",
      "Lat": "10.4690377",
      "Long": "105.6406070",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "48",
      "name3": "Cột 5",
      "name1": "Tôn Đức Thắng",
      "name2": "- Cầu Cái Sao Thượng – Tôn Đức Thắng+Lê đại Hành",
      "Lat": "10.4713909",
      "Long": "105.6465453",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "49",
      "name3": "Cột 6",
      "name1": "Tôn Đức Thắng",
      "name2": "- Cầu Cái Sao Thượng – Tôn Đức Thắng+Lê đại Hành",
      "Lat": "10.4713154",
      "Long": "105.6469536",
      "FPT": "1"
    },
    {
      "stt": "50",
      "name3": "Cột 7",
      "name1": "Tôn Đức Thắng",
      "name2": "- Cầu Cái Sao Thượng – Tôn Đức Thắng+Lê đại Hành",
      "Lat": "10.4696390",
      "Long": "105.6416698",
      "FPT": "1"
    },
    {
      "stt": "51",
      "name3": "Cột 8",
      "name1": "Tôn Đức Thắng",
      "name2": "- Cầu Cái Sao Thượng – Tôn Đức Thắng+Lê đại Hành",
      "Lat": "10.4700592",
      "Long": "105.6424052",
      "FPT": "1"
    },
    {
      "stt": "52",
      "name3": "Cột 9",
      "name1": "Tôn Đức Thắng",
      "name2": "- Cầu Cái Sao Thượng – Tôn Đức Thắng+Lê đại Hành",
      "Lat": "10.4702165",
      "Long": "105.6426578",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "53",
      "name3": "Cột 10",
      "name1": "Tôn Đức Thắng",
      "name2": "- Cầu Cái Sao Thượng – Tôn Đức Thắng+Lê đại Hành",
      "Lat": "10.4712172",
      "Long": "105.6447678",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "54",
      "name3": "Cột 11",
      "name1": "Tôn Đức Thắng",
      "name2": "- Cầu Cái Sao Thượng – Tôn Đức Thắng+Lê đại Hành",
      "Lat": "10.4713039",
      "Long": "105.6450244",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "SCTV_2": "1"
    },
    {
      "stt": "55",
      "name3": "Cột 12",
      "name1": "Tôn Đức Thắng",
      "name2": "- Cầu Cái Sao Thượng – Tôn Đức Thắng+Lê đại Hành",
      "Lat": "10.4714841",
      "Long": "105.6453725",
      "FPT": "1"
    },
    {
      "stt": "56",
      "name3": "Cột 13",
      "name1": "Tôn Đức Thắng",
      "name2": "- Cầu Cái Sao Thượng – Tôn Đức Thắng+Lê đại Hành",
      "Lat": "10.4702259",
      "Long": "105.6430037",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "57",
      "name3": "Cột 14",
      "name1": "Tôn Đức Thắng",
      "name2": "- Cầu Cái Sao Thượng – Tôn Đức Thắng+Lê đại Hành",
      "Lat": "10.4684593",
      "Long": "105.6395969",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "58",
      "name3": "Cột 15",
      "name1": "Tôn Đức Thắng",
      "name2": "- Cầu Cái Sao Thượng – Tôn Đức Thắng+Lê đại Hành",
      "Lat": "10.4688629",
      "Long": "105.6402718",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "59",
      "name3": "Cột 16",
      "name1": "Tôn Đức Thắng",
      "name2": "- Cầu Cái Sao Thượng – Tôn Đức Thắng+Lê đại Hành",
      "Lat": "10.4714502",
      "Long": "105.6461269",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "60",
      "name3": "Cột 17",
      "name1": "Tôn Đức Thắng",
      "name2": "- Cầu Cái Sao Thượng – Tôn Đức Thắng+Lê đại Hành",
      "Lat": "10.4692479",
      "Long": "105.6409273",
      "FPT": "1"
    },
    {
      "stt": "61",
      "name3": "Cột 18",
      "name1": "Tôn Đức Thắng",
      "name2": "- Cầu Cái Sao Thượng – Tôn Đức Thắng+Lê đại Hành",
      "Lat": "10.4694447",
      "Long": "105.6413210",
      "FPT": "1"
    },
    {
      "stt": "62",
      "name3": "- Nguyễn Huệ - Phù Đỏng",
      "name1": "Đường Lê Đại Hành",
      "name2": "- Nguyễn Huệ - Phù Đỏng",
      "Lat": "10.4573027",
      "Long": "105.6491439",
      "FPT": "1"
    },
    {
      "stt": "63",
      "name3": "Cột 1",
      "name1": "Đường Lê Đại Hành",
      "name2": "- Phù Đỏng- Ngã 4 Quãng Khánh",
      "Lat": "10.4675580",
      "Long": "105.6466364",
      "FPT": "1"
    },
    {
      "stt": "64",
      "name3": "Cột 2",
      "name1": "Đường Lê Đại Hành",
      "name2": "- Phù Đỏng- Ngã 4 Quãng Khánh",
      "Lat": "10.4689085",
      "Long": "105.6466520",
      "FPT": "1"
    },
    {
      "stt": "65",
      "name3": "Cột 3",
      "name1": "Đường Lê Đại Hành",
      "name2": "- Phù Đỏng- Ngã 4 Quãng Khánh",
      "Lat": "10.4697110",
      "Long": "105.6467552",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "66",
      "name3": "Cột 4",
      "name1": "Đường Lê Đại Hành",
      "name2": "- Phù Đỏng- Ngã 4 Quãng Khánh",
      "Lat": "10.4701429",
      "Long": "105.6468226",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "67",
      "name3": "Cột 5",
      "name1": "Đường Lê Đại Hành",
      "name2": "- Phù Đỏng- Ngã 4 Quãng Khánh",
      "Lat": "10.4710013",
      "Long": "105.6469557",
      "FPT": "1"
    },
    {
      "stt": "68",
      "name3": "Cột 6",
      "name1": "Đường Lê Đại Hành",
      "name2": "- Phù Đỏng- Ngã 4 Quãng Khánh",
      "Lat": "10.4711700",
      "Long": "105.6469709",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "69",
      "name3": "Cột 7",
      "name1": "Đường Lê Đại Hành",
      "name2": "- Phù Đỏng- Ngã 4 Quãng Khánh",
      "Lat": "10.4715207",
      "Long": "105.6470434",
      "FPT": "1"
    },
    {
      "stt": "70",
      "name3": "Cột 8",
      "name1": "Đường Lê Đại Hành",
      "name2": "- Phù Đỏng- Ngã 4 Quãng Khánh",
      "Lat": "10.4728094",
      "Long": "105.6472637",
      "FPT": "1"
    },
    {
      "stt": "71",
      "name3": "Cột 9",
      "name1": "Đường Lê Đại Hành",
      "name2": "- Phù Đỏng- Ngã 4 Quãng Khánh",
      "Lat": "10.4739522",
      "Long": "105.6474232",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "72",
      "name3": "Cột 10",
      "name1": "Đường Lê Đại Hành",
      "name2": "- Phù Đỏng- Ngã 4 Quãng Khánh",
      "Lat": "10.4743253",
      "Long": "105.6474729",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "73",
      "name3": "Cột 11",
      "name1": "Đường Lê Đại Hành",
      "name2": "- Phù Đỏng- Ngã 4 Quãng Khánh",
      "Lat": "10.4746841",
      "Long": "105.6475142",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "74",
      "name3": "Cột 1",
      "name1": "Đường Điện Biên Phủ",
      "name2": "- Nghĩa Trang liệt sĩ – Ngã 4 Quãng Khánh",
      "Lat": "10.4629149",
      "Long": "105.6445445",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "75",
      "name3": "Cột 2",
      "name1": "Đường Điện Biên Phủ",
      "name2": "- Nghĩa Trang liệt sĩ – Ngã 4 Quãng Khánh",
      "Lat": "10.4631752",
      "Long": "105.6445641",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "76",
      "name3": "Cột 3",
      "name1": "Đường Điện Biên Phủ",
      "name2": "- Nghĩa Trang liệt sĩ – Ngã 4 Quãng Khánh",
      "Lat": "10.4635414",
      "Long": "105.6446274",
      "FPT": "1"
    },
    {
      "stt": "77",
      "name3": "Cột 4",
      "name1": "Đường Điện Biên Phủ",
      "name2": "- Nghĩa Trang liệt sĩ – Ngã 4 Quãng Khánh",
      "Lat": "10.4658265",
      "Long": "105.6449163",
      "FPT": "1"
    },
    {
      "stt": "78",
      "name3": "Cột 5",
      "name1": "Đường Điện Biên Phủ",
      "name2": "- Nghĩa Trang liệt sĩ – Ngã 4 Quãng Khánh",
      "Lat": "10.4665340",
      "Long": "105.6450067",
      "FPT": "1"
    },
    {
      "stt": "79",
      "name3": "Cột 6",
      "name1": "Đường Điện Biên Phủ",
      "name2": "- Nghĩa Trang liệt sĩ – Ngã 4 Quãng Khánh",
      "Lat": "10.4676114",
      "Long": "105.6451422",
      "FPT": "1"
    },
    {
      "stt": "80",
      "name3": "Cột 7",
      "name1": "Đường Điện Biên Phủ",
      "name2": "- Nghĩa Trang liệt sĩ – Ngã 4 Quãng Khánh",
      "Lat": "10.4678290",
      "Long": "105.6451867",
      "FPT": "1"
    },
    {
      "stt": "81",
      "name3": "Cột 8",
      "name1": "Đường Điện Biên Phủ",
      "name2": "- Nghĩa Trang liệt sĩ – Ngã 4 Quãng Khánh",
      "Lat": "10.4689535",
      "Long": "105.6453249",
      "FPT": "1"
    },
    {
      "stt": "82",
      "name3": "Cột 9",
      "name1": "Đường Điện Biên Phủ",
      "name2": "- Nghĩa Trang liệt sĩ – Ngã 4 Quãng Khánh",
      "Lat": "10.4692807",
      "Long": "105.6453731",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "83",
      "name3": "Cột 10",
      "name1": "Đường Điện Biên Phủ",
      "name2": "- Nghĩa Trang liệt sĩ – Ngã 4 Quãng Khánh",
      "Lat": "10.4704418",
      "Long": "105.6455073",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "84",
      "name3": "Cột 11",
      "name1": "Đường Điện Biên Phủ",
      "name2": "- Nghĩa Trang liệt sĩ – Ngã 4 Quãng Khánh",
      "Lat": "10.4714365",
      "Long": "105.6456869",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "85",
      "name3": "Cột 12",
      "name1": "Đường Điện Biên Phủ",
      "name2": "- Nghĩa Trang liệt sĩ – Ngã 4 Quãng Khánh",
      "Lat": "10.4716347",
      "Long": "105.6457061",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "86",
      "name3": "Cột 13",
      "name1": "Đường Điện Biên Phủ",
      "name2": "- Nghĩa Trang liệt sĩ – Ngã 4 Quãng Khánh",
      "Lat": "10.4739797",
      "Long": "105.6459835",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "FPT_2": "1"
    },
    {
      "stt": "87",
      "name3": "Cột 14",
      "name1": "Đường Điện Biên Phủ",
      "name2": "- Nghĩa Trang liệt sĩ – Ngã 4 Quãng Khánh",
      "Lat": "10.4743494",
      "Long": "105.6460112",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "FPT_2": "1"
    },
    {
      "stt": "88",
      "name3": "Cột 15",
      "name1": "Đường Điện Biên Phủ",
      "name2": "- Nghĩa Trang liệt sĩ – Ngã 4 Quãng Khánh",
      "Lat": "10.4747050",
      "Long": "105.6460719",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "FPT_2": "1"
    },
    {
      "stt": "89",
      "name3": "Cột 16",
      "name1": "Đường Điện Biên Phủ",
      "name2": "- Nghĩa Trang liệt sĩ – Ngã 4 Quãng Khánh",
      "Lat": "10.4749630",
      "Long": "105.6461155",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "FPT_2": "1"
    },
    {
      "stt": "90",
      "name3": "Cột 17",
      "name1": "Đường Điện Biên Phủ",
      "name2": "- Nghĩa Trang liệt sĩ – Ngã 4 Quãng Khánh",
      "Lat": "10.4628140",
      "Long": "105,6444382",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VTVCab_2": "1"
    },
    {
      "stt": "91",
      "name3": "Cột 18",
      "name1": "Đường Điện Biên Phủ",
      "name2": "- Nghĩa Trang liệt sĩ – Ngã 4 Quãng Khánh",
      "Lat": "10.4715756",
      "Long": "105.6455376",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "92",
      "name3": "Cột 19",
      "name1": "Đường Điện Biên Phủ",
      "name2": "- Nghĩa Trang liệt sĩ – Ngã 4 Quãng Khánh",
      "Lat": "10.4731076",
      "Long": "105.6457930",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "93",
      "name3": "Cột 20",
      "name1": "Đường Điện Biên Phủ",
      "name2": "- Nghĩa Trang liệt sĩ – Ngã 4 Quãng Khánh",
      "Lat": "10.4739505",
      "Long": "105.6458707",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "94",
      "name3": "Cột 21",
      "name1": "Đường Điện Biên Phủ",
      "name2": "- Nghĩa Trang liệt sĩ – Ngã 4 Quãng Khánh",
      "Lat": "10.4743467",
      "Long": "105.6459354",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "95",
      "name3": "Cột 22",
      "name1": "Đường Điện Biên Phủ",
      "name2": "- Nghĩa Trang liệt sĩ – Ngã 4 Quãng Khánh",
      "Lat": "10.4752900",
      "Long": "105.6460363",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "96",
      "name3": "Cột 23",
      "name1": "Đường Điện Biên Phủ",
      "name2": "- Nghĩa Trang liệt sĩ – Ngã 4 Quãng Khánh",
      "Lat": "10.4756909",
      "Long": "105.6461267",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "97",
      "name3": "Cột 24",
      "name1": "Đường Điện Biên Phủ",
      "name2": "- Nghĩa Trang liệt sĩ – Ngã 4 Quãng Khánh",
      "Lat": "10.4760979",
      "Long": "105.6461836",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "98",
      "name3": "- Lê Duẩn - Lê Đại Hành",
      "name1": "Đường Phù Đổng",
      "name2": "- Lê Duẩn - Lê Đại Hành",
      "Lat": "10.4624390",
      "Long": "105.6426330",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "99",
      "name3": "Cột 1",
      "name1": "Khu tái định cư Mỹ Phú (Khu 1, 2, 3 xã Mỹ Trà cũ)",
      "name2": "- Đường Hàm Nghi",
      "Lat": "10.4644770",
      "Long": "105.6442462",
      "FPT": "1"
    },
    {
      "stt": "100",
      "name3": "Cột 2",
      "name1": "Khu tái định cư Mỹ Phú (Khu 1, 2, 3 xã Mỹ Trà cũ)",
      "name2": "- Đường Hàm Nghi",
      "Lat": "10.4645148",
      "Long": "105.6439273",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VTVCab_2": "1"
    },
    {
      "stt": "101",
      "name3": "Cột 3",
      "name1": "Khu tái định cư Mỹ Phú (Khu 1, 2, 3 xã Mỹ Trà cũ)",
      "name2": "- Đường Hàm Nghi",
      "Lat": "10.4655070",
      "Long": "105.6439546",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "102",
      "name3": "Cột 4",
      "name1": "Khu tái định cư Mỹ Phú (Khu 1, 2, 3 xã Mỹ Trà cũ)",
      "name2": "- Đường Hàm Nghi",
      "Lat": "10.4657139",
      "Long": "105.6439742",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "103",
      "name3": "Cột 5",
      "name1": "Khu tái định cư Mỹ Phú (Khu 1, 2, 3 xã Mỹ Trà cũ)",
      "name2": "- Đường Hàm Nghi",
      "Lat": "10.4668982",
      "Long": "105.6440664",
      "FPT": "1"
    },
    {
      "stt": "104",
      "name3": "Cột 6",
      "name1": "Khu tái định cư Mỹ Phú (Khu 1, 2, 3 xã Mỹ Trà cũ)",
      "name2": "- Đường Hàm Nghi",
      "Lat": "10.4690527",
      "Long": "105.6435947",
      "FPT": "1"
    },
    {
      "stt": "105",
      "name3": "- Đường Thủ Khoa Huân",
      "name1": "Khu tái định cư Mỹ Phú (Khu 1, 2, 3 xã Mỹ Trà cũ)",
      "name2": "- Đường Thủ Khoa Huân",
      "Lat": "10.4656184",
      "Long": "105.6445536",
      "FPT": "1"
    },
    {
      "stt": "106",
      "name3": "Cột 1",
      "name1": "Khu tái định cư Mỹ Phú (Khu 1, 2, 3 xã Mỹ Trà cũ)",
      "name2": "- Đường Trần Quang Diệu (Lê Duẩn - Lê Đại Hành)",
      "Lat": "10.4662013",
      "Long": "105.6409573",
      "FPT": "1"
    },
    {
      "stt": "107",
      "name3": "Cột 2",
      "name1": "Khu tái định cư Mỹ Phú (Khu 1, 2, 3 xã Mỹ Trà cũ)",
      "name2": "- Đường Trần Quang Diệu (Lê Duẩn - Lê Đại Hành)",
      "Lat": "10.4660230",
      "Long": "105.6406959",
      "FPT": "1"
    },
    {
      "stt": "108",
      "name3": "Cột 3",
      "name1": "Khu tái định cư Mỹ Phú (Khu 1, 2, 3 xã Mỹ Trà cũ)",
      "name2": "- Đường Trần Quang Diệu (Lê Duẩn - Lê Đại Hành)",
      "Lat": "10.4660019",
      "Long": "105.6405580",
      "FPT": "1"
    },
    {
      "stt": "109",
      "name3": "Cột 4",
      "name1": "Khu tái định cư Mỹ Phú (Khu 1, 2, 3 xã Mỹ Trà cũ)",
      "name2": "- Đường Trần Quang Diệu (Lê Duẩn - Lê Đại Hành)",
      "Lat": "10.4683840",
      "Long": "105.6444722",
      "FPT": "1"
    },
    {
      "stt": "110",
      "name3": "Cột 5",
      "name1": "Khu tái định cư Mỹ Phú (Khu 1, 2, 3 xã Mỹ Trà cũ)",
      "name2": "- Đường Trần Quang Diệu (Lê Duẩn - Lê Đại Hành)",
      "Lat": "10.4685790",
      "Long": "105.6447732",
      "FPT": "1"
    },
    {
      "stt": "111",
      "name3": "Cột 6",
      "name1": "Khu tái định cư Mỹ Phú (Khu 1, 2, 3 xã Mỹ Trà cũ)",
      "name2": "- Đường Trần Quang Diệu (Lê Duẩn - Lê Đại Hành)",
      "Lat": "10.4688372",
      "Long": "105.6462495",
      "FPT": "1"
    },
    {
      "stt": "112",
      "name3": "Cột 1",
      "name1": "Khu tái định cư Mỹ Phú (Khu 1, 2, 3 xã Mỹ Trà cũ)",
      "name2": "- Đường Phạm Thế Hiển",
      "Lat": "10.4690999",
      "Long": "105.6445056",
      "FPT": "1"
    },
    {
      "stt": "113",
      "name3": "Cột 2",
      "name1": "Khu tái định cư Mỹ Phú (Khu 1, 2, 3 xã Mỹ Trà cũ)",
      "name2": "- Đường Phạm Thế Hiển",
      "Lat": "10.4693966",
      "Long": "105.6443286",
      "FPT": "1"
    },
    {
      "stt": "114",
      "name3": "Cột 3",
      "name1": "Khu tái định cư Mỹ Phú (Khu 1, 2, 3 xã Mỹ Trà cũ)",
      "name2": "- Đường Phạm Thế Hiển",
      "Lat": "10.4700610",
      "Long": "105.6439414",
      "FPT": "1"
    },
    {
      "stt": "115",
      "name3": "Cột 4",
      "name1": "Khu tái định cư Mỹ Phú (Khu 1, 2, 3 xã Mỹ Trà cũ)",
      "name2": "- Đường Phạm Thế Hiển",
      "Lat": "10.4703587",
      "Long": "105.6437643",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "116",
      "name3": "- Đường Trần Quốc Toản",
      "name1": "Khu tái định cư Mỹ Phú (Khu 1, 2, 3 xã Mỹ Trà cũ)",
      "name2": "- Đường Trần Quốc Toản",
      "Lat": "10.4707445",
      "Long": "105.6446330",
      "FPT": "1"
    },
    {
      "stt": "117",
      "name3": "Cột 1",
      "name1": "Khu tái định cư Mỹ Phú (Khu 1, 2, 3 xã Mỹ Trà cũ)",
      "name2": "- Đường Đinh Công Tráng",
      "Lat": "10.4679193",
      "Long": "105.6450683",
      "FPT": "1"
    },
    {
      "stt": "118",
      "name3": "Cột 2",
      "name1": "Khu tái định cư Mỹ Phú (Khu 1, 2, 3 xã Mỹ Trà cũ)",
      "name2": "- Đường Đinh Công Tráng",
      "Lat": "10.4680104",
      "Long": "105.6446397",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "119",
      "name3": "Cột 1",
      "name1": "Khu dân cư ấp 4 Mỹ Trà",
      "name2": "- Đường Phan Văn Cử (5m)",
      "Lat": "10.4700805",
      "Long": "105.6459259",
      "FPT": "1"
    },
    {
      "stt": "120",
      "name3": "Cột 2",
      "name1": "Khu dân cư ấp 4 Mỹ Trà",
      "name2": "- Đường Phan Văn Cử (5m)",
      "Lat": "10.4703659",
      "Long": "105.6460523",
      "FPT": "1"
    },
    {
      "stt": "121",
      "name3": "Cột 1",
      "name1": "Khu dân cư ấp 4 Mỹ Trà",
      "name2": "- Đường Phan Văn Cử (5m)",
      "Lat": "10.4715284",
      "Long": "105.6465813",
      "FPT": "1"
    },
    {
      "stt": "122",
      "name3": "Cột 2",
      "name1": "Khu dân cư ấp 4 Mỹ Trà",
      "name2": "- Đường Phan Văn Cử (5m)",
      "Lat": "10.4718227",
      "Long": "105.6466442",
      "FPT": "1"
    },
    {
      "stt": "123",
      "name3": "Cột 1",
      "name1": "Đường Phùng Khắc Khoan",
      "name2": "- Lê Duẩn - Tôn Đức Thắng",
      "Lat": "10.4711760",
      "Long": "105.6373861",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "124",
      "name3": "Cột 2",
      "name1": "Đường Phùng Khắc Khoan",
      "name2": "- Lê Duẩn - Tôn Đức Thắng",
      "Lat": "10.4714392",
      "Long": "105.6377077",
      "FPT": "1"
    },
    {
      "stt": "125",
      "name3": "Cột 3",
      "name1": "Đường Phùng Khắc Khoan",
      "name2": "- Lê Duẩn - Tôn Đức Thắng",
      "Lat": "10.4721431",
      "Long": "105.6386039",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "126",
      "name3": "Cột 4",
      "name1": "Đường Phùng Khắc Khoan",
      "name2": "- Lê Duẩn - Tôn Đức Thắng",
      "Lat": "10.4742921",
      "Long": "105.6408945",
      "FPT": "1"
    },
    {
      "stt": "127",
      "name3": "Cột 5",
      "name1": "Đường Phùng Khắc Khoan",
      "name2": "- Lê Duẩn - Tôn Đức Thắng",
      "Lat": "10.4743961",
      "Long": "105.6412188",
      "FPT": "1"
    },
    {
      "stt": "128",
      "name3": "Cột 6",
      "name1": "Đường Phùng Khắc Khoan",
      "name2": "- Lê Duẩn - Tôn Đức Thắng",
      "Lat": "10.4728594",
      "Long": "105.6430116",
      "FPT": "1"
    },
    {
      "stt": "129",
      "name3": "Cột 7",
      "name1": "Đường Phùng Khắc Khoan",
      "name2": "- Lê Duẩn - Tôn Đức Thắng",
      "Lat": "10.4729728",
      "Long": "105.6438004",
      "FPT": "1"
    },
    {
      "stt": "130",
      "name3": "Cột 1",
      "name1": "Khu dân cư phường Mỹ Phú",
      "name2": "- Đường Hồ Xuân Hương",
      "Lat": "10.4538179",
      "Long": "105.6556140",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "131",
      "name3": "Cột 2",
      "name1": "Khu dân cư phường Mỹ Phú",
      "name2": "- Đường Hồ Xuân Hương",
      "Lat": "10.4537976",
      "Long": "106.6553307",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "132",
      "name1": "Đường Nguyễn Văn Cừ  (TC 9 CÂY)  DŨNG",
      "Lat": "10.454479",
      "Long": "105.631577",
      "VTVCab": "1"
    },
    {
      "stt": "133",
      "name3": "Nguyễn Thái Học - Trần Thị Nhượng  ",
      "name1": "Đường Nguyễn Văn Cừ  (TC 9 CÂY)  DŨNG",
      "name2": "Nguyễn Thái Học - Trần Thị Nhượng  ",
      "Lat": "10.454152",
      "Long": "105.631501",
      "VTVCab": "1"
    },
    {
      "stt": "134",
      "name3": "Phạm Hữu Lầu - Nguyễn Thái Học  ",
      "name1": "Đường Nguyễn Văn Cừ  (TC 9 CÂY)  DŨNG",
      "name2": "Phạm Hữu Lầu - Nguyễn Thái Học  ",
      "Lat": "10.265942",
      "Long": "105.381545",
      "FPT": "1",
      "VTVCab": "1"
    },
    {
      "stt": "135",
      "name3": "Cầu Đúc - cầu Cái Sâu (Phường 4) ",
      "name1": "Đường Nguyễn Văn Cừ  (TC 9 CÂY)  DŨNG",
      "name2": "Cầu Đúc - cầu Cái Sâu (Phường 4) ",
      "Lat": "10.453738",
      "Long": "105.631963",
      "VTVCab": "1"
    },
    {
      "stt": "136",
      "name3": "Phạm Hữu Lầu - Hòa Đông",
      "name1": "Đường Nguyễn Văn Cừ  (TC 9 CÂY)  DŨNG",
      "name2": "Phạm Hữu Lầu - Hòa Đông",
      "Lat": "10.451015",
      "Long": "105.630061",
      "VTVCab": "1"
    },
    {
      "stt": "137",
      "name3": "Cột 1",
      "name1": " TỊNH THỚI-   CÂY XĂNG TRUNG KIÊN.....VƯỜN SAO  ",
      "Lat": "10.431778",
      "Long": "105.649256",
      "FPT": "1"
    },
    {
      "stt": "138",
      "name3": "Cột 2",
      "name1": " TỊNH THỚI-   CÂY XĂNG TRUNG KIÊN.....VƯỜN SAO  ",
      "Lat": "10.431606",
      "Long": "105.649191",
      "FPT": "1"
    },
    {
      "stt": "139",
      "name3": "Cột 3",
      "name1": " TỊNH THỚI-   CÂY XĂNG TRUNG KIÊN.....VƯỜN SAO  ",
      "Lat": "10.431778",
      "Long": "105.649256",
      "FPT": "1"
    },
    {
      "stt": "140",
      "name3": "Cột 4",
      "name1": " TỊNH THỚI-   CÂY XĂNG TRUNG KIÊN.....VƯỜN SAO  ",
      "Lat": "10.431.606",
      "Long": "105.649.191",
      "FPT": "1"
    },
    {
      "stt": "141",
      "name3": "Cột 1",
      "name1": "TỊNH THỚI- CÂY XĂNG TRUNG KIÊN--CAPHE MILANO ",
      "Lat": "10.432186",
      "Long": "105.649826",
      "FPT": "1"
    },
    {
      "stt": "142",
      "name3": "Cột 2",
      "name1": "TỊNH THỚI- CÂY XĂNG TRUNG KIÊN--CAPHE MILANO ",
      "Lat": "10.432643",
      "Long": "105.651166",
      "FPT": "1"
    },
    {
      "stt": "143",
      "name3": "Cột 3",
      "name1": "TỊNH THỚI- CÂY XĂNG TRUNG KIÊN--CAPHE MILANO ",
      "Lat": "10.433471",
      "Long": "105.653193",
      "FPT": "1"
    },
    {
      "stt": "144",
      "name3": "Cột 4",
      "name1": "TỊNH THỚI- CÂY XĂNG TRUNG KIÊN--CAPHE MILANO ",
      "Lat": "10.433646",
      "Long": "105.654008",
      "FPT": "1"
    },
    {
      "stt": "145",
      "name3": "Cột 5",
      "name1": "TỊNH THỚI- CÂY XĂNG TRUNG KIÊN--CAPHE MILANO ",
      "Lat": "10.432.186",
      "Long": "105.649.826",
      "FPT": "1"
    },
    {
      "stt": "146",
      "name3": "Cột 6",
      "name1": "TỊNH THỚI- CÂY XĂNG TRUNG KIÊN--CAPHE MILANO ",
      "Lat": "10.432.643",
      "Long": "105.651.166",
      "FPT": "1"
    },
    {
      "stt": "147",
      "name3": "Cột 7",
      "name1": "TỊNH THỚI- CÂY XĂNG TRUNG KIÊN--CAPHE MILANO ",
      "Lat": "10.433.471",
      "Long": "105.653.193",
      "FPT": "1"
    },
    {
      "stt": "148",
      "name3": "Cột 8",
      "name1": "TỊNH THỚI- CÂY XĂNG TRUNG KIÊN--CAPHE MILANO ",
      "Lat": "10.433.646",
      "Long": "105.654.008",
      "FPT": "1"
    },
    {
      "stt": "149",
      "name3": "Cột 1",
      "name1": "TỊNH THỚI - ĐÌNH TÂN TỊCH...CẦU LONG SA ",
      "Lat": "10.422251",
      "Long": "105.646893",
      "FPT": "1"
    },
    {
      "stt": "150",
      "name3": "Cột 2",
      "name1": "TỊNH THỚI - ĐÌNH TÂN TỊCH...CẦU LONG SA ",
      "Lat": "10.421963",
      "Long": "10.564844",
      "FPT": "1"
    },
    {
      "stt": "151",
      "name3": "Cột 3",
      "name1": "TỊNH THỚI - ĐÌNH TÂN TỊCH...CẦU LONG SA ",
      "Lat": "10.421836",
      "Long": "105.648815",
      "FPT": "1"
    },
    {
      "stt": "152",
      "name3": "Cột 4",
      "name1": "TỊNH THỚI - ĐÌNH TÂN TỊCH...CẦU LONG SA ",
      "Lat": "10.421503",
      "Long": "105.649631",
      "FPT": "1"
    },
    {
      "stt": "153",
      "name3": "Cột 5",
      "name1": "TỊNH THỚI - ĐÌNH TÂN TỊCH...CẦU LONG SA ",
      "Lat": "10.419135",
      "Long": "105.651241",
      "FPT": "1"
    },
    {
      "stt": "154",
      "name3": "Cột 6",
      "name1": "TỊNH THỚI - ĐÌNH TÂN TỊCH...CẦU LONG SA ",
      "Lat": "10.418306",
      "Long": "105.651178",
      "FPT": "1"
    },
    {
      "stt": "155",
      "name3": "Cột 7",
      "name1": "TỊNH THỚI - ĐÌNH TÂN TỊCH...CẦU LONG SA ",
      "Lat": "10.417971",
      "Long": "105.650993",
      "FPT": "1"
    },
    {
      "stt": "156",
      "name3": "Cột 8",
      "name1": "TỊNH THỚI - ĐÌNH TÂN TỊCH...CẦU LONG SA ",
      "Lat": "10.417403",
      "Long": "10.565069",
      "FPT": "1"
    },
    {
      "stt": "157",
      "name3": "Cột 9",
      "name1": "TỊNH THỚI - ĐÌNH TÂN TỊCH...CẦU LONG SA ",
      "Lat": "10.422.251",
      "Long": "105.646.893",
      "FPT": "1"
    },
    {
      "stt": "158",
      "name3": "Cột 10",
      "name1": "TỊNH THỚI - ĐÌNH TÂN TỊCH...CẦU LONG SA ",
      "Lat": "10.421.963",
      "Long": "10.564.844",
      "FPT": "1"
    },
    {
      "stt": "159",
      "name3": "Cột 11",
      "name1": "TỊNH THỚI - ĐÌNH TÂN TỊCH...CẦU LONG SA ",
      "Lat": "10.421.836",
      "Long": "105.648.815",
      "FPT": "1"
    },
    {
      "stt": "160",
      "name3": "Cột 12",
      "name1": "TỊNH THỚI - ĐÌNH TÂN TỊCH...CẦU LONG SA ",
      "Lat": "10.421.503",
      "Long": "105.649.631",
      "FPT": "1"
    },
    {
      "stt": "161",
      "name3": "Cột 13",
      "name1": "TỊNH THỚI - ĐÌNH TÂN TỊCH...CẦU LONG SA ",
      "Lat": "10.419.135",
      "Long": "105.651.241",
      "FPT": "1"
    },
    {
      "stt": "162",
      "name3": "Cột 1",
      "name1": "  TỊNH THỚI--NGÃ BA TÂM SỰ...THẦY KHÁCH ",
      "Lat": "10.416841",
      "Long": "105.666121",
      "FPT": "1"
    },
    {
      "stt": "163",
      "name3": "Cột 2",
      "name1": "  TỊNH THỚI--NGÃ BA TÂM SỰ...THẦY KHÁCH ",
      "Lat": "10.416828",
      "Long": "105.665781",
      "FPT": "1"
    },
    {
      "stt": "164",
      "name3": "Cột 3",
      "name1": "  TỊNH THỚI--NGÃ BA TÂM SỰ...THẦY KHÁCH ",
      "Lat": "10.416926",
      "Long": "105.665498",
      "FPT": "1",
      "FPT_2": "1"
    },
    {
      "stt": "165",
      "name3": "Cột 4",
      "name1": "  TỊNH THỚI--NGÃ BA TÂM SỰ...THẦY KHÁCH ",
      "Lat": "10.417071",
      "Long": "105.665190",
      "FPT": "1",
      "FPT_2": "1"
    },
    {
      "stt": "166",
      "name3": "Cột 5",
      "name1": "  TỊNH THỚI--NGÃ BA TÂM SỰ...THẦY KHÁCH ",
      "Lat": "10.417875",
      "Long": "105.663683",
      "FPT": "1"
    },
    {
      "stt": "167",
      "name3": "Cột 6",
      "name1": "  TỊNH THỚI--NGÃ BA TÂM SỰ...THẦY KHÁCH ",
      "Lat": "10.418288",
      "Long": "105.663048",
      "FPT": "1"
    },
    {
      "stt": "168",
      "name3": "Cột 7",
      "name1": "  TỊNH THỚI--NGÃ BA TÂM SỰ...THẦY KHÁCH ",
      "Lat": "10.419971",
      "Long": "105.661481",
      "FPT": "1"
    },
    {
      "stt": "169",
      "name3": "Cột 8",
      "name1": "  TỊNH THỚI--NGÃ BA TÂM SỰ...THẦY KHÁCH ",
      "Lat": "10.420086",
      "Long": "105.661196",
      "FPT": "1"
    },
    {
      "stt": "170",
      "name3": "Cột 9",
      "name1": "  TỊNH THỚI--NGÃ BA TÂM SỰ...THẦY KHÁCH ",
      "Lat": "10.420206",
      "Long": "105.660938",
      "FPT": "1"
    },
    {
      "stt": "171",
      "name3": "Cột 1",
      "name1": "PHL...CẦU CÁI SÂU...CẦU CÁI TÔM  ..VIỆT HÀ",
      "Lat": "10.265920",
      "Long": "105.374856",
      "VTVCab": "1"
    },
    {
      "stt": "172",
      "name3": "Cột 2",
      "name1": "PHL...CẦU CÁI SÂU...CẦU CÁI TÔM  ..VIỆT HÀ",
      "Lat": "10.265213",
      "Long": "105.374813",
      "VTVCab": "1"
    },
    {
      "stt": "173",
      "name3": "Cột 3",
      "name1": "PHL...CẦU CÁI SÂU...CẦU CÁI TÔM  ..VIỆT HÀ",
      "Lat": "10.265088",
      "Long": "105.374814",
      "VTVCab": "1"
    },
    {
      "stt": "174",
      "name3": "Cột 1",
      "name1": "NỘI BỘ LĂNG--VONG XOAY NGUYỄN BỈNH  KHIÊM",
      "Lat": "10.271519",
      "Long": "105.375202",
      "FPT": "1"
    },
    {
      "stt": "175",
      "name3": "Cột 2",
      "name1": "NỘI BỘ LĂNG--VONG XOAY NGUYỄN BỈNH  KHIÊM",
      "Lat": "10.265801",
      "Long": "105.375683",
      "FPT": "1"
    },
    {
      "stt": "176",
      "name3": "Cột 1",
      "name1": "ĐƯỜNG CHÚ 2 QUÝT  ",
      "Lat": "10.444973",
      "Long": "105.609056",
      "FPT": "1"
    },
    {
      "stt": "177",
      "name3": "Cột 2",
      "name1": "ĐƯỜNG CHÚ 2 QUÝT  ",
      "Lat": "10.442754",
      "Long": "105.618319",
      "FPT": "1"
    },
    {
      "stt": "178",
      "name3": "Cột 1",
      "name1": "NGÃ BA CÁI TẮC ...THÔNG LƯU..THÀNH ĐỘI",
      "Lat": "10.437804",
      "Long": "105.623577",
      "FPT": "1"
    },
    {
      "stt": "179",
      "name3": "Cột 2",
      "name1": "NGÃ BA CÁI TẮC ...THÔNG LƯU..THÀNH ĐỘI",
      "Lat": "10.437734",
      "Long": "105.621180",
      "FPT": "1"
    },
    {
      "stt": "180",
      "name3": "Cột 3",
      "name1": "NGÃ BA CÁI TẮC ...THÔNG LƯU..THÀNH ĐỘI",
      "Lat": "10.437661",
      "Long": "105.620063",
      "FPT": "1"
    },
    {
      "stt": "181",
      "name3": "Cột 4",
      "name1": "NGÃ BA CÁI TẮC ...THÔNG LƯU..THÀNH ĐỘI",
      "Lat": "10.437848",
      "Long": "105.618751",
      "FPT": "1"
    },
    {
      "stt": "182",
      "name3": "Cột 5",
      "name1": "NGÃ BA CÁI TẮC ...THÔNG LƯU..THÀNH ĐỘI",
      "Lat": "10.437984",
      "Long": "105.617022",
      "FPT": "1"
    },
    {
      "stt": "183",
      "name3": "Cột 6",
      "name1": "NGÃ BA CÁI TẮC ...THÔNG LƯU..THÀNH ĐỘI",
      "Lat": "10.438117",
      "Long": "105.616140",
      "FPT": "1",
      "FPT_2": "1"
    },
    {
      "stt": "184",
      "name3": "Cột 7",
      "name1": "NGÃ BA CÁI TẮC ...THÔNG LƯU..THÀNH ĐỘI",
      "Lat": "10.438185",
      "Long": "105.615374",
      "FPT": "1"
    },
    {
      "stt": "185",
      "name3": "Cột 8",
      "name1": "NGÃ BA CÁI TẮC ...THÔNG LƯU..THÀNH ĐỘI",
      "Lat": "10.438433",
      "Long": "105.613992",
      "FPT": "1"
    },
    {
      "stt": "186",
      "name3": "Cột 9",
      "name1": "NGÃ BA CÁI TẮC ...THÔNG LƯU..THÀNH ĐỘI",
      "Lat": "10.438992",
      "Long": "105.611050",
      "FPT": "1"
    },
    {
      "stt": "187",
      "name3": "Cột 10",
      "name1": "NGÃ BA CÁI TẮC ...THÔNG LƯU..THÀNH ĐỘI",
      "Lat": "10.439052",
      "Long": "105.610840",
      "FPT": "1"
    },
    {
      "stt": "188",
      "name3": "Cột 11",
      "name1": "NGÃ BA CÁI TẮC ...THÔNG LƯU..THÀNH ĐỘI",
      "Lat": "10.444309",
      "Long": "105.608476",
      "FPT": "1"
    },
    {
      "stt": "189",
      "name3": "Cột 1",
      "name1": "LỘ HÒA ĐÔNG TỪ CẦU HÒA LỌI...CẦU SẮT VĨ",
      "Lat": "10.44528",
      "Long": "105.6094",
      "FPT": "1",
      "VMS": "1",
      "FPT_2": "1",
      "VMS_2": "1"
    },
    {
      "stt": "190",
      "name3": "Cột 2",
      "name1": "LỘ HÒA ĐÔNG TỪ CẦU HÒA LỌI...CẦU SẮT VĨ",
      "Lat": "10.264577",
      "Long": "105.363589",
      "FPT": "1"
    },
    {
      "stt": "191",
      "name3": "Cột 3",
      "name1": "LỘ HÒA ĐÔNG TỪ CẦU HÒA LỌI...CẦU SẮT VĨ",
      "Lat": "10.44639",
      "Long": "105.6103",
      "FPT": "1",
      "FPT_2": "1"
    },
    {
      "stt": "192",
      "name3": "Cột 4",
      "name1": "LỘ HÒA ĐÔNG TỪ CẦU HÒA LỌI...CẦU SẮT VĨ",
      "Lat": "10.264783",
      "Long": "105.363798",
      "FPT": "1"
    },
    {
      "stt": "193",
      "name3": "Cột 5",
      "name1": "LỘ HÒA ĐÔNG TỪ CẦU HÒA LỌI...CẦU SẮT VĨ",
      "Lat": "10.264910",
      "Long": "105.363925",
      "FPT": "1"
    },
    {
      "stt": "194",
      "name3": "Cột 6",
      "name1": "LỘ HÒA ĐÔNG TỪ CẦU HÒA LỌI...CẦU SẮT VĨ",
      "Lat": "10271759",
      "Long": "105.365161",
      "FPT": "1"
    },
    {
      "stt": "195",
      "name3": "Cột 7",
      "name1": "LỘ HÒA ĐÔNG TỪ CẦU HÒA LỌI...CẦU SẮT VĨ",
      "Lat": "10.272745",
      "Long": "105.365235",
      "FPT": "1"
    },
    {
      "stt": "196",
      "name3": "Cột 8",
      "name1": "LỘ HÒA ĐÔNG TỪ CẦU HÒA LỌI...CẦU SẮT VĨ",
      "Lat": "10.275394",
      "Long": "105.365557",
      "FPT": "1"
    },
    {
      "stt": "197",
      "name3": "Cột 9",
      "name1": "LỘ HÒA ĐÔNG TỪ CẦU HÒA LỌI...CẦU SẮT VĨ",
      "Lat": "10.277092",
      "Long": "105.365696",
      "FPT": "1"
    },
    {
      "stt": "198",
      "name3": "Cột 10",
      "name1": "LỘ HÒA ĐÔNG TỪ CẦU HÒA LỌI...CẦU SẮT VĨ",
      "Lat": "10.271433",
      "Long": "105.375189",
      "FPT": "1"
    },
    {
      "stt": "199",
      "name3": "Cột 11",
      "name1": "LỘ HÒA ĐÔNG TỪ CẦU HÒA LỌI...CẦU SẮT VĨ",
      "Lat": "10.272124",
      "Long": "105.371310",
      "FPT": "1"
    },
    {
      "stt": "200",
      "name3": "Cột 12",
      "name1": "LỘ HÒA ĐÔNG TỪ CẦU HÒA LỌI...CẦU SẮT VĨ",
      "Lat": "10.22276",
      "Long": "105.371449",
      "FPT": "1"
    },
    {
      "stt": "201",
      "name3": "Cột 13",
      "name1": "LỘ HÒA ĐÔNG TỪ CẦU HÒA LỌI...CẦU SẮT VĨ",
      "Lat": "10.273440",
      "Long": "105.371539",
      "FPT": "1",
      "VTVCab": "1"
    },
    {
      "stt": "202",
      "name3": "Cột 1",
      "name1": "RẠCH BA KHÍA",
      "Lat": "10.270279",
      "Long": "105.374489",
      "VMS": "1"
    },
    {
      "stt": "203",
      "name3": "Cột 2",
      "name1": "RẠCH BA KHÍA",
      "Lat": "10.265813",
      "Long": "105.373934",
      "FPT": "1"
    },
    {
      "stt": "204",
      "name3": "Cột 3",
      "name1": "RẠCH BA KHÍA",
      "Lat": "10.449966",
      "Long": "105.629035",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "205",
      "name3": "Cột 1",
      "name1": "TRƯỜNG NGÔ THÌ NHẬM....LÒ TÀU HỦ ( CẦU MIẾU BÀ)",
      "Lat": "10.446018",
      "Long": "105.601482",
      "FPT": "1"
    },
    {
      "stt": "206",
      "name3": "Cột 2",
      "name1": "TRƯỜNG NGÔ THÌ NHẬM....LÒ TÀU HỦ ( CẦU MIẾU BÀ)",
      "Lat": "10.446356",
      "Long": "105.601390",
      "FPT": "1"
    },
    {
      "stt": "207",
      "name3": "Cột 1",
      "name1": "NGÃ TƯ TVH...TRƯỜNG NGUYỄN KHUYẾN",
      "Lat": "10.428809",
      "Long": "105.634577",
      "FPT": "1",
      "FPT_2": "1"
    },
    {
      "stt": "208",
      "name3": "Cột 2",
      "name1": "NGÃ TƯ TVH...TRƯỜNG NGUYỄN KHUYẾN",
      "Lat": "10.429528",
      "Long": "105.639331",
      "FPT": "1"
    },
    {
      "stt": "209",
      "name3": "Cột 3",
      "name1": "NGÃ TƯ TVH...TRƯỜNG NGUYỄN KHUYẾN",
      "Lat": "10.429682",
      "Long": "105.639961",
      "FPT": "1"
    },
    {
      "stt": "210",
      "name3": "Cột 4",
      "name1": "NGÃ TƯ TVH...TRƯỜNG NGUYỄN KHUYẾN",
      "Lat": "10.429912",
      "Long": "105.641168",
      "FPT": "1"
    },
    {
      "stt": "211",
      "name3": "Cột 1",
      "name1": "NGÃ TƯ TVH...BẾN ĐÒ AN NHƠN",
      "Lat": "10.428551",
      "Long": "105.631565",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "SCTV_2": "1",
      "VTVCab_2": "1"
    },
    {
      "stt": "212",
      "name3": "Cột 2",
      "name1": "NGÃ TƯ TVH...BẾN ĐÒ AN NHƠN",
      "Lat": "10.428363",
      "Long": "105.629741",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "213",
      "name3": "Cột 3",
      "name1": "NGÃ TƯ TVH...BẾN ĐÒ AN NHƠN",
      "Lat": "10.428210",
      "Long": "105.628928",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "214",
      "name3": "Cột 4",
      "name1": "NGÃ TƯ TVH...BẾN ĐÒ AN NHƠN",
      "Lat": "10.428141",
      "Long": "105.628611",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "215",
      "name1": "THIÊN HỘ DƯƠNG  TỪ  PHL...LỘ HÒA DÔNG",
      "Lat": "10.460419",
      "Long": "105.626358",
      "FPT": "1",
      "SCTV": "1"
    },
    {
      "stt": "216",
      "name3": "Cột 1",
      "name1": "CHÙA TRANG NGHIÊM...CẦU UBTT ",
      "Lat": "10.433978",
      "Long": "105.655126",
      "FPT": "1"
    },
    {
      "stt": "217",
      "name3": "Cột 2",
      "name1": "CHÙA TRANG NGHIÊM...CẦU UBTT ",
      "Lat": "10.434031",
      "Long": "105.655471",
      "FPT": "1"
    },
    {
      "stt": "218",
      "name3": "Cột 3",
      "name1": "CHÙA TRANG NGHIÊM...CẦU UBTT ",
      "Lat": "10.434141",
      "Long": "105.655965",
      "FPT": "1"
    },
    {
      "stt": "219",
      "name3": "Cột 4",
      "name1": "CHÙA TRANG NGHIÊM...CẦU UBTT ",
      "Lat": "10.434476",
      "Long": "105.657325",
      "FPT": "1"
    },
    {
      "stt": "220",
      "name3": "Cột 5",
      "name1": "CHÙA TRANG NGHIÊM...CẦU UBTT ",
      "Lat": "10.434573",
      "Long": "105.657824",
      "FPT": "1"
    },
    {
      "stt": "221",
      "name3": "Cột 1",
      "name1": "HUYỆN THANH QUAN  TỪ PHL...LỘ HÒA TÂY",
      "Lat": "10.44306",
      "Long": "105.6211",
      "FPT": "1",
      "FPT_2": "1"
    },
    {
      "stt": "222",
      "name3": "Cột 2",
      "name1": "HUYỆN THANH QUAN  TỪ PHL...LỘ HÒA TÂY",
      "Lat": "10.263840",
      "Long": "105.364875",
      "FPT": "1"
    },
    {
      "stt": "223",
      "name3": "Cột 3",
      "name1": "HUYỆN THANH QUAN  TỪ PHL...LỘ HÒA TÂY",
      "Lat": "10.264051",
      "Long": "105.363820",
      "FPT": "1",
      "SCTV": "1",
      "VMS": "1"
    },
    {
      "stt": "224",
      "name3": "Cột 4",
      "name1": "HUYỆN THANH QUAN  TỪ PHL...LỘ HÒA TÂY",
      "Lat": "10.44472",
      "Long": "105.6106",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "225",
      "name3": "Cột 5",
      "name1": "HUYỆN THANH QUAN  TỪ PHL...LỘ HÒA TÂY",
      "Lat": "10.44528",
      "Long": "105.6092",
      "FPT": "1",
      "SCTV": "1",
      "VMS": "1",
      "FPT_2": "1",
      "VMS_2": "1"
    },
    {
      "stt": "226",
      "name3": "Cột 1",
      "name1": "LỘ HÒA TÂY",
      "Lat": "10.44639",
      "Long": "105.6064",
      "SCTV": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "227",
      "name3": "Cột 2",
      "name1": "LỘ HÒA TÂY",
      "Lat": "10.44639",
      "Long": "105.6061",
      "FPT": "1",
      "SCTV": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "228",
      "name3": "Cột 3",
      "name1": "LỘ HÒA TÂY",
      "Lat": "10.44667",
      "Long": "105.6058",
      "SCTV": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "229",
      "name3": "Cột 4",
      "name1": "LỘ HÒA TÂY",
      "Lat": "10.44667",
      "Long": "105.6056",
      "FPT": "1",
      "SCTV": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "230",
      "name3": "Cột 5",
      "name1": "LỘ HÒA TÂY",
      "Lat": "10.46139",
      "Long": "105.5989",
      "FPT": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "231",
      "name3": "Cột 6",
      "name1": "LỘ HÒA TÂY",
      "Lat": "10.27073N",
      "Long": "105.355960",
      "FPT": "1"
    },
    {
      "stt": "232",
      "name3": "Cột 7",
      "name1": "LỘ HÒA TÂY",
      "Lat": "10.274052",
      "Long": "105.355630",
      "FPT": "1"
    },
    {
      "stt": "233",
      "name3": "Cột 1",
      "name1": "ĐƯỜNG NGUYỄN HƯƠNG ( TỪ TRẠI GÀ...PHÀ CAO LÃNH) ",
      "Lat": "10.417719",
      "Long": "105.641926",
      "FPT": "1"
    },
    {
      "stt": "234",
      "name3": "Cột 2",
      "name1": "ĐƯỜNG NGUYỄN HƯƠNG ( TỪ TRẠI GÀ...PHÀ CAO LÃNH) ",
      "Lat": "10.417427",
      "Long": "105.644309",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "FPT_2": "1",
      "SCTV_2": "1",
      "VTVCab_2": "1"
    },
    {
      "stt": "235",
      "name3": "Cột 1",
      "name1": "BÙI HỮU NGHĨA  ( TH.TRANG...LỘ HĐÔNG)",
      "Lat": "10.273421",
      "Long": "105.372540",
      "FPT": "1"
    },
    {
      "stt": "236",
      "name3": "Cột 2",
      "name1": "BÙI HỮU NGHĨA  ( TH.TRANG...LỘ HĐÔNG)",
      "Lat": "10.273293",
      "Long": "105.372429",
      "FPT": "1"
    },
    {
      "stt": "237",
      "name1": "BÙI HỮU NGHĨA  TỪ LỘ HÒA TÂY...LỘ HÒA ĐÔNG   ",
      "Lat": "10.45333",
      "Long": "105.6111",
      "FPT": "1",
      "FPT_2": "1"
    },
    {
      "stt": "238",
      "name3": "Cột 1",
      "name1": "ĐƯỜNG XÓM HẾN...TỔ 12...TỔ 15 K3F6",
      "Lat": "10.255052",
      "Long": "105.38492E",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "239",
      "name3": "Cột 2",
      "name1": "ĐƯỜNG XÓM HẾN...TỔ 12...TỔ 15 K3F7",
      "Lat": "10.255023",
      "Long": "105.384062",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "240",
      "name1": "CAO THẮNG...(PHL...NTH ) ",
      "Lat": "10.265977",
      "Long": "105.375700",
      "FPT": "1"
    },
    {
      "stt": "241",
      "name1": "NGUYỄN BỈNH KHIÊM...( TỪ NTH..NCT )",
      "Lat": "10.273303",
      "Long": "105.380552",
      "FPT": "1",
      "VTVCab": "1"
    },
    {
      "stt": "242",
      "name3": "Cột 1",
      "name1": "NGUYỄN THÁI HỌC  (  PHL...THẦY CƯ)",
      "Lat": "10.265542",
      "Long": "105.389024",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "243",
      "name3": "Cột 2",
      "name1": "NGUYỄN THÁI HỌC  (  PHL...THẦY CƯ)",
      "Lat": "10.44806",
      "Long": "105.6364",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "FPT_2": "1",
      "VTVCab_2": "1"
    },
    {
      "stt": "244",
      "name3": "Cột 3",
      "name1": "NGUYỄN THÁI HỌC  (  PHL...THẦY CƯ)",
      "Lat": "10.265216",
      "Long": "105.381236",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "245",
      "name3": "Cột 4",
      "name1": "NGUYỄN THÁI HỌC  (  PHL...THẦY CƯ)",
      "Lat": "10.264896",
      "Long": "105.381566",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "246",
      "name1": "TRẦN THỊ NHƯỢNG..NGUYỄN THỊ LỰU",
      "Lat": "10.451998",
      "Long": "105.630474",
      "SCTV": "1",
      "VTVCab": "1"
    },
    {
      "stt": "247",
      "name1": "NGUYỄN THỊ LƯU...( TỪ XẾP LÁ...CẦU NTL)",
      "Lat": "10.455425",
      "Long": "105.624860",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VTVCab_2": "1"
    },
    {
      "stt": "248",
      "name3": "Cột 1",
      "name1": "339 HUỲNH THÚC KHÁNG...CẦU SẮT VĨ",
      "Lat": "10.458299",
      "Long": "105.615828",
      "FPT": "1",
      "FPT_2": "1"
    },
    {
      "stt": "249",
      "name3": "Cột 2",
      "name1": "340 HUỲNH THÚC KHÁNG...CẦU SẮT VĨ",
      "Lat": "10.458436",
      "Long": "105.616172",
      "FPT": "1",
      "FPT_2": "1"
    },
    {
      "stt": "250",
      "name3": "Cột 3",
      "name1": "341 HUỲNH THÚC KHÁNG...CẦU SẮT VĨ",
      "Lat": "10.458353",
      "Long": "105.616631",
      "FPT": "1",
      "VTVCab": "1",
      "FPT_2": "1",
      "VTVCab_2": "1"
    },
    {
      "stt": "251",
      "name3": "Cột 4",
      "name1": "342 HUỲNH THÚC KHÁNG...CẦU SẮT VĨ",
      "Lat": "10.458420",
      "Long": "105.618378",
      "FPT": "1"
    },
    {
      "stt": "252",
      "name3": "Cột 5",
      "name1": "343 HUỲNH THÚC KHÁNG...CẦU SẮT VĨ",
      "Lat": "10.459262",
      "Long": "105.618695",
      "FPT": "1",
      "VTVCab": "1",
      "VTVCab_2": "1"
    },
    {
      "stt": "253",
      "name3": "Cột 6",
      "name1": "344 HUỲNH THÚC KHÁNG...CẦU SẮT VĨ",
      "Lat": "10.458717",
      "Long": "105.620630",
      "FPT": "1",
      "VTVCab": "1",
      "FPT_2": "1",
      "VTVCab_2": "1"
    },
    {
      "stt": "254",
      "name3": "Cột 1",
      "name1": "543 LÊ VĂN CỬ...XẾP LÁ",
      "Lat": "10.468437",
      "Long": "105.618189",
      "FPT": "1",
      "FPT_2": "1"
    },
    {
      "stt": "255",
      "name3": "Cột 2",
      "name1": "544 LÊ VĂN CỬ...XẾP LÁ",
      "Lat": "10.467358",
      "Long": "105.620352",
      "FPT": "1"
    },
    {
      "stt": "256",
      "name3": "Cột 3",
      "name1": "545 LÊ VĂN CỬ...XẾP LÁ",
      "Lat": "10.467035",
      "Long": "105.620755",
      "FPT": "1"
    },
    {
      "stt": "257",
      "name3": "Cột 1",
      "name1": "ĐƯỜNG DƯƠNG THỊ MỸ--N2B..( CẦU DÂN LẬP).HƯỚNG CẦU Ô MÔI",
      "Lat": "10.429143",
      "Long": "105.65686E",
      "FPT": "1"
    },
    {
      "stt": "258",
      "name3": "Cột 2",
      "name1": "ĐƯỜNG DƯƠNG THỊ MỸ--N2B..( CẦU DÂN LẬP).HƯỚNG CẦU Ô MÔI",
      "Lat": "10.427746",
      "Long": "105.657138",
      "FPT": "1"
    },
    {
      "stt": "259",
      "name3": "Cột 3",
      "name1": "ĐƯỜNG DƯƠNG THỊ MỸ--N2B..( CẦU DÂN LẬP).HƯỚNG CẦU Ô MÔI",
      "Lat": "10.426768",
      "Long": "105.657303",
      "FPT": "1"
    },
    {
      "stt": "260",
      "name3": "Cột 1",
      "name1": "CẦU DÂN LẬP...NR MẪN VI TÍNH",
      "Lat": "10.429094",
      "Long": "105.656576",
      "FPT": "1"
    },
    {
      "stt": "261",
      "name3": "Cột 2",
      "name1": "CẦU DÂN LẬP...NR MẪN VI TÍNH",
      "Lat": "10.429094",
      "Long": "105.656371",
      "FPT": "1"
    },
    {
      "stt": "262",
      "name3": "Cột 3",
      "name1": "CẦU DÂN LẬP...NR MẪN VI TÍNH",
      "Lat": "10.429141",
      "Long": "105.655271",
      "FPT": "1"
    },
    {
      "stt": "263",
      "name3": "Cột 4",
      "name1": "CẦU DÂN LẬP...NR MẪN VI TÍNH",
      "Lat": "10.429063",
      "Long": "105.654669",
      "FPT": "1"
    },
    {
      "stt": "264",
      "name3": "Cột 1",
      "name1": "ĐƯỜNG NGUYỄN THỊ TRÀ  ( UB..CHÙA THỚI LONG)",
      "Lat": "10.433593",
      "Long": "105.666573",
      "FPT": "1",
      "SCTV": "1"
    },
    {
      "stt": "265",
      "name3": "Cột 2",
      "name1": "ĐƯỜNG NGUYỄN THỊ TRÀ  ( UB..CHÙA THỚI LONG)",
      "Lat": "10.43247N",
      "Long": "105.66781E",
      "FPT": "1"
    },
    {
      "stt": "266",
      "name3": "Cột 3",
      "name1": "ĐƯỜNG NGUYỄN THỊ TRÀ  ( UB..CHÙA THỚI LONG)",
      "Lat": "10.424136",
      "Long": "105.676213",
      "FPT": "1"
    },
    {
      "stt": "267",
      "name3": "Cột 4",
      "name1": "ĐƯỜNG NGUYỄN THỊ TRÀ  ( UB..CHÙA THỚI LONG)",
      "Lat": "10.42744N",
      "Long": "105.673416",
      "FPT": "1"
    },
    {
      "stt": "268",
      "name3": "Cột 5",
      "name1": "ĐƯỜNG NGUYỄN THỊ TRÀ  ( UB..CHÙA THỚI LONG)",
      "Lat": "10.425561",
      "Long": "105.675011",
      "FPT": "1"
    },
    {
      "stt": "269",
      "name3": "Cột 6",
      "name1": "ĐƯỜNG NGUYỄN THỊ TRÀ  ( UB..CHÙA THỚI LONG)",
      "Lat": "10.428183",
      "Long": "105.677150",
      "FPT": "1"
    },
    {
      "stt": "270",
      "name3": "Cột 1",
      "name1": "ĐƯỜNG  CHỢ TÂN TICH ...KHU C ",
      "Lat": "10.4176N",
      "Long": "105.6451E",
      "FPT": "1"
    },
    {
      "stt": "271",
      "name3": "Cột 2",
      "name1": "ĐƯỜNG  CHỢ TÂN TICH ...KHU C ",
      "Lat": "10.4186N",
      "Long": "105.6453E",
      "FPT": "1",
      "FPT_2": "1"
    },
    {
      "stt": "272",
      "name3": "Cột 3",
      "name1": "ĐƯỜNG  CHỢ TÂN TICH ...KHU C ",
      "Lat": "10.4189N",
      "Long": "105.6453E",
      "FPT": "1",
      "FPT_2": "1"
    },
    {
      "stt": "273",
      "name1": "ĐƯỜNG TỪ BTS KHU C..   TỈNH ĐỘI...PHẠM HỮU LẦU",
      "Lat": "10.4233N",
      "Long": "105.6406E",
      "FPT": "1"
    },
    {
      "stt": "274",
      "name1": "CẦU SINGAPO...VƯỜN CHÔM CHÔM",
      "Lat": "10.425591",
      "Long": "105.681536",
      "FPT": "1"
    },
    {
      "stt": "275",
      "name1": "Đường rạch Bà Bướm",
      "Lat": "10,4731",
      "Long": "105,6067",
      "FPT": "1",
      "FPT_2": "1"
    },
    {
      "stt": "276",
      "name3": "Cột 1",
      "name1": "Đường  Nguyễn Hữu Kiến (Bến Đò Mỹ Hiệp - Lò rèn Hàng Me HT ) ",
      "Lat": "10,4835",
      "Long": "105,5832",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "277",
      "name3": "Cột 2",
      "name1": "Đường  Nguyễn Hữu Kiến (Bến Đò Mỹ Hiệp - Lò rèn Hàng Me HT ) ",
      "Lat": "10,4838",
      "Long": "105,5814",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "278",
      "name3": "Cột 3",
      "name1": "Đường  Nguyễn Hữu Kiến (Bến Đò Mỹ Hiệp - Lò rèn Hàng Me HT ) ",
      "Lat": "10,4836",
      "Long": "105,5832",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "279",
      "name3": "Cột 1",
      "name1": "Vào Trạm BTS Tân Thuận Tây ",
      "Lat": "10,4657",
      "Long": "105,5846",
      "SCTV": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "280",
      "name3": "Cột 2",
      "name1": "Vào Trạm BTS Tân Thuận Tây ",
      "Lat": "10,4661",
      "Long": "105,5846",
      "SCTV": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "281",
      "name3": "Cột 3",
      "name1": "Vào Trạm BTS Tân Thuận Tây ",
      "Lat": "10,4661",
      "Long": "105,5849",
      "SCTV": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "282",
      "name1": "Vào Trạm BTS Trần Quốc Toản Mới",
      "Lat": "10,4843",
      "Long": "105,5796",
      "SCTV": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "283",
      "name1": "Vào Trạm BTS Trần Quốc Toản Mới",
      "Lat": "10,4841",
      "Long": "105,5795",
      "SCTV": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "284",
      "name1": "Vào Trạm BTS Trần Quốc Toản Mới",
      "Lat": "10,4841",
      "Long": "105,5795",
      "SCTV": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "285",
      "name3": "Cột 1",
      "name1": "Kinh Củ Tô Châu - Đồn Biên Phòng",
      "Lat": "10,4974",
      "Long": "105,5686",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VMS": "1",
      "VTVCab_2": "1",
      "VMS_2": "1"
    },
    {
      "stt": "286",
      "name3": "Cột 2",
      "name1": "Kinh Củ Tô Châu - Đồn Biên Phòng",
      "Lat": "10,4956",
      "Long": "105,5699",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "287",
      "name3": "Cột 3",
      "name1": "Kinh Củ Tô Châu - Đồn Biên Phòng",
      "Lat": "10,4962",
      "Long": "105,5694",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "288",
      "name3": "Cột 1",
      "name1": "Cầu Trâu Trắng - Bình Thành TB ",
      "Lat": "10,5166",
      "Long": "105,5595",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VMS": "1",
      "VTVCab_2": "1",
      "VMS_2": "1"
    },
    {
      "stt": "289",
      "name3": "Cột 2",
      "name1": "Cầu Trâu Trắng - Bình Thành TB ",
      "Lat": "10,5172",
      "Long": "105,5596",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "290",
      "name3": "Cột 1",
      "name1": "QL 30 ( Cầu trâu Trắng - Kênh Củ Tô Châu)",
      "Lat": "10,5136",
      "Long": "105,5620",
      "FPT": "1"
    },
    {
      "stt": "291",
      "name3": "Cột 2",
      "name1": "QL 30 ( Cầu trâu Trắng - Kênh Củ Tô Châu)",
      "Lat": "10,5100",
      "Long": "105,5630",
      "FPT": "1"
    },
    {
      "stt": "292",
      "name3": "Cột 3",
      "name1": "QL 30 ( Cầu trâu Trắng - Kênh Củ Tô Châu)",
      "Lat": "10,5022",
      "Long": "105,5660",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VMS": "1",
      "VTVCab_2": "1",
      "VMS_2": "1"
    },
    {
      "stt": "293",
      "name3": "Cột 1",
      "name1": "Đường 30 tháng 4 (Siêu Thị VinaFood - Cầu Kênh Cụt)",
      "Lat": "10.272371",
      "Long": "105.375866",
      "VMS": "1"
    },
    {
      "stt": "294",
      "name3": "Cột 2",
      "name1": "Đường 30 tháng 4 (Siêu Thị VinaFood - Cầu Kênh Cụt)",
      "Lat": "10.272949",
      "Long": "105.375524",
      "FPT": "1",
      "VMS": "1"
    },
    {
      "stt": "295",
      "name3": "Cột 3",
      "name1": "Đường 30 tháng 4 (Siêu Thị VinaFood - Cầu Kênh Cụt)",
      "Lat": "10.272615",
      "Long": "105.375102",
      "FPT": "1",
      "VMS": "1"
    },
    {
      "stt": "296",
      "name3": "Cột 4",
      "name1": "Đường 30 tháng 4 (Siêu Thị VinaFood - Cầu Kênh Cụt)",
      "Lat": "10.273615",
      "Long": "105.375102",
      "FPT": "1",
      "VMS": "1"
    },
    {
      "stt": "297",
      "name3": "Cột 5",
      "name1": "Đường 30 tháng 4 (Siêu Thị VinaFood - Cầu Kênh Cụt)",
      "Lat": "10.275170",
      "Long": "105.374256",
      "FPT": "1",
      "SCTV": "1",
      "VMS": "1",
      "SCTV_2": "1"
    },
    {
      "stt": "298",
      "name3": "Cột 1",
      "name1": "Đường Nguyễn Quang Diêu",
      "Lat": "10.4625",
      "Long": "105.6324",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VMS": "1"
    },
    {
      "stt": "299",
      "name3": "Cột 2",
      "name1": "Đường Nguyễn Quang Diêu",
      "Lat": "10.4626",
      "Long": "105.6327",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VMS": "1",
      "VTVCab_2": "1"
    },
    {
      "stt": "300",
      "name3": "Cột 3",
      "name1": "Đường Nguyễn Quang Diêu",
      "Lat": "10.4623",
      "Long": "105.6321",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VMS": "1"
    },
    {
      "stt": "301",
      "name3": "Cột 4",
      "name1": "Đường Nguyễn Quang Diêu",
      "Lat": "10.4623",
      "Long": "105.6321",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VMS": "1"
    },
    {
      "stt": "302",
      "name3": "Cột 5",
      "name1": "Đường Nguyễn Quang Diêu",
      "Lat": "10.4616",
      "Long": "105.6309",
      "FPT": "1",
      "VTVCab": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "303",
      "name3": "Cột 6",
      "name1": "Đường Nguyễn Quang Diêu",
      "Lat": "10.4628",
      "Long": "105.6318",
      "FPT": "1",
      "VTVCab": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "304",
      "name3": "Cột 1",
      "name1": "Đường Đặng Văn Bình",
      "Lat": "10.4644",
      "Long": "105.6373",
      "FPT": "1",
      "VTVCab": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "305",
      "name3": "Cột 2",
      "name1": "Đường Đặng Văn Bình",
      "Lat": "10.4654",
      "Long": "105.6387",
      "FPT": "1",
      "VTVCab": "1",
      "VMS": "1",
      "VTVCab_2": "1"
    },
    {
      "stt": "306",
      "name3": "Cột 3",
      "name1": "Đường Đặng Văn Bình",
      "Lat": "10.4647",
      "Long": "105.6377",
      "FPT": "1",
      "VTVCab": "1",
      "VMS": "1"
    },
    {
      "stt": "307",
      "name3": "Cột 4",
      "name1": "Đường Đặng Văn Bình",
      "Lat": "10.4641",
      "Long": "105.6369",
      "FPT": "1",
      "VTVCab": "1",
      "VMS": "1"
    },
    {
      "stt": "308",
      "name3": "Cột 1",
      "name1": "Đường Nguyễn Văn Bảnh",
      "Lat": "10.4668",
      "Long": "105.6279",
      "FPT": "1",
      "SCTV": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "309",
      "name3": "Cột 2",
      "name1": "Đường Nguyễn Văn Bảnh",
      "Lat": "10.4666",
      "Long": "105.6278",
      "FPT": "1",
      "SCTV": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "310",
      "name3": "Cột 3",
      "name1": "Đường Nguyễn Văn Bảnh",
      "Lat": "10.4663",
      "Long": "105.6275",
      "FPT": "1",
      "SCTV": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "311",
      "name3": "Cột 4",
      "name1": "Đường Nguyễn Văn Bảnh",
      "Lat": "10.4666",
      "Long": "105.6278",
      "FPT": "1",
      "SCTV": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "312",
      "name3": "Cột 1",
      "name1": "Đường Nguyễn Thị Minh Khai",
      "Lat": "10.4653",
      "Long": "105.6300",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VMS": "1",
      "SCTV_2": "1",
      "VMS_2": "1"
    },
    {
      "stt": "313",
      "name3": "Cột 2",
      "name1": "Đường Nguyễn Thị Minh Khai",
      "Lat": "10.4670",
      "Long": "105.6282",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "314",
      "name3": "Cột 3",
      "name1": "Đường Nguyễn Thị Minh Khai",
      "Lat": "10.4679",
      "Long": "105.6271",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "315",
      "name1": "Đường Trần Phú",
      "Lat": "10.4662",
      "Long": "105.6317",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VMS": "1"
    },
    {
      "stt": "316",
      "name3": "Cột 1",
      "name1": "Đường Trần Phú",
      "Lat": "10.4684",
      "Long": "105.6282",
      "SCTV": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "317",
      "name3": "Cột 2",
      "name1": "Đường Trần Phú",
      "Lat": "10.4682",
      "Long": "105.6284",
      "FPT": "1",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "318",
      "name3": "Cột 3",
      "name1": "Đường Trần Phú",
      "Lat": "10.4677",
      "Long": "105.6293",
      "FPT": "1",
      "VTVCab": "1",
      "VMS": "1",
      "VTVCab_2": "1"
    },
    {
      "stt": "319",
      "name3": "Cột 4",
      "name1": "Đường Trần Phú",
      "Lat": "10.4674",
      "Long": "105.6302",
      "FPT": "1",
      "VTVCab": "1",
      "VMS": "1",
      "FPT_2": "1",
      "VTVCab_2": "1"
    },
    {
      "stt": "320",
      "name3": "Cột 5",
      "name1": "Đường Trần Phú",
      "Lat": "10.4684",
      "Long": "105.6312",
      "FPT": "1"
    },
    {
      "stt": "321",
      "name3": "Cột 6",
      "name1": "Đường Trần Phú",
      "Lat": "10.4689",
      "Long": "105.6318",
      "FPT": "1"
    },
    {
      "stt": "322",
      "name3": "Cột 7",
      "name1": "Đường Trần Phú",
      "Lat": "10.4687",
      "Long": "105.6316",
      "FPT": "1"
    },
    {
      "stt": "323",
      "name3": "Cột 8",
      "name1": "Đường Trần Phú",
      "Lat": "10.4691",
      "Long": "105.6321",
      "FPT": "1"
    },
    {
      "stt": "324",
      "name3": "Cột 9",
      "name1": "Đường Trần Phú",
      "Lat": "10.4693",
      "Long": "105.6324",
      "FPT": "1"
    },
    {
      "stt": "325",
      "name3": "Cột 10",
      "name1": "Đường Trần Phú",
      "Lat": "10.4695",
      "Long": "105.6327",
      "FPT": "1"
    },
    {
      "stt": "326",
      "name3": "Cột 11",
      "name1": "Đường Trần Phú",
      "Lat": "10.4698",
      "Long": "105.6330",
      "FPT": "1"
    },
    {
      "stt": "327",
      "name3": "Cột 12",
      "name1": "Đường Trần Phú",
      "Lat": "10.4702",
      "Long": "105.6336",
      "FPT": "1"
    },
    {
      "stt": "328",
      "name3": "Cột 13",
      "name1": "Đường Trần Phú",
      "Lat": "10.4700",
      "Long": "105.6333",
      "FPT": "1"
    },
    {
      "stt": "329",
      "name3": "Cột 14",
      "name1": "Đường Trần Phú",
      "Lat": "10.4704",
      "Long": "105.6340",
      "FPT": "1"
    },
    {
      "stt": "330",
      "name3": "Cột 15",
      "name1": "Đường Trần Phú",
      "Lat": "10.4706",
      "Long": "105.6344",
      "FPT": "1"
    },
    {
      "stt": "331",
      "name3": "Cột 16",
      "name1": "Đường Trần Phú",
      "Lat": "10.4707",
      "Long": "105.6356",
      "FPT": "1",
      "FPT_2": "1"
    },
    {
      "stt": "332",
      "name3": "Cột 17",
      "name1": "Đường Trần Phú",
      "Lat": "10.4700",
      "Long": "105.6363",
      "FPT": "1",
      "VTVCab": "1",
      "VTVCab_2": "1"
    },
    {
      "stt": "333",
      "name3": "Cột 18",
      "name1": "Đường Trần Phú",
      "Lat": "10.4691",
      "Long": "105.6370",
      "FPT": "1"
    },
    {
      "stt": "334",
      "name3": "Cột 19",
      "name1": "Đường Trần Phú",
      "Lat": "10.4691",
      "Long": "105.6370",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VMS": "1",
      "VTVCab_2": "1"
    },
    {
      "stt": "335",
      "name3": "Cột 20",
      "name1": "Đường Trần Phú",
      "Lat": "10.4685",
      "Long": "105.6374",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VMS": "1",
      "FPT_2": "1",
      "VTVCab_2": "1"
    },
    {
      "stt": "336",
      "name3": "Cột 21",
      "name1": "Đường Trần Phú",
      "Lat": "10.4688",
      "Long": "105.6372",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VMS": "1"
    },
    {
      "stt": "337",
      "name3": "Cột 22",
      "name1": "Đường Trần Phú",
      "Lat": "10.4681",
      "Long": "105.6378",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VMS": "1",
      "VTVCab_2": "1"
    },
    {
      "stt": "338",
      "name3": "Cột 23",
      "name1": "Đường Trần Phú",
      "Lat": "10.4676",
      "Long": "105.6382",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VMS": "1"
    },
    {
      "stt": "339",
      "name3": "Cột 1",
      "name1": "Đường Lê Thị Riêng",
      "Lat": "10.4680",
      "Long": "105.6342",
      "FPT": "1"
    },
    {
      "stt": "340",
      "name3": "Cột 2",
      "name1": "Đường Lê Thị Riêng",
      "Lat": "10.4684",
      "Long": "105.6349",
      "FPT": "1"
    },
    {
      "stt": "341",
      "name3": "Cột 1",
      "name1": "Đường Ngô Thời Nhậm",
      "Lat": "10.4676",
      "Long": "105.6344",
      "FPT": "1"
    },
    {
      "stt": "342",
      "name3": "Cột 2",
      "name1": "Đường Ngô Thời Nhậm",
      "Lat": "10.4676",
      "Long": "105.6345",
      "FPT": "1"
    },
    {
      "stt": "343",
      "name3": "Cột 3",
      "name1": "Đường Ngô Thời Nhậm",
      "Lat": "10.4672",
      "Long": "105.6346",
      "FPT": "1"
    },
    {
      "stt": "344",
      "name3": "Cột 1",
      "name1": "Đường Tôn Đức Thắng",
      "Lat": "10.4673",
      "Long": "105.6378",
      "FPT": "1",
      "SCTV": "1",
      "VTVCab": "1",
      "VMS": "1"
    },
    {
      "stt": "345",
      "name3": "Cột 1",
      "name1": "Võ Trường Toản",
      "Lat": "10.274388",
      "Long": "105.381768",
      "FPT": "1",
      "SCTV": "1",
      "SCTV_2": "1"
    },
    {
      "stt": "346",
      "name3": "Cột 1",
      "name1": "Trương Định",
      "Lat": "10.272862",
      "Long": "105.389198",
      "FPT": "1"
    },
    {
      "stt": "347",
      "name3": "Cột 1",
      "name1": "Chợ Bà Học",
      "Lat": "10.48840",
      "Long": "105.61954",
      "SCTV": "1",
      "SCTV_2": "1"
    },
    {
      "stt": "348",
      "name3": "Cột 2",
      "name1": "Chợ Bà Học",
      "Lat": "10.48867",
      "Long": "105.61923",
      "SCTV": "1",
      "SCTV_2": "1"
    },
    {
      "stt": "349",
      "name3": "Cột 3",
      "name1": "Chợ Bà Học",
      "Lat": "10.48876",
      "Long": "105.61949",
      "SCTV": "1",
      "SCTV_2": "1"
    },
    {
      "stt": "350",
      "name1": "Đường Đinh Bộ Lĩnh",
      "Lat": "10.451039",
      "Long": "105.630038",
      "VTVCab": "1",
      "VTVCab_2": "1"
    },
    {
      "stt": "351",
      "name1": "Phạm Hữu Lầu (góc ngã tư TVH hướng về cầu cao lãnh)",
      "Lat": "10.428783",
      "Long": "105.634511",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "352",
      "name3": "Cột 1",
      "name1": "Nguyễn Hữu Kiến",
      "Lat": "10.48437",
      "Long": "105.5835",
      "VTVCab": "1",
      "VMS_2": "1"
    },
    {
      "stt": "353",
      "name3": "Cột 2",
      "name1": "Nguyễn Hữu Kiến",
      "Lat": "10.48357",
      "Long": "105.58082",
      "VTVCab": "1",
      "VTVCab_2": "1",
      "VMS_2": "1"
    },
    {
      "stt": "354",
      "name3": "Cột 1",
      "name1": "Quốc lộ 30 ( Ngã tư Nguyễn Chí Thanh - Cây Xăng Bình Thành )",
      "Lat": "10.48495",
      "Long": "105.58360",
      "VTVCab": "1",
      "VTVCab_2": "1",
      "VMS_2": "1"
    },
    {
      "stt": "355",
      "name3": "Cột 2",
      "name1": "Quốc lộ 30 ( Ngã tư Nguyễn Chí Thanh - Cây Xăng Bình Thành )",
      "Lat": "10.48513",
      "Long": "105.5827",
      "VTVCab": "1",
      "VTVCab_2": "1",
      "VMS_2": "1"
    },
    {
      "stt": "356",
      "name3": "Cột 3",
      "name1": "Quốc lộ 30 ( Ngã tư Nguyễn Chí Thanh - Cây Xăng Bình Thành )",
      "Lat": "10.48843",
      "Long": "105.5765",
      "VTVCab": "1",
      "VMS_2": "1"
    },
    {
      "stt": "357",
      "name3": "Cột 4",
      "name1": "Quốc lộ 30 ( Ngã tư Nguyễn Chí Thanh - Cây Xăng Bình Thành )",
      "Lat": "10.49395",
      "Long": "105.57090",
      "VTVCab": "1",
      "VMS_2": "1"
    },
    {
      "stt": "358",
      "name3": "Cột 5",
      "name1": "Quốc lộ 30 ( Ngã tư Nguyễn Chí Thanh - Cây Xăng Bình Thành )",
      "Lat": "10.49487",
      "Long": "105.57028",
      "VTVCab": "1",
      "VMS_2": "1"
    },
    {
      "stt": "359",
      "name3": "Cột 6",
      "name1": "Quốc lộ 30 ( Ngã tư Nguyễn Chí Thanh - Cây Xăng Bình Thành )",
      "Lat": "10.49595",
      "Long": "105.56963",
      "VTVCab": "1",
      "VTVCab_2": "1",
      "VMS_2": "1"
    },
    {
      "stt": "360",
      "name3": "Cột 7",
      "name1": "Quốc lộ 30 ( Ngã tư Nguyễn Chí Thanh - Cây Xăng Bình Thành )",
      "Lat": "10.49628",
      "Long": "105.56925",
      "VTVCab": "1"
    },
    {
      "stt": "361",
      "name3": "Cột 8",
      "name1": "Quốc lộ 30 ( Ngã tư Nguyễn Chí Thanh - Cây Xăng Bình Thành )",
      "Lat": "10.49743",
      "Long": "105.56863",
      "VTVCab": "1"
    },
    {
      "stt": "362",
      "name3": "Cột 9",
      "name1": "Quốc lộ 30 ( Ngã tư Nguyễn Chí Thanh - Cây Xăng Bình Thành )",
      "Lat": "10.5022",
      "Long": "105.56615",
      "VTVCab": "1",
      "VTVCab_2": "1"
    },
    {
      "stt": "363",
      "name3": "Cột 10",
      "name1": "Quốc lộ 30 ( Ngã tư Nguyễn Chí Thanh - Cây Xăng Bình Thành )",
      "Lat": "10.52",
      "Long": "105.55930",
      "VTVCab": "1",
      "VTVCab_2": "1"
    },
    {
      "stt": "364",
      "name3": "Cột 11",
      "name1": "Quốc lộ 30 ( Ngã tư Nguyễn Chí Thanh - Cây Xăng Bình Thành )",
      "Lat": "10.51872",
      "Long": "105.55668",
      "VTVCab": "1",
      "VMS_2": "1"
    },
    {
      "stt": "365",
      "name3": "Cột 12",
      "name1": "Quốc lộ 30 ( Ngã tư Nguyễn Chí Thanh - Cây Xăng Bình Thành )",
      "Lat": "10.51885",
      "Long": "105.5565",
      "VTVCab": "1",
      "VMS_2": "1"
    },
    {
      "stt": "366",
      "name3": "Cột 13",
      "name1": "Quốc lộ 30 ( Ngã tư Nguyễn Chí Thanh - Cây Xăng Bình Thành )",
      "Lat": "10.51915",
      "Long": "105.55623",
      "VTVCab": "1",
      "VMS_2": "1"
    },
    {
      "stt": "367",
      "name3": "Cột 14",
      "name1": "Quốc lộ 30 ( Ngã tư Nguyễn Chí Thanh - Cây Xăng Bình Thành )",
      "Lat": "10.51945",
      "Long": "105.55595",
      "VTVCab": "1",
      "VMS_2": "1"
    },
    {
      "stt": "368",
      "name3": "Cột 15",
      "name1": "Quốc lộ 30 ( Ngã tư Nguyễn Chí Thanh - Cây Xăng Bình Thành )",
      "Lat": "10.52037",
      "Long": "105.55510",
      "VTVCab": "1",
      "VTVCab_2": "1",
      "VMS_2": "1"
    },
    {
      "stt": "369",
      "name3": "Cột 16",
      "name1": "Quốc lộ 30 ( Ngã tư Nguyễn Chí Thanh - Cây Xăng Bình Thành )",
      "Lat": "10.52057",
      "Long": "105.55490",
      "VTVCab": "1",
      "VMS_2": "1"
    },
    {
      "stt": "370",
      "name3": "Cột 1",
      "name1": "Cầu Nguyễn Chí Thanh TTT( NR Khánh)",
      "Lat": "10.4836",
      "Long": "105.5832",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "371",
      "name3": "Cột 2",
      "name1": "Cầu Nguyễn Chí Thanh TTT( NR Khánh)",
      "Lat": "10.4838",
      "Long": "105.5833",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "372",
      "name3": "Cột 3",
      "name1": "Cầu Nguyễn Chí Thanh TTT( NR Khánh)",
      "Lat": "10.4844",
      "Long": "105.5835",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "373",
      "name3": "Cột 4",
      "name1": "Cầu Nguyễn Chí Thanh TTT( NR Khánh)",
      "Lat": "10.4847",
      "Long": "105.5836",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "374",
      "name3": "Cột 1",
      "name1": "DT846 (Ấp 4 PM)",
      "Lat": "10.532391",
      "Long": "105.597616",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "375",
      "name3": "Cột 2",
      "name1": "DT846 (Ấp 4 PM)",
      "Lat": "10.532344",
      "Long": "105.597802",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "376",
      "name3": "Cột 3",
      "name1": "DT846 (Ấp 4 PM)",
      "Lat": "10.532754",
      "Long": "105.597845",
      "VMS": "1",
      "VMS_2": "1"
    },
    {
      "stt": "377",
      "name3": "Cột 1",
      "name1": "Đường Nguyễn Hương",
      "Lat": "10.4150",
      "Long": "105.6688",
      "FPT": "1",
      "FPT_2": "1"
    },
    {
      "stt": "378",
      "name3": "Cột 2",
      "name1": "Đường Nguyễn Hương",
      "Lat": "10.4166",
      "Long": "105.6621",
      "FPT": "1",
      "FPT_2": "1"
    }
  ];
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
            onClick={() => {
              console.log(row);setOpen2(true)}}
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

export default function OrderTable() {
  const [order, setOrder] = React.useState<Order>('desc');
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [open, setOpen] = React.useState(false);

  const renderFilters = () => (
    <React.Fragment>
      <FormControl size="sm">
        <FormLabel>Status</FormLabel>
        <Select
          size="sm"
          placeholder="Filter by status"
          slotProps={{ button: { sx: { whiteSpace: 'nowrap' } } }}
        >
          <Option value="paid">Paid</Option>
          <Option value="pending">Pending</Option>
          <Option value="refunded">Refunded</Option>
          <Option value="cancelled">Cancelled</Option>
        </Select>
      </FormControl>

      <FormControl size="sm">
        <FormLabel>Category</FormLabel>
        <Select size="sm" placeholder="All">
          <Option value="all">All</Option>
          <Option value="refund">Refund</Option>
          <Option value="purchase">Purchase</Option>
          <Option value="debit">Debit</Option>
        </Select>
      </FormControl>

      <FormControl size="sm">
        <FormLabel>Customer</FormLabel>
        <Select size="sm" placeholder="All">
          <Option value="all">All</Option>
          <Option value="olivia">Olivia Rhye</Option>
          <Option value="steve">Steve Hampton</Option>
          <Option value="ciaran">Ciaran Murray</Option>
          <Option value="marina">Marina Macdonald</Option>
          <Option value="charles">Charles Fulton</Option>
          <Option value="jay">Jay Hoper</Option>
        </Select>
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
        <Input
          size="sm"
          placeholder="Search"
          startDecorator={<SearchIcon />}
          sx={{ flexGrow: 1 }}
        />
        <IconButton
          size="sm"
          variant="outlined"
          color="neutral"
          onClick={() => setOpen(true)}
        >
          <FilterAltIcon />
        </IconButton>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog aria-labelledby="filter-modal" layout="center">
            <ModalClose />
            <Typography id="filter-modal" level="h2">
              Filters
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Sheet sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {renderFilters()}
              <Button color="primary" onClick={() => setOpen(false)}>
                Submit
              </Button>
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
          <Input size="sm" placeholder="Search" startDecorator={<SearchIcon />} />
        </FormControl>
        {renderFilters()}
      </Box>
      <Sheet
        className="OrderTableContainer"
        variant="outlined"
        sx={{
          display: { xs: 'none', sm: 'initial' },
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
                    selected.length > 0 && selected.length !== rows2.length
                  }
                  checked={selected.length === rows2.length}
                  onChange={(event) => {
                    setSelected(
                      event.target.checked ? rows2.map((row) => row.stt) : [],
                    );
                  }}
                  color={
                    selected.length > 0 || selected.length === rows2.length
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
              <th style={{ width: 100, padding: '12px 6px' }}>Lat</th>
              <th style={{ width: 100, padding: '12px 6px' }}>Long</th>
              <th style={{ width: 50, padding: '12px 6px' }}>FPT</th>
              <th style={{ width: 50, padding: '12px 6px' }}>SCTV</th>
              <th style={{ width: 50, padding: '12px 6px' }}>VTVCab</th>
              <th style={{ width: 50, padding: '12px 6px' }}>VMS</th>
              <th style={{ width: 140, padding: '12px 6px' }}> </th>
            </tr>
          </thead>
          <tbody>
            {stableSort(rows2, getComparator(order, 'stt')).map((row) => (
              <tr key={row.stt}>
                <td style={{ textAlign: 'center', width: 120 }}>
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
                    slotProps={{ checkbox: { sx: { textAlign: 'left' } } }}
                    sx={{ verticalAlign: 'text-bottom' }}
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
                  <Typography level="body-xs">{row.Lat}</Typography>
                </td>
                <td>
                  <Typography level="body-xs">{row.Long}</Typography>
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
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <RowMenu row={row}/>
                  </Box>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
      <Box
        className="Pagination-laptopUp"
        sx={{
          pt: 2,
          gap: 1,
          [`& .${iconButtonClasses.root}`]: { borderRadius: '50%' },
          display: {
            xs: 'none',
            md: 'flex',
          },
        }}
      >
        <Button
          size="sm"
          variant="outlined"
          color="neutral"
          startDecorator={<KeyboardArrowLeftIcon />}
        >
          Previous
        </Button>

        <Box sx={{ flex: 1 }} />
        {['1', '2', '3', '…', '8', '9', '10'].map((page) => (
          <IconButton
            key={page}
            size="sm"
            variant={Number(page) ? 'outlined' : 'plain'}
            color="neutral"
          >
            {page}
          </IconButton>
        ))}
        <Box sx={{ flex: 1 }} />

        <Button
          size="sm"
          variant="outlined"
          color="neutral"
          endDecorator={<KeyboardArrowRightIcon />}
        >
          Next
        </Button>
      </Box>
    </React.Fragment>
  );
}
