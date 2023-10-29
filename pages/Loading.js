import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    ActivityIndicator
} from 'react-native';
import CustomInput from './CustomInput'

function Loading(props) {


    return (
        <View style={styles.container}>
        <Text style={{ color: '#e93766', fontSize: 40 }}>Loading</Text>
        <ActivityIndicator color='#e93766' size="large" />
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

});

export default Loading;
