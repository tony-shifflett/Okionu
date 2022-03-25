import React from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

const LoginForm = () => {
  return (
    <View style={styles.formContainer}>
        <View>
            <Text>First Name</Text>
            <TextInput/>
        </View>
        <View>
            <Text>Last Name</Text>
            <TextInput/>
        </View>
        <View>
            <Text>Email Address</Text>
            <TextInput/>
        </View>
        <View>
            <Text>Password</Text>
            <TextInput type='password'/>
        </View>
        <Button title="Forgot Password?"/>
    </View>
  )
}

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#F2F2F2'
    },
})

export default LoginForm