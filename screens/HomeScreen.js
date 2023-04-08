import { 
    View, 
    Text, 
    SafeAreaView, 
    Image 
} from 'react-native'
import React from 'react'
import NavOptions from '../components/NavOptions'

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
        <View className="p-5">
            <Image 
                style={{
                    resizeMode: "contain"
                }}
                source={{
                    uri: "https://links.papareact.com/gzs"
                }}
                className="h-20 w-20 object-cover"
            />
            <NavOptions />
        </View>
    </SafeAreaView>
  )
}