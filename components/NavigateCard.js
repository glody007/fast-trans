import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
export default function NavigateCard() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Text className="text-center text-lg font-bold mt-4">Choose your destination</Text>
      <GooglePlacesAutocomplete 
        placeholder='where to?'
        styles={{
            container: {
                flex: 1,
                paddingTop: 20,
                backgroundColor: 'white'
            },
            textInput: {
                fontSize: 18,
                backgroundColor: '#e2e8f0'
            },
            textInputContainer: {
                paddingHorizontal: 20
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
    </SafeAreaView>
  )
}