import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
    
      
        position: 'absolute',
        bottom: 30,
        backgroundColor: "#000",
        width: '100%',
        margin: 15,
        marginLeft: -1,
        borderWidth: 2,
        borderColor: 'black',
       
    
    },
    myIcon:{
        opacity: 0.6,
    },
    progress: {
        height: 3,
        width: '100%',
        backgroundColor: '#bcbcbc'
    },
    image: {
        width: 75,
        height: 75,
        marginRight: 10,
    },
    row: {
        flexDirection: 'row',
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconsContainer: { 
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-around'
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 5
 
    },
    artist: {
        color: 'lightgray',
        fontSize: 18,
    }
})

export default styles;