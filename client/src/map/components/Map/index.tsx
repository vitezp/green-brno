import React, { FC, useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import { onLoad } from '../../handlers/onLoad'

import 'mapbox-gl/dist/mapbox-gl.css'

export const Map: FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null)

  // initialize map
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibHVib2dvY28iLCJhIjoiY2t1eHc4ZWR2MDY5MjMzbGRhdjJrdGxlbSJ9.cKiGo38vzuZ-cLoL_UU09w'

    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [16.6035456, 49.2044288],
      zoom: 12,
    })

    // add navigation control (zooming and rotating)
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right')

    map.on('load', onLoad({ map }))

    // Clean up on unmount
    return () => {
      map.remove()
    }
  }, [])

  return <div style={{ width: '100vw', height: '100vh' }} ref={mapContainerRef} />
}
