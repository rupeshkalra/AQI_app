import React, { useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
 TouchableOpacity,
 ImageBackground,
 Keyboard,Alert
} from 'react-native';

// import {vw, vh, vmin, vmax} from 'react-native-viewport-units';
var {vw, vh, vmin, vmax} = require('react-native-viewport-units');


import axios from "axios";
import Aqi from './components/Aqi';
import { REACT_APP_API_KEY } from '@env';

const App= () => {

  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [aqi, setAqi] = useState('');
  const [temp, setTemp] = useState('');
  
  getAQI=()=>{
    const options = {
      method: 'GET',
      url: 'http://api.airvisual.com/v2/city',
      params: {city:city,state:state ,country: 'India', key: REACT_APP_API_KEY}
    };
    axios.request(options).then(function (response) {
      setAqi(response.data.data.current.pollution.aqius);
      setTemp(response.data.data.current.weather.hu);
    }).catch(function (error) {
      console.error(error);
      Alert.alert(
        "Incorrect City or State name!",
        "Please check spelling and try again",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          { text: "OK"}
        ]
      );
    });
    
    Keyboard.dismiss();
  }
  return (
    <View>
      <ImageBackground source={require('./img/nature.jpg')}  style={styles.image}>
    
      <Text style={styles.heading}>AQI Index</Text>
      <TextInput style={styles.input} placeholder='Enter City Name' onChangeText={newText => setCity(newText)}></TextInput>
      <TextInput style={styles.input} placeholder='Enter State Name' onChangeText={newText => setState(newText)}></TextInput>
      <TouchableOpacity style={styles.btn} onPress={getAQI} ><Text style={{color:'white', fontSize:25}}>Find</Text></TouchableOpacity>

      <Aqi aqi={aqi} temp={temp}/>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginTop: 100,
    marginBottom:40,
    alignItems:'center',
    alignSelf:'center',
    paddingHorizontal: 24,
    fontSize: 24,
    fontWeight: '600',
  },
  input:{
    marginTop: 20,
    marginLeft:50,
    marginRight:50,
    padding:10,
    borderStyle:'solid',
    borderColor:'black',
    borderWidth:1,
    borderRadius:12
  },
  disp:{
    marginTop:50,
    fontSize:20,
    alignItems:'center',
    alignSelf:'center'
  },
  btn:{
    marginTop:40,
    marginBottom:40,
    borderRadius:10,
    padding:10,
    alignSelf:'center',
    backgroundColor:'blue'
  },image: {
    height:800,
  }
});

export default App;
