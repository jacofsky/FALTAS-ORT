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
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (email, password, password2) => {
            console.log(email, password, password2)
        }
    })
    

    return (
        <Stack h="100%" space={10} safeArea>

            <Center marginTop={20}>
                <Image w="260" h="150" source={require('../assets/OrtBanner.jpg')} alt="Ort logo"/>
            </Center>


            <Stack space={5}>
                <Stack space={5} >
                    <Input isInvalid={formik.errors.name} _focus={{borderColor:"info.700"}} placeholder='Nombre' variant="filled" w="75%" mx="auto" onChangeText={formik.handleChange('name')} value={formik.values.name}/>


                    <Input isInvalid={formik.errors.email} _focus={{borderColor:"info.700"}} placeholder='Email' variant="filled" w="75%" mx="auto" onChangeText={formik.handleChange('email')} value={formik.values.email} autoCapitalize="none"/>

                    <Input isInvalid={formik.errors.password} _focus={{borderColor:"info.700"}} placeholder='Contraseña' variant="filled" w="75%" mx="auto" onChangeText={formik.handleChange('password')} value={formik.values.password} autoCapitalize="none"/>

                    <Input isInvalid={formik.errors.password2} _focus={{borderColor:"info.700"}} placeholder='Confirme la contraseña' variant="filled" w="75%" mx="auto" onChangeText={formik.handleChange('password2')} value={formik.values.password2} autoCapitalize="none"/>

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

const initialValues = () => ({
    name: '',
    email: '',
    password: '',
    password2: ''
})

const validationSchema = () => ({
    name: Yup.string().required('El nombre es requerido'),
    email: Yup.string()
            .required('El email es requerido')
            .email('Debe ser un mail valido'),
    password: Yup.string()
                .min(6, 'Debe tener minimo 6 caracteres')
                .required('La contraseña es requerida'),
    password2: Yup.string()
                .required('La confirmacion es requerida')
                .oneOf([Yup.ref('password'), null], 'La contraseña no coincide')
})

export default CreateAccount
