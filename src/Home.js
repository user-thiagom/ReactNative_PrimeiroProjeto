import React, { useState } from 'react'
import { Image, ImageBackground, SafeAreaView, Text, TextInput, View } from 'react-native'
import { Avatar, Button } from 'react-native-paper'

export default () => {
    const [text, setText] = useState("")
    const [titulo, setTitulo] = useState("Inicial")

    return(
        <SafeAreaView style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rose'}}>
            <Text style={{fontSize:25, color:'black'}}>{titulo}</Text>
            <Avatar.Image size={130} source={require('../Resources/vagabond.jpg')} style={{marginBottom: 5}}/>
            <Image source={require('../Resources/vagabond.jpg')} resizeMode='center' style={{maxHeight:300}}/>
            <TextInput onChangeText={text=>setText(text)} placeholder='opinião' value={text} style={{height:40, margin:5, borderWidth:1, backgroundColor:'white', width:200}}/>
            <Button icon='camera' mode='contained' onPress={()=>{setTitulo(text)}}>Trocar Titulo da Pag</Button>
        </SafeAreaView>
    )
}