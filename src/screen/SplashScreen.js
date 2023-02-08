import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import StakeNavigation from '../navigation/StakeNavigation'
import { colorpath } from '../assest/Index'

const SplashScreen = () => {

  const [IsHide, setIsHide] = useState(false)


  useEffect(() => {
    setTimeout(() => {
      setIsHide(true)
    }, 500)
  }, [IsHide])

  return !IsHide ? (
    <View style={styles.body}>
      <Text style={styles.Textt}>
         Sahil;
      </Text>
    </View>
  ) : (
    <StakeNavigation />
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  body:{
    flex:1,
    justifyContent:"center",
    alignItems:'center'
  },
  Textt:{
    fontSize:30,
    fontWeight:'600',
    color:colorpath.green,
    textAlign:'center'
  }
})