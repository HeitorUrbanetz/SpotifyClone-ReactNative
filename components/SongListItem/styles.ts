import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        margin: 10,
    
    },
    image: {
        width: 75,
        height: 75,
        marginRight: 10,
    },
    rightContainer: {
        justifyContent: 'space-around'
    },
    title: {
        color: 'white',
        fontSize: 24,
        
    },
    artist: {
        color: 'lightgray',
        fontSize: 20,
    }
})

export default styles;