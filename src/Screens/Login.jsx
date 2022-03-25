import { StyleSheet, Text, SafeAreaView, TextInput, Button, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import React from 'react'
import { Box } from 'native-base'
const styles = StyleSheet.create({

    father_container:{
        width: '100%',
        height: '100%',
        display: 'flex',
        
    },
    son_container:{
        backgroundColor: '#039be5',
        borderRadius: 40,
        height: 900,
    },
    headline_one: {
        color: 'white',
        textAlign: 'center',
        fontSize: 50,
        marginBottom: 50
    },
    textinput:{
        marginHorizontal: 90,
        backgroundColor: 'white',
        borderRadius: 5,
        fontSize: 20,
        marginBottom: 20


    },
    tinyLogo: {
        width: 220,
        height: 220,
      },
})

const Login = () => {
    return (
        <SafeAreaView style={styles.father_container}>


            <Image style={{width: 250, height: 150, marginHorizontal: 90, marginTop: 90}} source={require('../assets/OrtBanner.jpg')}/>
            
            <Box style={styles.son_container}>
                <Text style={styles.headline_one}>LOGIN</Text>
                <TextInput placeholder='Nombre' style={styles.textinput}/>
                <TextInput placeholder='Contraseña' style={styles.textinput}/>

                <Button title='Entrar' />

                <Text>— O —</Text>

                <View>
                    <Icon name='google' />
                    <Text>Google</Text>
                </View>

                <Button title='No tienes cuenta? Create una!' />

            </Box>

        </SafeAreaView>
    )
}

export default Login

