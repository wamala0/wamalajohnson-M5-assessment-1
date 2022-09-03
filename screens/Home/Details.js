import React, { Component, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions,TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import ServiceList from './serviceList';
import Loader from '../Loader';



//create a component
const Details = () => {
  const companies = ServiceList
  let refCorousel = null
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location);
    
    })();
  }, []);

  const RenderMarker = () => {
    console.log(ServiceList[0].coord[''])
    return (
      <View>{
      companies.map((maker, index) => {
        return(
        <Marker
          ley={index}
          coordinate={{ latitude: maker.coord['latitude'], longitude: maker.coord['longitude'] }}
          title={maker.name}

        />
        )
      })
    }
    </View>
    )
  }
  const renderCard = () =>{
    return(
      <View style={{backgroundColor:'white'}}>
        <Text>
          {item.name}
        </Text>
        <Text>
          {item.email}
        </Text>
        <Text>
          {item.review}
        </Text>
        <TouchableOpacity>
          <Text>
          Book Me
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
   

    <View style={styles.container}>
      {companies != null?
      <View>
          <MapView style={styles.map}
           initialRegion={{
            latitude: -25.747868,
            longitude: 28.2292714,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}>

        <RenderMarker />
        </MapView>
        <View>
         <Carousel
        ref={(c) => {refCorousel = c; }}
        data = {companies}
        renderltem={renderCard}
        sliderWith={Dimensions.get('window').width}
        itemWith={300}
        containerCustomStyle={styles.carousel}
      />
      </View>

      </View>

      :<Loader/>
     
      }

    </View>
    
  );

};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 's#fff',
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,
    height:'100%'
  },
  map:{
    ...StyleSheet.absoluteFillObject,
    width:Dimensions.get('window').width,
    width:Dimensions.get('window').width,
  }
});
export default Details;