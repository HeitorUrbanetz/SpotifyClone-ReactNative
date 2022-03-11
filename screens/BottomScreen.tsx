import React  from 'react';
import  {Text, StyleSheet, View}  from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';

import useColorScheme from '../hooks/useColorScheme';

import { FontAwesome, Ionicons, EvilIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';


const Stack = createNativeStackNavigator();
const BottomScreen = () => {
    return (
        <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
          <Stack.Screen name='Search' component={TabTwoScreen} options={{headerShown: false}}/>
          <Stack.Screen name='Library' component={TabTwoScreen} options={{headerShown: false}}/>
          <Stack.Screen name='Premium' component={TabTwoScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
}

const Tab = () => {
    const navigation = useNavigation()
    const colorScheme = useColorScheme();

    return(
        <SafeAreaView style={styles.Container}>
            <View style={styles.MyView}>
        <Text style={styles.Icon} onPress={() => navigation.navigate('Home')}> <Entypo name='home' size={30}  /></Text>
        <Text style={styles.hey}>Home</Text>
            </View>

            <View style={styles.MyView}>
                <Text style={styles.Icon} onPress={() => navigation.navigate('Search')}><EvilIcons name='search' size={30} /></Text>
                <Text style={styles.hey}>Search</Text>
            </View>

            <View style={styles.MyView}>
              <Text style={styles.Icon} onPress={() => navigation.navigate('Library')}><MaterialCommunityIcons name='music-box-multiple-outline' size={30} /></Text>
              <Text style={styles.hey}>Library</Text>

            </View>

            <View style={styles.MyView}>
                 <Text style={styles.Icon} onPress={() => navigation.navigate('Premium')}><FontAwesome name='spotify' size={30} /></Text>
                 <Text style={styles.hey}>Premium</Text>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#000',
        marginTop: -20,
        padding: 30
    },
    Icon: {
        color: 'gray',
       
    },
    MyView: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -30
    },
    hey: {
        color: 'gray',
        fontSize: 10
        
    }
})

export default Tab;