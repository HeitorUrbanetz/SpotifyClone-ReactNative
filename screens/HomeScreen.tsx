import { FlatList, StyleSheet,Text, View} from 'react-native';

import AlbumCategory from '../components/AlbumCategory';

import { RootTabScreenProps } from '../types';
import albumCategories from '../data/albumCategories';




export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <FlatList 
        data={albumCategories}
        renderItem={({ item }) => (
          <AlbumCategory 
          title={item.title}
          albums={item.albums}
          />
         
          )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
   
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
