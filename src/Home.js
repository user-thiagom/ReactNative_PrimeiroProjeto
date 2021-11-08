import React, { useState } from 'react'
import { Image, ImageBackground, SafeAreaView, Text, TextInput, View } from 'react-native'
import { Avatar, Button } from 'react-native-paper'
import PokeList from './PokeList'

export default () => {

    return(
        <SafeAreaView>
            <PokeList/>
        </SafeAreaView>
    )
}