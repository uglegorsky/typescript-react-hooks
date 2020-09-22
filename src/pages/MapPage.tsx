import React from 'react'
import { useAppContext } from '../AppContext'
import { YMaps, Map, Placemark } from 'react-yandex-maps';


export const MapPage: React.FC = () => {
  const { coords } = useAppContext();
  return (
    <YMaps>
      <Map width="100%" height="500px" defaultState={{ center: [coords.latitude, coords.longitude], zoom: 15 }}>
        <Placemark geometry={[coords.latitude, coords.longitude]} />
      </Map>
    </YMaps >
  )
}