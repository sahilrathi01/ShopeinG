import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Buttonn from '../componant/Buttonn'
import { FullWindowOverlay } from 'react-native-screens'

const Many = ({ navigation }) => {

    return (
        <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: "center" }}>

            <Buttonn onPress={() => navigation.navigate('Product')}
                title='Go To E-comarc app' style={{ width: '90%' }} />

            <Buttonn
                onPress={() => navigation.navigate('Food')}
                title='Go To E-comarc app' style={{ width: '90%' }} />
        </View>
    )
}

export default Many

const styles = StyleSheet.create({})