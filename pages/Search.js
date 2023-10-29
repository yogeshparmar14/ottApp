import React, { useEffect, useState } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    Image,
    View,
    FlatList
} from 'react-native';
import CustomInput from './CustomInput'
import MovieCard from './MovieCard';


function Search(props) {

    const [filterredMovies, setFilterredMovies] = useState([]); //initializing the state variable as an empty array
    const [data, setData] = useState([]);

    const [isLoading, setLoading] = useState(true);
    // const fetchTrending = async () => {
    //     const Access_key = "5a617e87db90772e07713b3972e95cf8"
    //     const data = await fetch(`
    // https://api.themoviedb.org/3/trending/all/day?api_key=${Access_key}`);
    //     const dataJ = await data.json(); // fetching data from API in JSON Format
    //     setState(dataJ.results); //storing that data in the state
    //     console.log("dataJ.results", dataJ.results)
    // };

    const getMovies = async () => {
        try {
            const response = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=5a617e87db90772e07713b3972e95cf8");
            const json = await response.json();
            console.log("json", json)
            setData(json.results);
            setFilterredMovies(json.results)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', (e) => {
            getMovies()
            // fetchTrending();
        });

        return unsubscribe
    }, [])

    const filterMovies = (text) => {
        const filterMoviesArray = data.filter((item) => {
            const { original_name, original_title, title, name } = item
            if (
                original_name?.toLowerCase().includes(text.toLowerCase()) ||
                original_title?.toLowerCase().includes(text.toLowerCase()) ||
                title?.toLowerCase().includes(text.toLowerCase()) ||
                name?.toLowerCase().includes(text.toLowerCase())

            ) {
                return true
            }
            return false
        })
        setFilterredMovies(filterMoviesArray)

    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer }>
                <CustomInput search={true} onChangeText={(text) => { filterMovies(text) }} />
            </View>
            <View style={{ flex: 4, backgroundColor: "#000", width: "100%", }}>
                <FlatList
                    data={filterredMovies}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    renderItem={({ item }) => {
                        return (<MovieCard item={item} navigation={props.navigation} />)

                    }}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        // justifyContent: 'center', // Center vertically
        // alignItems: 'center',
    },
    inputContainer: {
        flex: 1,
        backgroundColor: "#000",
        height: 60, width: "100%",
        alignItems: "center",
        justifyContent: "center",
    }

});

export default Search;
