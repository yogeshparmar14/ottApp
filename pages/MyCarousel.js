import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
const img_300 = "https://image.tmdb.org/t/p/w300"
const data = [
    { title: 'Item 1' },
    { title: 'Item 2' },
    { title: 'Item 3' },
    { title: 'Item 4' },
    { title: 'Item 5' },
    // Add more items as needed
];

const MyCarousel = (props) => {
    const [movies, setMovies] = useState([])
    useEffect(() => {

        setMovies(props.movies)
        console.log("props.movies", props.movies)

    }, [props.movies])
    const renderItem = ({ item, index }) => {
        const itemStyle = index === 2 ? styles.focusedItem : styles.item;

        return (
            <View style={itemStyle}>
               <TouchableOpacity onPress={()=>{
                  props.navigation.navigate('Video Player', {
                    
                    params: {movieId:item?.id},
                  });
               }}>
                <Image
                    source={{ uri: `${img_300}/${item?.poster_path}` }} // Remote image
                    style={styles.image}
                    resizeMode="contain"
                ></Image>
                </TouchableOpacity>
                <View style={{ flex: 1, flexDirection: "row", marginTop: "10%" }}>
                    <View >
                        <Text style={styles.title}>{item?.original_title}</Text>
                        <Text style={styles.subtile}>Chapter 4</Text>
                    </View>

                    <View  >
                        <TouchableOpacity style={styles.button} >
                            <View style={{ flex: 1, flexDirection: "row" }}>
                                <Image source={require('../assets/icons/Group.png')}
                                    style={{ width: 20, height: 20, marginRight: "5%" }}
                                ></Image>
                                <Text style={styles.buttonText}>Watch Trailer</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <Carousel
            data={movies}
            renderItem={renderItem}
            sliderWidth={400}
            itemWidth={310}
            layout={'default'}
        />
    );
};

const styles = StyleSheet.create({
    item: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        borderRadius: 20
    },
    focusedItem: {
        width: "80%",
        height: "80%", // Larger height for the focused item
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    text: {
        fontSize: 20,
    },
    button: {
        height: 40,
        backgroundColor: '#E33939',
        padding: 10,
        borderRadius: 20,
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 12,
        lineHeight: 20,
        color: "#FFF",
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        width: 300,
        height: 449.356,
        borderRadius:10
    },
    title:{
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 20,
        lineHeight: 20,
        color: "#FFF", 
        marginLeft: "13%"
    },
    subtile:{
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 20,
        color: "#FFF",
         
        marginLeft: "13%"
    }
});

export default MyCarousel;
