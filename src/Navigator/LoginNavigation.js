import { createNativeStackNavigator } from 'react-native-screens/native-stack';

const Stack = createNativeStackNavigator();


const LoginNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' />
        </Stack.Navigator>
    )
}