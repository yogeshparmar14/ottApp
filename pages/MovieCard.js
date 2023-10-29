import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    Image,
    View,
     
} from 'react-native';
const img_300 = "https://image.tmdb.org/t/p/w300"
function MovieCard(props) {
    console.log("props", props)

    return (
        <View style={styles.container}>
               <TouchableOpacity onPress={()=>{
                  props.navigation.navigate('Video Player', {         
                     params: {movieId:props?.item?.id},
                  });
               }}>
            <Image
                source={{ uri: `${img_300}/${props?.item?.poster_path}` }} // Remote image
                style={styles.image}
            />
            <Text style={[styles.text, styles.movieName]}>{props?.item?.title ? props?.item?.title:props?.item?.name}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, width: "100%",
//   justifyContent: 'center', // Center vertically
        alignItems: 'center',
        marginTop:30
    },
    image: {
        width: 166.667,
        height: 250,
        borderRadius:10
    },
    text: {

        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: 20,

    },
    movieName: {
        fontSize: 14,
        color: "#fff",
        marginTop:10
    }
});

export default MovieCard;
