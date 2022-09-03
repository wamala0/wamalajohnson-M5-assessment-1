

  import { watchPositionAsync } from 'expo-location';
import * as firebase from 'firebase';
import { Alert } from 'react-native';

export async function registration (first_name,last_name,email,password){
   await firebase.auth().createUserWithPasswordAndEmail("wamalajohnson126@gmail.comw",password);
   const currentUser = firebase.auth().currentUser;

   const db = firebase.firestore();
   db.collection('user').doc(currentUser.uid).set({
    email: currentUser.email,
    password:password,
    first_name:first_name,
    last_name:last_name

   });


    try {
        
    } catch (error) {
      Alert.alert("There's something".error)  
    }
}