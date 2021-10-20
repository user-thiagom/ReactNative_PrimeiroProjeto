import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { Button,useTheme } from 'react-native-paper'

export default () => {
    const {colors} = useTheme();
    return(
        <SafeAreaView style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background}}>
            <Text style={{fontSize: 25, color: colors.primary}}>Thiago Pocket</Text>
            <Text style={{fontSize: 25, color: colors.accent}}>Pocket Thiago</Text>
            <Button icon='camera' mode='contained' onPress={()=>{console.warn("Click!")}}>Tirar Foto</Button>
        </SafeAreaView>
    )
}