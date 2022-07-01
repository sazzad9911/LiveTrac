import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

function Location(props) {
    return (
        <View style={{
            height:'100%',
            
        }}>
        <MapView style={{
         height:'100%',
         width:'100%',
         }}/>
            
        </View>
    );
}

export default Location;