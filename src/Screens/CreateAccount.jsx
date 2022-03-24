import { StyleSheet, Text, SafeAreaView, TextInput, Button } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({})

const CreateAccount = () => {
    return (
        <SafeAreaView>
            <Text>CreateAccount</Text>

            <TextInput placeholder='Nombre' autoCapitalize='none' />
            <TextInput placeholder='Contraseña' autoCapitalize='none' />
            <TextInput placeholder='Repita la contraseña' autoCapitalize='none' />


            <Button title='Continuar' />

            <Text>— O —</Text>

            <Button title='Google' />


        </SafeAreaView>
    )
}

export default CreateAccount
