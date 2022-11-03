import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Image } from 'react-native';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={tw `bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image 
          style={{
            width: 100, height: 100, resizeMode: 'contain'
          }}
        source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
        }}/>

        <GooglePlacesAutocomplete 
        placeholder='Where From?'
        style={{
          container: {
            flex: 0,
          }, 
          textInput: {
            fontSize: 18,
          }
        }}
          query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "en",
        }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color:"blue"
    }
})