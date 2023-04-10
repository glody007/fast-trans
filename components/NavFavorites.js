import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'

const favorites = [
    {
        id: '1',
        location: 'Work',
        icon: 'briefcase',
        destination: 'Lubumbashi, gambela, CD'
    },
    {
        id: '2',
        location: 'Home',
        icon: 'home',
        destination: 'Lubumbashi, gambela, CD'
    }
]

export default function NavFavorites({ onPress }) {
  return (
    <FlatList 
        className="mt-4"
        data={favorites}
        ItemSeparatorComponent={() => (
            <View className="bg-gray-200" style={{ height: 0.5}} />
        )}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity
                onPress={() => (onPress && onPress(item))}
                className="flex-row items-center my-4 space-x-4"
            >
                <View className="bg-gray-200 rounded-full p-3">
                    <Icon 
                        name={item.icon}
                        size={16}
                        color='white' 
                        type='ionicon' 
                    />
                </View>
                <View>
                    <Text className="text-lg font-bold">{item.location}</Text>
                    <Text className="text-gray-500">{item.destination}</Text>
                </View>
            </TouchableOpacity>
        )}
    />
  )
}