import React from 'react'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'

import Login from '../Screens/Login'
import CreateAccount from '../Screens/CreateAccount'

const Stack = createNativeStackNavigator()

const AccountNavigation = () => (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ headerShown: false }} />
    </Stack.Navigator>
)

export default AccountNavigation
