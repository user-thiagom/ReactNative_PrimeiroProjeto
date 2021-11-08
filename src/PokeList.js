import React, { useState } from 'react'
import { Alert, SafeAreaView, Text, View } from 'react-native'
import { ActivityIndicator, Colors, List } from 'react-native-paper'
import { red100 } from 'react-native-paper/lib/typescript/styles/colors';
import { useQuery, useQueryClient } from 'react-query'
import { carregarPokemons } from './../api';

export default () => {
    const [expanded, setExpanded] = useState(true)
    const handlePress = () => setExpanded(!expanded)
    const poke = useQuery('pokemons', carregarPokemons)
    
    if (poke.isLoading) {
        return <ActivityIndicator animating={true} color={Colors.red600}/>
    }

    if (poke.isError) {
        return (
            <View>
                <Text>Erro</Text>
            </View>
        )
    }
    console.warn(poke.data)
    return(
        <SafeAreaView style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rose'}}>
            <List.Accordion 
            title="Pokemons"
            left={props => <List.Icon {...props} icon='pokeball'/>}
            expanded={expanded}
            onPress={handlePress}
            style={{width: 300}}>
                {poke.data.results.map(
                    pokemon => <List.Item title={pokemon.name} left={props => <List.Icon {...props} icon='pokeball'/>} />
                )}
            </List.Accordion>
        </SafeAreaView>
    )
}
