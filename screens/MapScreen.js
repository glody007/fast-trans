import { View, Text, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'
import { Icon } from '@rneui/base'

const Stack = createStackNavigator()

export default function MapScreen() {
  const navigation = useNavigation()

  return (
    <View className="flex-1">
      <TouchableOpacity 
        onPress={() => navigation.goBack()}
        className="absolute bg-gray-100 rounded-full top-16 left-6 z-50 shadow-lg"
      >
        <Icon name='menu' />
      </TouchableOpacity>

      <View className="h-1/2">
        <Map />
      </View>
      <View className="h-1/2">
        <Stack.Navigator>
          <Stack.Screen 
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}