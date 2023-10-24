import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ChatUpPage = () => {
  return (
    <View style={styles.container}>
      <Text>ChatUp Page</Text>
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

export default ChatUpPage;
