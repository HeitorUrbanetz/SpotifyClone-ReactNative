import { StyleSheet, Text, SafeAreaView, FlatList, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import SongListItem from '../components/SongListItem';
import AlbumHeader from '../components/AlbumHeader';
import albumDetails from '../data/albumDetails';
import { useRoute } from '@react-navigation/native';



import Tab from './BottomScreen';





const AlbumScreen = () => {
  
  const route = useRoute();
  return (
  
    <SafeAreaView style={styles.SafeAreaView}>
      <FlatList
        data={albumDetails.songs}
        renderItem={({item}) => <SongListItem song={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <AlbumHeader album={albumDetails}/>}
        
        />
        <SafeAreaView style={styles.TabView}>
        <Tab />

        </SafeAreaView>
        </SafeAreaView>
     
  )
}

export default AlbumScreen;



const styles = StyleSheet.create({
  SafeAreaView: {
    paddingTop: 30,
    
  },
  TabView: {
    marginTop: -48
  },

})

