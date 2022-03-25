import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native'; 
import OptionsBar from './OptionsBar';

const LogoHeader = () =>{
  return (
    <View style={styles.header}>
      <Image source={require('../assets/okionu-logo.png')} style={styles.img}/>
      <OptionsBar/>
    </View>
  )
}


const styles = StyleSheet.create({
  header: {
    height: 300, 
    backgroundColor: 'white',
    paddingTop: 50,
  },
  img: {
      alignSelf: 'center',
      height: 250,
      width: 250,
  },
})
export default LogoHeader