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

const SmallCarousel = (props) => {
    const [movies, setMovies] = useState([])
    useEffect(() => {

        setMovies(props.movies)
    
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
    image: {
        width: 300,
        height: 449.356,
        borderRadius:10
    },
});

export default SmallCarousel;
