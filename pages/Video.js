import React, { useEffect, useState } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,FlatList
} from 'react-native';
const img_300 = "https://image.tmdb.org/t/p/w300"
import SmallCarousel from './SmallCarousel';
import VideoPlayer from './VideoPlayer';
function Video(props) {
    console.log("props", props)
    const [popularMovies, setPopularMovies] = useState([]);
    const [movieDetails, setMovieDetails] = useState({});
    const [isLoading, setLoading] = useState(true);
    const getMovieDetails = async () => {
        try { 
            let movieId = props?.route?.params?.params?.movieId
              
            const api_key = "5a617e87db90772e07713b3972e95cf8"
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`);
            const json = await response.json();
            console.log("json", json)
            setMovieDetails(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const getNowPopularMovies = async () => {
        try {
            const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=5a617e87db90772e07713b3972e95cf8");
            const json = await response.json();
            console.log("json", json)
            setPopularMovies(json.results);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', (e) => {

            getNowPopularMovies()
            getMovieDetails()
        });

        return unsubscribe
    }, [])
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flex: 1, backgroundColor: "#000", height: 250, width: "100%" }}>
                    {/* <Image
                    source={{ uri: `${img_300}/${item?.poster_path}` }} // Remote image
                    style={styles.image}
                    resizeMode="contain"
                ></Image> */}
                    <VideoPlayer />
                </View>
                <View style={{ flex: 1, backgroundColor: "#000", height: 30, width: "100%", marginTop: 30 }}>
                    <Text style={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: 24,
                        lineHeight: 24,
                        color: "#FFF",
                        marginLeft: 20
                    }}>{movieDetails?.title}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#000", height: 30, width: "100%", marginTop: 30, marginLeft: 20 }}>
                    <Image source={require('../assets/icons/clock.png')} style={{ height: 15, width: 15, marginTop: 4 }}  ></Image>
                    <Text style={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: 12,
                        lineHeight: 20,
                        color: "#FFF",
                        marginLeft: 5
                    }}>{`${Math.round(movieDetails?.runtime / 60)}h ${movieDetails?.runtime % 60}m`}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#000", height: 30, width: "100%", marginTop: 30, marginLeft: 20 }}>
                    <View   >
                        <TouchableOpacity style={styles.button} >
                            <View style={{ flex: 1, flexDirection: "row" }}>
                                <Image source={require('../assets/icons/Vector-1.png')}
                                    style={{ width: 20, height: 20, marginRight: "5%" }}
                                ></Image>
                                <Text style={styles.buttonText}>Download</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View  >
                        <TouchableOpacity style={styles.button} >
                            <View style={{ flex: 1, flexDirection: "row" }}>
                                <Image source={require('../assets/icons/Vector-2.png')}
                                    style={{ width: 20, height: 20, marginRight: "5%" }}
                                ></Image>
                                <Text style={styles.buttonText}>My List</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: "#000", height: 30, width: "100%", marginTop: 30, marginLeft: 20 }}>
                    <View style={styles.line} />
                </View>
                <View style={{ flex: 1, backgroundColor: "#000", width: "100%", marginTop: 20, marginLeft: 20 }}>
                    <FlatList
                        data={movieDetails?.genres}
                        keyExtractor={(item) => item.id}
                          numColumns={5}
                        renderItem={({ item }) => {
                            return ( 
                                <Text style={{
                                    fontFamily: "Poppins",
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    fontSize: 10,
                                    lineHeight: 20,
                                    color: "#FFF",
                                    borderRadius: 10,
                                    borderWidth: 1,
                                    borderColor: "#fff",
                                    marginLeft: 20,
                                    padding: 5
                                }}>{item.name}</Text>
                             )

                        }}
                    />
                </View>
                <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#000", height: 30, width: "100%", marginTop: 30, marginLeft: 20 }}>
                    <View   >

                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <Image source={require('../assets/icons/star.png')}
                                style={{ width: 20, height: 20, marginRight: "5%" }}
                            ></Image>
                            <Text style={{
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: 12,
                                lineHeight: 20,
                                color: "#FFF",
                                // marginLeft: 20
                            }}>{`${movieDetails?.vote_average} (${movieDetails?.vote_count})`}</Text>
                        </View>

                    </View>
                    <View  >

                        <View style={{ flex: 1 }}>

                            <Text style={{
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: 12,
                                lineHeight: 20,
                                color: "#FFF",
                                // marginLeft: 20
                            }}>{movieDetails?.release_date}</Text>
                        </View>

                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: "#000", height: 75, width: "95%", marginTop: 10 }}>
                    <Text style={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "300",
                        fontSize: 12,
                        lineHeight: 20,
                        color: "#FFF",
                        marginLeft: 20,

                    }}>{movieDetails?.overview}</Text>
                </View>

                <View style={{ flex: 1, backgroundColor: "#000", height: 30, width: "100%", marginTop: 30 }}>
                    <Text style={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: 24,
                        lineHeight: 24,
                        color: "#FFF",
                        marginLeft: 20
                    }}>Top Cast</Text>
                </View>

                <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#000", height: 100, width: "100%", marginTop: 30, marginLeft: 30 }}>
                    <View>
                        <Image source={require('../assets/images/image-10.png')}
                            style={{ marginRight: 20 }}
                            resizeMode="contain"
                        ></Image>
                        <Text style={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: 8,
                            lineHeight: 20,
                            color: "#FFF",
                            // marginLeft: 20
                        }}>Keanu Reeves</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/images/image-10.png')}
                            style={{ marginRight: 20 }}
                            resizeMode="contain"
                        ></Image>
                        <Text style={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: 8,
                            lineHeight: 20,
                            color: "#FFF",
                            // marginLeft: 20
                        }}>Keanu Reeves</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/images/image-10.png')}
                            style={{ marginRight: 20 }}
                            resizeMode="contain"
                        ></Image>
                        <Text style={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: 8,
                            lineHeight: 20,
                            color: "#FFF",
                            // marginLeft: 20
                        }}>Keanu Reeves</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/images/image-10.png')}
                            style={{ marginRight: 20 }}
                            resizeMode="contain"
                        ></Image>
                        <Text style={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: 8,
                            lineHeight: 20,
                            color: "#FFF",
                            // marginLeft: 20
                        }}>Keanu Reeves</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/images/image-10.png')}
                            style={{ marginRight: 20 }}
                            resizeMode="contain"
                        ></Image>
                        <Text style={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: 8,
                            lineHeight: 20,
                            color: "#FFF",
                            // marginLeft: 20
                        }}>Keanu Reeves</Text>
                    </View>

                </View>
                <View style={{ flex: 1, backgroundColor: "#000", height: 30, width: "100%", marginTop: 30 }}>
                    <Text style={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: 24,
                        lineHeight: 24,
                        color: "#FFF",
                        marginLeft: 20
                    }}>More like This</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: "#000", height: 450, width: "100%", marginTop: 20 }}>
                    <SmallCarousel movies={popularMovies} navigation={props.navigation}/>
                </View>
            </ScrollView>
            {/* <View style={{ flex: 1, position: "absolute", top: 50, left: 50, backgroundColor: "#E33939", borderRadius: 50, padding: 10 }}>
                <TouchableOpacity onPress={() => {
                    props.navigation.goBack()
                }}>
                    <Image source={require('../assets/icons/close-circle.png')}
                        style={{ width: 20, height: 20, }}
                    ></Image>
                </TouchableOpacity>
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: 'center', // Center vertically
        alignItems: 'center',
    },
    button: {
        height: 40,
        // backgroundColor: '#E33939',
        padding: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#fff",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 12,
        lineHeight: 20,
        color: "#FFF",
        marginRight: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 20,
    },
    line: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        marginVertical: 8,
        width: "85%"
    },
    image: {
        width: 300,
        height: 449.356,
        borderRadius: 10
    },

})

export default Video;