import React from 'react';
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Input from './../Components/Input';

function Header(props) {
    const [Search, setSearch] = React.useState(null);
    return (
        <View style={{
            height: 80,
            backgroundColor: 'white',
            alignItems: 'center',
        }}>
            <View style={{
                
                width: '90%',
            }}>
                <Input onFocus={() => props.navigation.navigate('Search')} onChange={setSearch} placeholder='Search' icon={() => (
                    <Ionicons name="search" size={24} color='#1C2348' />

                )} />
            </View>


        </View>
    );
}

export default Header