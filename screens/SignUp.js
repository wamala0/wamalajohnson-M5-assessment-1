import  React from 'react'
import { StyleSheet, Text, View, TextInput,TouchableOpacity,Dimensions,SafeAreaView } from 'react-native';
import maid from '../src/maid.jpg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = ({navigation}) => {

  const [first_name,setFirst_name] = useState('')
  const [last_name,setLast_name] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  
  const SignUp = () =>{
    registration(email,password,first_name,last_name)
  }
 
  return (
    <SafeAreaView style={styles.container}>
      
      <img src={maid} alt=""/>
        
     <Text style={styles.welcome}> SignUp View</Text>
     <TextInput
     style = {styles.input}
     placeholder=" Enter First Name"
     value={first_name}
     name = 'first_name'
     onChangeText={(text) =>{setFirst_name(text)}}
     />
     <TextInput
     style = {styles.input}
     placeholder="Enter Last Name"
     value={last_name}
     name = 'last_name'
     onChangeText={(text) =>{setLast_name(text)}}
     />
     <TextInput
     style = {styles.input}
     placeholder="Enter Email"
     value={email}
     name = 'email'
     onChangeText={(text) =>{setEmail(text)}}
     />
     <TextInput
     style = {styles.input}
     underlineColorAndroid='rgba(0,0,0,0)'
     placeholder="Enter Password"
     secureTextEntry={true}
     value={password}
     name = 'password'
     onChangeText={(text) =>{setPassword(text)}}
     />
      <TextInput
      underlineColorAndroid='rgba(0,0,0,0)'
     style = {styles.input}
     placeholder="Confirm Password"
     secureTextEntry={true}
     value={password}
     name = 'password'
     onChangeText={(text) =>{setPassword(text)}}
     />
     <View style={styles.btnContainer}>
     <TouchableOpacity style={styles.userBtn} onPress ={() => navigation.navigate('Home')}>
        <Text style={styles.btnTxt}>
            SignUp
        </Text>
     </TouchableOpacity >
     <TouchableOpacity style={styles.userBtn} onPress ={() => navigation.navigate('Login')}>
     <Text style={styles.btnTxt}>
     If you have an account? Login Here
     </Text>
     </TouchableOpacity>
     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 30,
    backgroundColor: '#1e90ff',
    color: "#fff",
    margin:10,
    textAlign: 'center',
   
  },
  input: {
   width: "90%",
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
  },
  btnContainer: {
   flexDirection: "row",
   justifyContent:"space-between",
   width:"90%"
   },
   userBtn: {
    backgroundColor:"green",
     padding:15,
     width:"45%",
     margin:5,
     borderRadius:10
    },
    btnTxt: {
        fontSize: 15,
        textAlign:"center",
        fontWeight: "bold"
        },
});

export default Login;