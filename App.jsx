import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CreateAccount from './src/Screens/CreateAccount'
import Login from './src/Screens/Login'
import { NativeBaseProvider } from "native-base";



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default function App() {
    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <Login />
            </View> 
        </NativeBaseProvider>
    )
}
