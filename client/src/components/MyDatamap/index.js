import React, {useRef, useEffect} from 'react'
import DataMap from 'datamaps/dist/datamaps.world';
export default function MyDataMap() {
    const mapRef = useRef(null);
    useEffect(() => {
        if (!mapRef.current) return;
        const map = new DataMap({
            element: mapRef.current,
            done: (datamap) => {
                console.log(datamap);
                datamap.svg.selectAll('.datamaps-subunit').on('click', (properties) => {
                    console.log(properties);
                })
            }
        })
    }, [mapRef.current]);
    
    return (
        <div ref={mapRef} style={{height: '800px'}}>
        </div>
    )
}