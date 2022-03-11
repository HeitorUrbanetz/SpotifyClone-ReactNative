import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';



const PremiumScreen = () => {
 
  

  
  return (
    <View style={styles.Container}>
      <Text style={styles.Me}>Feito por Heitor Urbanetz</Text>
      <TouchableOpacity style={styles.Button} onPress={() => alert('https://github.com/HeitorUrbanetz')}>
          <Text style={styles.ButtonText}>Conheça meu Github</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PremiumScreen

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    Me: {
        color: 'white',
        fontSize: 16,
    },
    ButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    Button : {
      backgroundColor: '#1CD05D',
      height: 60,
      width: 175,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    }
})