import React from 'react'
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import AccountNavigation from './src/Navigator/AccountNavigation'
import { store } from './src/store/store'


export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <NativeBaseProvider>
                    <AccountNavigation />            
                </NativeBaseProvider>
            </NavigationContainer>
        </Provider>
    )
}
