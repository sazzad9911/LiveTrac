import React from 'react';
import { View, Text, Dimensions,TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Bottom(props) {
    const window = Dimensions.get('window')
    const navigation=useNavigation()
    return (
        <View style={{
            height: 80,
            backgroundColor: 'white',
            flexDirection: 'row',
            borderRadius: 20,
            overflow: 'visible'

        }}>
            <TouchableOpacity onPress={() => { navigation.navigate('Home Screen') }} style={{
                width: window.width / 5,
                height: window.width / 5,
                borderRadius: window.width / 10,
                backgroundColor: 'white',
                marginBottom: 30,
                position: 'absolute',
                zIndex: 40,
                bottom: 4,
                left: '40%',
                alignItems: 'center',
                shadowOffset:{
                    height:1,
                    width:1,
                },
                shadowColor:'black',
                shadowOpacity:.5,
                elevation:5,
                shadowRadius:'50%',

            }}>
                <MaterialIcons style={{

                    marginTop: 10,
                }} name="home" size={50} color='#1C2348' />

            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('Location') }} style={{
                flex: 3,

                alignItems: 'center',

            }}>
                <Entypo style={{
                    marginTop: 10,
                }} name="location" size={35} color='#1C2348' />
                <Text style={{
                    color: '#1C2348'
                }}>
                    Location
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('Profile') }} style={{
                flex: 3,
                alignItems: 'center',

            }}>
        
                <FontAwesome style={{
                    marginTop: 10,
                }} name="user" size={35} color='#1C2348' />
                <Text style={{
                    color: '#1C2348'
                }}>
                    Profile
                </Text>

            </TouchableOpacity>


        </View>

    );
}

export default Bottom;