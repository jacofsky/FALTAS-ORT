import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import React from 'react-native'

const Stack = createNativeStackNavigator()

const LoginNavigation = () => {
    (
        <Stack.Navigator>
            <Stack.Screen name="Login" />
        </Stack.Navigator>
    )
}
