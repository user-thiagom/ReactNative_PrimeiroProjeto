import React from 'react'
import { Appearance, SafeAreaView, Text } from 'react-native'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import Home from './src/Home'

export default () => {
    return(
        <PaperProvider theme={colorTheme == 'dark' ? dark : theme}>
            <Home/>
        </PaperProvider>
    )
}

const colorTheme = Appearance.getColorScheme()

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors:{
        ...DefaultTheme.colors,
        background: '#fff',
        primary: '#131313',
        accent: '#ffd900',
        danger: '#ed1c24'
    }
}

const dark = {
    ...DefaultTheme,
    roundness: 2,
    colors:{
        ...DefaultTheme.colors,
        background: '#131313',
        primary: '#fff',
        accent: '#ffd900',
        danger: '#ed1c24'
    }
}