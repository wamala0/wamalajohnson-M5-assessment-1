import  React from 'react'
import { View, Text, StyleSheet,} from 'react-native'

import maid from '../src/maid.jpg';
const Splash = ({navigation}) => {

    setTimeout(()=>{
        navigation.navigate('Login')
        },2000 )
    return(
      <View style={styles.container}>
        <img src={maid} alt=""/>
        <Text style={{fontSize: 20, color:"#fff"}}>
          Just a SplashScreen
        </Text>
        

      </View>
    )
  }
 

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#008080',
   
  }
});
export default Splash;