import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Input, Stack, Button, Center, Text, Divider, Image, Box } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { useFormik } from 'formik'
import * as Yup from 'yup'

const CreateAccount = () => {


    const navigation = useNavigation()

    const goLogin = () => {
        navigation.navigate('Login')
    }

    const formik = useFormik({
        initialValues,
        validationSchema: Yup.object(validationSchema()),

        onSubmit: values => console.log(values)
    })



    return (
        <Stack h="100%" space={10} safeArea>

            <Center marginTop={20}>
                <Image w="260" h="150" source={require('../assets/OrtBanner.jpg')} alt="Ort logo"/>
            </Center>


            <Stack space={5}>
                <Stack space={5} >
                    <Input _focus={{borderColor:"info.700"}} placeholder='Email' variant="filled" w="75%" mx="auto" onChangeText={formik.handleChange('email')} value={formik.values.email}/>

                    <Input _focus={{borderColor:"info.700"}} placeholder='Contraseña' variant="filled" w="75%" mx="auto" onChangeText={formik.handleChange('password')} value={formik.values.password}/>

                    <Input _focus={{borderColor:"info.700"}} placeholder='Repita la contraseña' variant="filled" w="75%" mx="auto" onChangeText={formik.handleChange('password2')} value={formik.values.password2}/>

                    <Button mx="20%" backgroundColor="info.700" onPress={formik.handleSubmit}>Crear cuenta</Button>
                </Stack>

                <Box mx="20%">
                    <Divider></Divider>
                </Box>

                <Stack space={2} mx="20%">
                    
                    <Button backgroundColor="info.700" leftIcon={<Icon color={'white'} name='google' />}>Crear cuenta con Google</Button>

                    <Button onPress={goLogin} size="sm" mt={2} variant="link"><Text color="info.700" fontWeight="bold">Ya tienes una cuenta? Entra ya!</Text></Button>
                </Stack>


            </Stack>

        </Stack>
    )
}

const initialValues = {
    email: '',
    password: '',
    password2: ''
}

const validationSchema = () => ({
    email: Yup.string().email(),
    password: Yup.string().length(6),
    password2: Yup.isSchema(password2 => password2 === password)
})

export default CreateAccount
