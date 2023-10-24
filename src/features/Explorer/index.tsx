import React from 'react';
import {View, Text, Button} from 'react-native';

const Explorer = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Explorer Page</Text>
      <Button
        title="Go to ChatUp"
        onPress={() => navigation.navigate('ChatUp')}
      />
    </View>
  );
};

export default Explorer;
