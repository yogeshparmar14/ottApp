import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import CustomInput from './CustomInput'
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

function Profile(props) {
const handleLogOut =async()=>{
    await signOut(auth)
}

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.box6}>


                    <View>
                        {/* <Image source={require('../assets/icons/close-circle.png')} style={styles.closeCircle}></Image> */}
                    </View>
                    
                    <Text style={[styles.profile, styles.text]}>My Profile</Text>

                </View>
                <View style={styles.box7}>
                    <Image source={require('../assets/images/image-15.png')} style={styles.image}></Image>
                    <Text style={[styles.name, styles.text]}>John Doe</Text>
                </View>
            </View>
            <View style={styles.box4}>
                <View style={styles.box10}>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <Image source={require('../assets/icons/user1.png')} style={styles.userPic}></Image>
                        <View>
                            <Text style={[styles.account, styles.text]}>Account</Text>
                            <Text style={[styles.acountText, styles.text]}>Edit Profile</Text>
                            <Text style={[styles.acountText, styles.text]}>Change Password</Text>
                        </View>
                    </View>

                    <Image source={require('../assets/icons/arrow-left.png')} style={styles.arrow}></Image>

                </View>
                <View style={styles.box11}>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <Image source={require('../assets/icons/user1.png')} style={styles.userPic}></Image>
                        <View>
                            <Text style={[styles.account, styles.text]}>Settings</Text>
                            <Text style={[styles.acountText, styles.text]}>Themes</Text>
                            <Text style={[styles.acountText, styles.text]}>Permissions</Text>
                        </View>
                    </View>
                    <Image source={require('../assets/icons/arrow-left.png')} style={styles.arrow}></Image>
                </View>
            </View>
            <View style={styles.box5}>
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => {  handleLogOut()}}>
                        <Text style={[styles.buttonText, styles.text]}>Log Out</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: 'center', // Center vertically
        alignItems: 'center',
        // backgroundColor:"white"
    },
    box: {
        width: "100%",

        flex: 2,
        justifyContent: 'center', // Center vertically
        alignItems: 'center',
        // backgroundColor: 'white'
    },
    box4: {
        flex: 2,
        justifyContent: 'center', // Center vertically
        alignItems: 'center',
        // backgroundColor: 'blue',
        width: "100%",
    },
    box5: {
        flex: 2,
        justifyContent: 'center', // Center vertically
        alignItems: 'center',
        // backgroundColor: 'green',
        width: "100%",
    },
    box6: {
        width: "100%",
        flex: 1,
        //   flexDirection:"row",
        justifyContent: 'center', // Center vertically
        alignItems: 'center',

        //  backgroundColor:'pink'
    },
    box7: {
        width: "100%",
        flex: 1,
        // justifyContent: 'center', // Center vertically
        alignItems: 'center',
        // backgroundColor: 'pink'
    },
    box9: {
        width: "100%",
        flex: 1,
        justifyContent: 'center', // Center vertically
        alignItems: 'center',
        backgroundColor: 'green'
    },
    box10: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        // justifyContent: 'center', // Center vertically
        // alignItems: 'center',
        // backgroundColor: 'red'
    },
    box11: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        // justifyContent: 'center', // Center vertically
        // alignItems: 'center',
        // backgroundColor: 'yellow'
    },
    box2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center', // Center vertically
        alignItems: 'center',
    },
    box3: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "red"
        // justifyContent: 'center', // Center vertically
        //  alignItems: 'center',
    },
    text: {

        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: 20,
    },
    button: {
        justifyContent: 'center', // Center vertically
        alignItems: 'center',
        width: 350,
        height: 42,
        backgroundColor: "#E33939",
        borderRadius: 20,

    },
    buttonText: {
        fontSize: 12,
    },
    profile: {
        fontSize: 20,
        color: "#FFF"
    },
    icon: {
        width: 25,
        height: 25,
        resizeMode: 'center',
        // position: 'relative',
        // marginRight: 100
    },
    image: {

        borderRadius: 100
    },
    name: {
        color: "#FFF",
        fontSize: 16,
        marginTop: 20

    },

    userPic: {
        marginRight: 20,
        marginLeft: 45,
        // marginTop:30,
        width: 25,
        height: 25,
    },
    account: {
        fontSize: 16,
        color: "#FFF"

    },

    arrow: {
        width: 25,
        height: 25,
        resizeMode: 'center',
        marginTop: 15,
        marginRight: 40,

    },

    acountText: {
        fontSize: 12,
        color: "rgba(255, 255, 255, 0.15)",

    },
    closeCircle: {
        width: 25,
        height: 25,
        resizeMode: 'center',
         position: "absolute",
        // marginLeft: 100,
        // marginRight:100
    }



});

export default Profile;

