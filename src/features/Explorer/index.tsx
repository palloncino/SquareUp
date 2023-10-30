import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

type ExplorerPageProps = {
  navigation: StackNavigationProp<any, 'Explorer'>;
};

const Explorer = ({navigation}: ExplorerPageProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.square, styles.ImageSquare]}
        onPress={() => navigation.navigate('ImageModifier')}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Square Images</Text>
          <Text style={styles.text}>
            Make your image 1:1 ratio by adding background to it, so you can
            post it on social media without having to resize the original ratio
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.square, styles.VideoSquare]}
        onPress={() => navigation.navigate('VideoModifier')}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Square Videos</Text>
          <Text style={styles.text}>
            Edit your video to match a 1:1 ratio by adding background of choice
            (color), so you can post it on social media without having to resize
            the original ratio
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  square: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    border: '20 solid white',
  },
  ImageSquare: {
    backgroundColor: '#CF6F7E',
  },
  VideoSquare: {
    backgroundColor: '#9199BD',
  },
  textContainer: {
    marginLeft: 16,
    marginRight: 16,
  },
  title: {
    fontSize: 32,
    marginBottom: 4,
    color: 'white',
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});

export default Explorer;
