import { View, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useSelector } from 'react-redux'
import { selectDestination, selectOrigin } from '../slices/navSlice'
import { GOOGLE_MAPS_APIKEY } from '@env'
import MapViewDirections from 'react-native-maps-directions'

export default function Map() {
  const origin = useSelector(selectOrigin)
  const destination = useSelector(selectDestination)

  const mapRef = useRef()

  useEffect(() => {
    if(!origin || !destination) return

    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'])
  }, [origin, destination])

  return (
    <MapView 
        ref={mapRef}
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
        {origin && destination && (
            <MapViewDirections
                origin={origin.location}
                destination={destination.location}
                apikey={GOOGLE_MAPS_APIKEY}
            />
        )}
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

        {destination?.location && (
            <Marker 
                coordinate={{
                    latitude: destination.location.lat,
                    longitude: destination.location.long
                }}
                title='Destination'
                description={destination.description}
                identifier="destination"
                pinColor="#00CCBB"
            />
        )}
    </MapView>
  )
}