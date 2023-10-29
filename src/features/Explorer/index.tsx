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
        style={styles.square}
        onPress={() => navigation.navigate('ImageModifier')}>
        <Text style={styles.text}>Square Images</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.square, styles.blueSquare]}
        onPress={() => navigation.navigate('VideoModifier')}>
        <Text style={styles.text}>Square Videos</Text>
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
    backgroundColor: '#E5C07B',
  },
  blueSquare: {
    backgroundColor: '#E06C75',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});

export default Explorer;
