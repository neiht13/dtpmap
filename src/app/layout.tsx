import * as React from 'react';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import Head from "next/head";
import './global.css'
import {SessionProvider} from "next-auth/react";
import {NextAuthProvider} from "@/app/providers";
import {Metadata} from "next";
import {Suspense} from "react";


const APP_NAME = "DTPMaps"
const APP_DEFAULT_TITLE = "DTPMaps"
const APP_TITLE_TEMPLATE = "DTPMaps"
const APP_DESCRIPTION = "DTPMaps"
export const metadata: Metadata = {
    applicationName: APP_NAME,
    title: {
        default: APP_DEFAULT_TITLE,
        template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    manifest: "/site.webmanifest",
    themeColor: "#ff6347",
    appleWebApp: {
        capable: true,
        statusBarStyle: "default",
        title: APP_DEFAULT_TITLE,
        // startUpImage: [],
    },
    formatDetection: {
        telephone: false,
    },
    openGraph: {
        type: "website",
        siteName: APP_NAME,
        title: {
            default: APP_DEFAULT_TITLE,
            template: APP_TITLE_TEMPLATE,
        },
        description: APP_DESCRIPTION,
    },
    twitter: {
        card: "summary",
        title: {
            default: APP_DEFAULT_TITLE,
            template: APP_TITLE_TEMPLATE,
        },
        description: APP_DESCRIPTION,
    }
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
