import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const SearchScreen = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Me}>Find the Music that you love</Text>
      <Text style={styles.MeBelow}>Play Music and podcasts you've downloaded</Text>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Me: {
        color: 'white',
        fontSize: 20
    },
    MeBelow: {
      color: 'white',
        fontSize: 16,
        marginTop: 10
    }
})