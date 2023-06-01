import React from 'react'
import { useMemo } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

const Map = () => {
    const center=useMemo(()=>({lat:19.075983,lng:72.877655}),[])
  return (  
        <GoogleMap zoom={10} center={center} mapContainerStyle={{width:'100%',height:'400px'}}>
            <Marker position={center}/>
        </GoogleMap>
  )
}
export default Map
