import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
 

const XheaderGreen = ({title}) => {
  return (
    <View style={styles.header}>
        <Icon name='back'/>
        <Text style={styles.text}>{title}</Text>
    </View>
  )
}

XheaderGreen.defaultProps = {
    title: 'Okionu'
}

const styles = StyleSheet.create({
    header: {
        height: 120,
        backgroundColor: '#BFD8C6',
        borderBottomRadius: 120/2,
        alignContent:'center',
        justifyContent: 'center',
    },
    text: {
        color: 'black',
        fontSize: 20, 
        textAlign: 'center',
    },
})

export default XheaderGreen