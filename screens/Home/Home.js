import  React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Dimensions,Image,FlatList,SafeAreaView} from 'react-native';

import serviceData from './Data';



const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Home= ({navigation}) => {
  return (
    <SafeAreaView>
<FlatList
data={serviceData}
contentInset={{padding:12}}
renderItem={({item}) =>{
  return(
    <TouchableOpacity onPress ={() => navigation.navigate('Detail')} style={{margin:10, height:windowHeight*0.2,backgroundColor:item.bgColor,borderRadius:10}}>
      <View style={{backgroundColor:item.bgColor}}>
      <Text style={styles.category}>
        {item.category}
      </Text>
      <Text style={styles.name}>
        {item.name}
      </Text>
      <Text>
        {item.numberCompany}
        
      </Text>
      </View>
      <Image style={{height:cardHeight * 0.8, width: cardWidth * 1,position:'absolute',right:0,margin:10,bottom:0}}
      source={item.image}/>
    </TouchableOpacity>
  )
}}
>
</FlatList>
 </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
   
    category:{
       fontSize:24,
       fontWeight:200,
       color:'white'
      },
      name:{
       fontSize:18,
       color:'white'
      },
});

export default Home;