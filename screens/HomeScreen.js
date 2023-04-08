import { 
    View, 
    Text, 
    SafeAreaView, 
    Image 
} from 'react-native'
import React from 'react'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'

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

            <GooglePlacesAutocomplete
                placeholder='where from?'
                styles={{
                    container: {
                        flex: 0
                    },
                    textInput: {
                        fontSize: 18
                    }
                }}

                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: 'en'
                }}
                onPress={(data, details = null) => {
                    console.log(data)
                }}
                fetchDetails={true}
                returnKeyType={"search"}
                enablePoweredByContainer={false}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
            />

            <NavOptions />
        </View>
    </SafeAreaView>
  )
}