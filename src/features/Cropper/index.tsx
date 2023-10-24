import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Cropper = () => {
  return (
    <View style={styles.container}>
      <Text>Cropper</Text>
      <Text>
        Upload your image and turn it into a square, then download your image.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Cropper;
