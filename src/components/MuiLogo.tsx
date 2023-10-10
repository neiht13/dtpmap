'use client';


import * as React from 'react';
import AspectRatio, { AspectRatioProps } from '@mui/joy/AspectRatio';
import Image from "next/image";

export default function MuiLogo({ sx, ...props }: AspectRatioProps) {
  return (
    <AspectRatio
      ratio="1"
      variant="plain"
      {...props}
      sx={[
        {
          width: 36,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <div>
        <Image src={'/vnpt_logo.png'} alt={'logo'} width={24} height={24}/>
      </div>
    </AspectRatio>
  );
}
