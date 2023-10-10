
'use client'
import Leaflet from 'leaflet';

// @ts-ignore
const LeafletIcon = (Donvi)=> {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const iconData = {
            CLA: 'marker-icon-2x.png',
            HCL: 'green-marker-icon-2x.png',
            TMU: 'mint-marker-icon-2x.png',
            TBI: 'orange-marker-icon-2x.png',
            SDE: 'purple-marker-icon-2x.png',
            THO: 'yellow-marker-icon-2x.png',
            CTH: 'lemon-marker-icon-2x.png',
            LVU: 'gem-marker-icon-2x.png',
            HNG: 'pink-marker-icon-2x.png',
            HNU: 'gem-marker-icon-2x.png',
            TNO: 'blue-marker-icon-2x.png',
            LVO: 'red-marker-icon-2x.png',
            default: 'marker-icon-2x.png',
        };
        const defaultIconOptions = {
            iconRetinaUrl: `leaflet/images/${iconData.default}`,
            iconUrl: 'leaflet/images/marker-icon.png',
            shadowUrl: 'leaflet/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowSize: [41, 41],
        };
        // @ts-ignore
        const iconUrl = `leaflet/images/${iconData[Donvi] || iconData.default}`;

        // @ts-ignore
        const LeafletIcon = Leaflet.icon({
            ...defaultIconOptions,
            iconRetinaUrl: iconUrl,
        });
        return LeafletIcon;
    }
}


export default LeafletIcon
