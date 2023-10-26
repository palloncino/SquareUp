import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

type ExplorerPageProps = {
  navigation: StackNavigationProp<any, 'Explorer'>;
};

const Explorer = ({navigation}: ExplorerPageProps) => {
  return (
    <View style={styles.container}>
      <Text>Explorer Page</Text>
      <Button
        title="Go to ImageModifier"
        onPress={() => navigation.navigate('ImageModifier')}
      />
      <Button
        title="Go to VideoModifier"
        onPress={() => navigation.navigate('VideoModifier')}
      />
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

export default Explorer;
