import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class fb extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity>
                    <Text>Khan Academy</Text>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../khan.png')}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
      justifyContent: 'center',
      alignSelf: 'center',
      borderWidth: 2,
      borderRadius: 50,
      marginTop: 75,
      width: 200,
      height: 50
    },
    showertext: {
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      color: "black",
      marginLeft: -20,
      marginTop: 10
    },
  
    ratingContainer: {
      paddingTop: 50,
    },
  
    tinyLogo: {
      width: 100,
      height: 100,
      marginLeft: 100,
      marginTop: -0,
    },
  
    tinyLogo2: {
      width: 50,
      height: 50,
      marginLeft: 200,
      marginTop: -65,
    },
  
    liketext: {
      marginLeft: 200,
      marginTop: -25,
    },
  
    distext: {
      marginLeft: 100,
      marginTop: -25,
    }
  })