import React from 'react';
import { View,Text , StatusBar} from 'react-native';
import { ScrollView } from 'react-native';
import Cart from '../Components/Cart';
import { getFirestore,collection,query } from "firebase/firestore";
import FoodItem from '../Data/FoodItem.json';
import firebase from '../firebase';


function HomeScreen(props) {
    const db = getFirestore(firebase);
    const citiesRef = collection(db, "Foods");
    const [Data, setData] = React.useState(null);

    React.useEffect(()=>{
        const q = query(citiesRef);
        console.log(q)

    },[Data])
    return (
        <ScrollView>
        <StatusBar barStyle={'dark-content'} backgroundColor={'white'}/>

        {
            FoodItem && FoodItem.length>0?(
                FoodItem.map((data,i)=>(
                    <Cart key={i} data={data}/>
                
                ))
            ):(
<Text>no data</Text>
            )
        }
           
        </ScrollView>
    );
}

export default HomeScreen;