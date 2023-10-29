import React, { useEffect, useState } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';
import MyCarousel from './MyCarousel';
import SmallCarousel from './SmallCarousel';
function HomeScreen(props) {
    const [state, setState] = useState([]); //initializing the state variable as an empty array
    const [nowPlaying, setNowPlaying] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const getNowPlayeingMovies = async () => {
        try {
            const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=5a617e87db90772e07713b3972e95cf8");
            const json = await response.json();
            setNowPlaying(json.results);
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
            setPopularMovies(json.results);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const getUpcomingMovies = async () => {
        try {
            const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=5a617e87db90772e07713b3972e95cf8");
            const json = await response.json();
            setUpcomingMovies(json.results);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', (e) => {
            getNowPlayeingMovies()
            getNowPopularMovies()
            getUpcomingMovies()
        });

        return unsubscribe
    }, [])
    return (
        <View style={styles.container}>
            <ScrollView>


                <View style={styles.firstCircle}>
                    <Image source={require('../assets/icons/Mask-group.png')} style={styles.firstCircleImage}></Image>
                </View>
                <View style={styles.popularFlex}>
                    <Text style={styles.popularText}>Popular</Text>
                    <Text style={styles.popularText}>Upcoming</Text>
                    <Text style={styles.popularText}>Classics</Text>
                    <Text style={styles.popularText}>Top 10</Text>
                </View>
                <View style={styles.nowPlayingFlex}>
                    <Text style={styles.nowPlayingText}>Now Playing</Text>
                </View>
                <View style={styles.bigColo}>
                    <MyCarousel movies={nowPlaying} navigation={props.navigation} />
                </View>

                <View style={styles.popularHeading}>
                    <Text style={styles.popularHeadingText}>Popular</Text>
                </View>
                <View style={ styles.smallColoFlex}>
                    <SmallCarousel movies={popularMovies} navigation={props.navigation} />
                </View>
                <View style={styles.popularHeading}>
                    <Text style ={styles.popularHeadingText}>Upcoming</Text>
                </View>
                <View style={styles.smallColoFlex}>
                    <SmallCarousel movies={upcomingMovies} navigation={props.navigation} />
                </View>
            </ScrollView>
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
    firstCircle: {
        flex: 1,
        width: "100%",
        height: 10,
        marginTop: 30,
        marginLeft: "16%",
    },
    firstCircleImage: {
        width: 28,
        height: 28
    },
    popularFlex: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        height: 10,
        marginTop: 50,
        marginLeft: "16%",
    },
    text: {

    },
    popularText: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 20,
        color: "#FFF",
        borderRadius: 10,
        borderColor: "#FFF",
        borderWidth: 1,
        height: 23,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 10
    },
    nowPlayingFlex: {
        flex: 1,
        width: "100%",
        height: 35,
        width: "100%",
        marginTop: 40
    },
    nowPlayingText: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 25,
        lineHeight: 25,
        color: "#FFF",
        marginLeft: "13%"
    },
    bigColo: {
        flex: 1,
        backgroundColor: "#000",
        height: 550,
        width: "100%",
        marginTop: 30
    },
    popularHeading: {
        flex: 1,
        width: "100%",
        height: 30,
        marginTop: 10,
    },
    popularHeadingText: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 25,
        lineHeight: 25,
        color: "#FFF",
        marginLeft: "10%"
    },
    smallColoFlex: {
        flex: 1,
        backgroundColor: "#000",
        height: 450,
        width: "100%",
        marginTop: 20
    }


})

export default HomeScreen;