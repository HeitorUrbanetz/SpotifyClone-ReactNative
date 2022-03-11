import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LibraryScreen = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Me}>Library</Text>
    </View>
  )
}

export default LibraryScreen

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Me: {
        color: 'white',
        fontSize: 20
    }
})