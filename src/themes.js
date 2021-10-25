import {DefaultTheme} from 'react-native-paper'

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