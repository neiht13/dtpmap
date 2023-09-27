import * as React from 'react';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import Head from "next/head";
import './global.css'
import {SessionProvider} from "next-auth/react";
import {NextAuthProvider} from "@/app/providers";
import {Metadata} from "next";
import {Suspense} from "react";

export const metadata: Metadata = {
    title: 'DTPMaps',
    description: 'DTPMaps',
    manifest: "/site.webmanifest",
};

export default function RootLayout({children}: { children: React.ReactNode }) {

    return (
        <html lang="en">
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
