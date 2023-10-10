'use client';

import dynamic from 'next/dynamic';
import LeafletIcon from "@/app/3g/LeafletIcon";


// Set default sizing to control aspect ratio which will scale responsively
// but also help avoid layout shift

const DEFAULT_WIDTH = 600;
const DEFAULT_HEIGHT = 600;

// @ts-ignore
const Icon = (props) => {
    const { Donvi } = props;
    // @ts-ignore
    return LeafletIcon(Donvi)
}

export default Icon;