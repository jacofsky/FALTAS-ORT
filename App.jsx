import React from 'react'
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';

import AccountNavigation from './src/Navigator/AccountNavigation'


export default function App() {
    return (
        <NavigationContainer>
            <NativeBaseProvider>
                <AccountNavigation />            
            </NativeBaseProvider>
        </NavigationContainer>
    )
}
