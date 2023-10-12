'use client';


import * as React from 'react';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Sheet from '@mui/joy/Sheet';
import IconButton from '@mui/joy/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import ColorSchemeToggle from '@/components/ColorSchemeToggle';
import { toggleSidebar } from '@/components/utils';
import Box from "@mui/joy/Box";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Link from "@mui/joy/Link";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// @ts-ignore
const Header = ({location, children}) => {
  return (
      <>
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
                  <Typography color="primary" fontWeight={500} fontSize={12}>
                      {location}
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
                  flexDirection: { xs: 'row', sm: 'row' },
                  alignItems: { xs: 'start', sm: 'center' },
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
              }}
          >
              <Typography level="h2">{location}</Typography>
              {children}
          </Box>
    <Sheet
      sx={{
        display: { xs: 'flex', md: 'none' },
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: 'var(--Header-height)',
        zIndex: 9995,
        p: 2,
        gap: 1,
        borderBottom: '1px solid',
        borderColor: 'background.level1',
        boxShadow: 'sm',
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ':root': {
            '--Header-height': '52px',
            [theme.breakpoints.up('md')]: {
              '--Header-height': '0px',
            },
          },
        })}
      />
      <IconButton
        onClick={() => toggleSidebar()}
        variant="outlined"
        color="neutral"
        size="sm"
      >
        <MenuIcon />
      </IconButton>
      <ColorSchemeToggle id={undefined} />

    </Sheet>
          <ToastContainer />
      </>
  );
}
export default Header;

export const toastRender = (style: string) =>{
    if (style === "error") {
        toast.error('Sai email hoặc mật khẩu!');
    } else if (style === "success")  {
        toast.success('Đăng nhập thành công');
    }
}
