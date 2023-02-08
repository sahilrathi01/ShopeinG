import { StyleSheet, Text, View, Image, ImageBackground, StatusBar } from 'react-native'
import React from 'react'
import { colorpath, imagepath } from '../assest/Index'

const Author = () => {

    return (
        <View style={{ flex: 1 }}>

            <StatusBar hidden />

            <ImageBackground style={{ flex: 1 }}
                source={imagepath.sahil1}>



            </ImageBackground>
        </View>

    )
}

export default Author

const styles = StyleSheet.create({})