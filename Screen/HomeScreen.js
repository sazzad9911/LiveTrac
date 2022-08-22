import React from 'react';
import { View,Text , StatusBar} from 'react-native';
import { ScrollView } from 'react-native';
import Cart from '../Components/Cart';
import FoodItem from '../Data/FoodItem.json';


function HomeScreen(props) {
   
   
    const [Data, setData] = React.useState(null);

    React.useEffect(()=>{
        
        

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