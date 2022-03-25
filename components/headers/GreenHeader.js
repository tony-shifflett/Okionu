import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const GreenHeader = ({title}) => {
  return (
    <View style={styles.header}>
        <Text style={styles.text}>{title}</Text>
    </View>
  )
}

GreenHeader.defaultProps = {
    title: 'Okionu'
}

const styles = StyleSheet.create({
    header: {
        height: 120,
        backgroundColor: '#BFD8C6',
        borderBottomRadius: 120/2,
    },
    text: {
        color: 'black',
        fontSize: 23, 
        textAlign: 'center',
    },
})

export default GreenHeader