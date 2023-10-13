import React, { useEffect } from 'react';
import { View, Image, Animated } from 'react-native';
import { Easing } from 'react-native-reanimated';
const RotatingImage = () => {
    const spinValue = new Animated.Value(30);
  
    useEffect(() => {
      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true
        })
      ).start();
    }, []);
  
    const spin = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '160deg']
    });
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Animated.Image
          source={require('./../../../../assets/images/earth.png')} // Replace with your image path
          style={{ width: 200, height: 200, transform: [{ rotate: spin }] }}
        />
      </View>
    );
  }
  
  export default RotatingImage;
  