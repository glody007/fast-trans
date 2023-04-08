import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Map from '../components/Map'

export default function MapScreen() {
  const navigation = useNavigation()

  return (
    <View className="flex-1">
      <View className="h-1/2">
        <Map />
      </View>
    </View>
  )
}