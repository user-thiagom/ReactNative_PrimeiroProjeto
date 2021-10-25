import React, {useState} from 'react'
import { Button, Pressable, SafeAreaView, StyleSheet, Text } from 'react-native'
import Home from './src/Home'

export default () => {
    return(
        <SafeAreaView style={style.container}>
            <Home/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#871',
        alignItems:'center',
        justifyContent: 'center'
    },
    TextoGrande: {
        fontSize: 24,
        color: '#527'
    }
})