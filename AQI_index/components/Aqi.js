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
  Button
} from 'react-native';



const Aqi= (props) => {

    return (
      <View>
        <Text style={styles.disp}>{props.aqi=='' ? '' : "AQI :  "+props.aqi}</Text>
        <Text style={styles.disp}>{props.temp=='' ? '' : "TEMP :  "+props.temp+" C"}</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    disp: {
      marginTop: 35,
      fontSize: 48,
      fontWeight: '300',
      alignSelf:'center',
      color:'white'
    }
  });
  
  export default Aqi;