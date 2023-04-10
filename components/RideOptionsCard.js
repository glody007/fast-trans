import { 
    View, 
    Text, 
    SafeAreaView, 
    TouchableOpacity, 
    FlatList,
    Image 
} from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../slices/navSlice'

const data = [
    {
        id: "1",
        title: "Uber X",
        image: "https://links.papareact.com/3pn",
        multiplier: 1
    },
    {
        id: "2",
        title: "Uber XL",
        image: "https://links.papareact.com/5w8",
        multiplier: 1.4
    },
    {
        id: "3",
        title: "Uber LUX",
        image: "https://links.papareact.com/7pf",
        multiplier: 2
    },
]

const SURGE_CHARGE_RATE = 1.6

export default function RideOptionsCard() {
    const navigation = useNavigation()
    const [selected, setSelected] = useState(null)
    const travelTimeInformations = useSelector(selectTravelTimeInformation)

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View>
                <TouchableOpacity 
                    onPress={() => {
                        navigation.goBack()
                    }}
                    className="absolute rounded-full left-4 z-50 p-4"
                >
                    <Icon 
                        name='chevron-left'
                        type='fontawesome'
                    />
                </TouchableOpacity>
            </View>

            <Text className="text-lg font-bold text-center mt-4">Select a ride - {travelTimeInformations?.distance} Km</Text>

            <FlatList 
                data={data}
                keyExtractor={(item) => item.id} 
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        onPress={() => setSelected(item)}
                        className={`flex-row justify-between items-center px-6 ${item.id === selected?.id && "bg-gray-200"}`}
                    >
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: 'contain'
                            }}
                            source={{
                                uri: item.image
                            }}
                        />
                        <View className="-ml-10">
                            <Text className="text-xl font-semibold">{item.title}</Text>
                            <Text>{travelTimeInformations.duration} mins Travel time</Text>
                        </View>
                        <Text className="text-xl">
                            {new Intl.NumberFormat('en-us', {
                                style: 'currency',
                                currency: 'USD'
                            }).format(
                                (travelTimeInformations?.duration * SURGE_CHARGE_RATE * item.multiplier) / 10
                            )}
                        </Text>
                    </TouchableOpacity>
                )}
                className="mt-4"
            />

            <View>
                <TouchableOpacity 
                    disabled={!selected} 
                    className={`bg-black p-4 mx-3 ${!selected && 'bg-gray-300'}`}
                >
                    <Text className="text-white text-center text-xl">
                        Choose {selected?.title}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}