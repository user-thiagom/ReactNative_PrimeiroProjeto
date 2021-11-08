import React, {useState} from 'react'
import { Button, Pressable, SafeAreaView, StyleSheet, Text } from 'react-native'
import {QueryClient, QueryClientProvider} from 'react-query'
import Home from './src/Home'

const queryClient = new QueryClient()

export default () => {
    return(
        <QueryClientProvider client={queryClient}>
            <SafeAreaView style={style.container}>
                <Home/>
            </SafeAreaView>
        </QueryClientProvider>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent: 'center'
    },
    TextoGrande: {
        fontSize: 24,
        color: '#527'
    }
})