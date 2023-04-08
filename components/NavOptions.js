import { 
    View, 
    Text, 
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base';

const data = [
    {
        id: "1",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: "2",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen"
    },
]

export default function NavOptions() {
  return (
    <FlatList 
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity className="px-5 pt-4 pb-8 rounded bg-gray-200 mr-2">
                <View>
                    <Image 
                        style={{
                            width: 120,
                            height: 120,
                            resizeMode: "contain",
                        }}
                        source={{
                            uri: item.image
                        }}
                    />
                    <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
                    <View className="bg-black w-10 h-10 items-center justify-center rounded-full mt-4">
                        <Icon 
                            name='arrowright' 
                            color='white' 
                            type='antdesign' 
                        />
                    </View>
                </View>
            </TouchableOpacity>
        )}
    />
  )
}