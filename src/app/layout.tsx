'use client'
import * as React from 'react';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import './global.css'
import {NextAuthProvider} from "@/app/providers";
import {Suspense} from "react";
import Head from "next/head";


export default function RootLayout({children}: { children: React.ReactNode }) {


    return (
        <html lang="en">
        <head>
            <title>DTPMaps App</title>
            <meta name="application-name" content="DTPMaps App" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content="DTPMaps App" />
            <meta name="description" content="Best PWA App in the world" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="msapplication-config" content="/icons/browserconfig.xml" />
            <meta name="msapplication-TileColor" content="#ff6347" />
            <meta name="msapplication-tap-highlight" content="no" />
            <meta name="theme-color" content="#ff6347" />

            <link rel="apple-touch-icon" href="/vnpt_logo.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/vnpt_logo.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/vnpt_logo.png" />
            <link rel="apple-touch-icon" sizes="167x167" href="/vnpt_logo.png" />

            <link rel="icon" type="image/png" sizes="32x32" href="/vnpt_logo.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/vnpt_logo.png" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="mask-icon" href="/vnpt_logo.png" color="#ff6347" />
            <link rel="shortcut icon" href="/vnpt_logo.ico" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="DTPMaps App" />
            <meta property="og:description" content="Best PWA App in the world" />
            <meta property="og:site_name" content="DTPMaps App" />
            <meta property="og:url" content="https://dtpmap.vercel.app" />
            <meta property="og:image" content="https://dtpmap.vercel.app/icons/apple-touch-icon.png" />
            <meta
                name='viewport'
                content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
            />
        </head>
        <body>

            <Suspense>
            <NextAuthProvider>
                <ThemeRegistry>{children}</ThemeRegistry>
            </NextAuthProvider>
            </Suspense>
        </body>

        </html>
    );
}
