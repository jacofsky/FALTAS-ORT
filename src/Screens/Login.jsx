import { StyleSheet, Text, SafeAreaView, TextInput, Button, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import React from 'react'

const Login = () => {
    return (
        <SafeAreaView>
            <Text>Login</Text>
            <TextInput placeholder='Nombre' />
            <TextInput placeholder='Contraseña' />

            <Button title='Entrar' />

            <Text>— O —</Text>

            <View>
                <Icon name='google' />
                <Text>Google</Text>
            </View>

            <Button title='No tienes cuenta? Create una!' />

        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({})
