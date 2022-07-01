import React from 'react';
import { View, ScrollView, Text,Image, Dimensions, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg';


function Profile(props) {
    const window = Dimensions.get('window')
    const xml = `
    

    <svg xmlns="http://www.w3.org/2000/svg" width="391.977" height="232.706" viewBox="0 0 391.977 232.706">
    <g id="Group_1" data-name="Group 1" transform="translate(0.606 1.617)">
      <path id="Path_1" data-name="Path 1" d="M0,189c201.019,93.543,390.87,0,390.87,0V-1.117H0S1.117,185.384,0,189Z" fill="#1c2348" stroke="#707070" stroke-width="1"/>
      <ellipse id="Ellipse_3" data-name="Ellipse 3" cx="44" cy="43" rx="44" ry="43" transform="translate(58 103)" fill="#212665"/>
      <path id="Polygon_1" data-name="Polygon 1" d="M49,0l9.8,24L98,40,49,32,0,40,39.2,24Z" transform="translate(48 25)" fill="#212665"/>
      <g id="Polygon_2" data-name="Polygon 2" transform="translate(286 65)" fill="none">
        <path d="M29.25,0l-3.9,15.2L39,19,25.35,22.8,29.25,38,19.5,26.6,9.75,38l3.9-15.2L0,19l13.65-3.8L9.75,0,19.5,11.4Z" stroke="none"/>
        <path d="M 13.82756423950195 7.844696044921875 L 16.07428932189941 16.60116004943848 L 7.4573974609375 19 L 16.07428932189941 21.39883995056152 L 13.82756996154785 30.15530395507812 L 19.5 23.52291870117188 L 25.17243194580078 30.15530395507812 L 22.92571067810059 21.39883995056152 L 31.5426025390625 19 L 22.92571067810059 16.60116004943848 L 25.17243194580078 7.844696044921875 L 19.5 14.47707939147949 L 13.82756423950195 7.844696044921875 M 9.749990463256836 0 L 19.5 11.39999961853027 L 29.25 0 L 25.35000038146973 15.20000076293945 L 39 19 L 25.35000038146973 22.79999923706055 L 29.25 38 L 19.5 26.60000038146973 L 9.75 38 L 13.64999961853027 22.79999923706055 L 0 19 L 13.64999961853027 15.20000076293945 L 9.749990463256836 0 Z" stroke="none" fill="#707070"/>
      </g>
    </g>
  </svg>
  
`;


    return (
        <ScrollView style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'transparent',
            flexDirection: 'column',
            overflow: 'visible',


        }}>
            <SvgXml style={{
                position: 'absolute',
                zIndex: -4,
                top: -4,
            }} xml={xml} width={window.width} />
            <View style={{
                width: window.width / 4,
                height: window.width / 4,
                borderRadius: window.width / 8,
                borderWidth: 2,
                borderColor: '#808080',
                position: 'absolute',
                top: 120,
                left: (window.width / 2) - (window.width / 8),
                zIndex: 60,
                bottom: 6,

                alignItems: 'center',
                shadowOffset: {
                    height: 1,
                    width: 1,
                },
                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: .5,
                shadowRadius: '50%',
                overflow: 'hidden',

            }}>
                <Image style={{
                    height: '100%',
                    width: '100%',
                    backgroundColor:'red'
                }} source={require('../assets/favicon.png')} />
            </View>

            <View style={{
                height: 500,
                backgroundColor: 'white',
                margin: 20,
                borderRadius: 20,
                marginTop: 170,
                alignItems: 'center',
                shadowOffset: {
                    height: 1,
                    width: 1,
                },
                shadowColor: 'black',
                shadowOpacity: 5,
                elevation: .5,
                shadowRadius: '50%'
            }}>
                <Text style={{
                    marginTop: 60,
                    textAlign: 'center',
                    fontWeight: 'bold',

                }}>
                    Eng.Md.Sazzad Hossain
                </Text>
                <Text style={{
                    textAlign: 'center',
                }}>
                    sazzad15-2521@diu.edu.bd
                </Text>
                <View style={{
                    height: 1,
                    width: '100%',
                    backgroundColor: '#808080',
                    marginTop: 10,
                }}>

                </View>
                <View style={{
                    height: 30,
                    flexDirection: 'row',
                    marginTop: 10,
                }}>
                    <View style={
                        styles.row

                    }>
                        <FontAwesome style={{
                            marginLeft: 8,
                        }} name="user" size={24} color="black" />

                    </View>
                    <TextInput style={
                        styles.input
                    }>
                    </TextInput>

                </View>
                <View style={{
                    height: 30,
                    flexDirection: 'row',
                    marginTop: 10,
                }}>
                    <View style={
                        styles.row

                    }>
                        <FontAwesome style={{
                            marginLeft: 8,
                        }} name="phone" size={24} color="black" />

                    </View>
                    <TextInput style={
                        styles.input
                    }>
                    </TextInput>

                </View>
                <View style={{
                    height: 30,
                    flexDirection: 'row',
                    marginTop: 10,
                }}>
                    <View style={
                        styles.row

                    }>
                        <MaterialCommunityIcons style={{
                            marginLeft: 4,
                        }} name="email-outline" size={24} color="black" />

                    </View>
                    <TextInput style={
                        styles.input
                    }>
                    </TextInput>

                </View>
                <View style={{
                    height: 30,
                    flexDirection: 'row',
                    marginTop: 10,
                }}>
                    <View style={
                        styles.row
                    
                    }>
                        <Fontisto style={{
                            marginLeft: 5,
                        }} name="date" size={20} color="black" />

                    </View>
                    <TextInput style={
                        styles.input
                    }>
                    </TextInput>

                </View>

            </View>


        </ScrollView>
    );
}

export default Profile;
const styles = StyleSheet.create({
    row: {
        height: 34,
        width: 34,
        flexDirection: 'row',
        borderColor: '#808080',
        borderRadius: 17,
        borderWidth: 1,
        alignItems: 'center',
        marginLeft: 10,
    },
    input: {
        height: 34,
        marginRight: 10,
        flex: 7,
        marginLeft: 10,
        borderColor: '#808080',
        borderWidth: 1,
        borderRadius: 17,
        paddingLeft: 10,
        paddingRight: 10,
        
    }
})