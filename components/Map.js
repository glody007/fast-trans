import { View, Text } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlice'

export default function Map() {
  const origin = useSelector(selectOrigin)

  return (
    <MapView 
        initialRegion={{
            latitude: origin.location.lat,
            longitude: origin.location.long,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
        }}
        style={{
            width: '100%',
            height: '100%'
        }}
    >
        {origin?.location && (
            <Marker 
                coordinate={{
                    latitude: origin.location.lat,
                    longitude: origin.location.long
                }}
                title='Origin'
                description={origin.description}
                identifier="origin"
                pinColor="#00CCBB"
            />
        )}
    </MapView>
  )
}