import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Input, Stack, Button, Center, Text, Divider, Image, Box } from 'native-base'
import { useNavigation } from '@react-navigation/native'



const Login = () => {

    const navigation = useNavigation()

    const goCreateAccount = () => {
        navigation.navigate('CreateAccount')
    }


    return (
        <Stack h="100%" space={10} safeArea>

            <Center marginTop={20}>
                <Image w="260" h="150" source={require('../assets/OrtBanner.jpg')} alt="Ort logo"/>
            </Center>
            
            <Stack space={5}>
                <Stack space={5} >
                    <Input _focus={{borderColor:"info.700"}} placeholder='Email' variant="filled" w="75%" mx="auto"/>
                    <Input _focus={{borderColor:"info.700"}} placeholder='Contraseña' variant="filled" w="75%" mx="auto"/>
                    <Button mx="20%" backgroundColor="info.700">Ingresa</Button>
                </Stack>

                <Box mx="20%">
                    <Divider></Divider>
                </Box>

                <Stack space={2} mx="20%" >

                    
                    <Button backgroundColor="info.700" leftIcon={<Icon color={'white'} name='google' />}>Ingresa con Google</Button>

                    <Button onPress={goCreateAccount} size="sm" mt={2} variant="link"><Text color="info.700" fontWeight="bold">No tienes cuenta? Create una!</Text></Button>
                </Stack>


            </Stack>

        </Stack>
    )
}

export default Login

