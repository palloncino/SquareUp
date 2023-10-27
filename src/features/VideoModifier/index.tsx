import React, {useState} from 'react';
import {Button, View} from 'react-native';
import {ProcessingManager} from 'react-native-video-processing';
import {launchImageLibrary} from 'react-native-image-picker';

const VideoModifier = () => {
  const [video, setVideo] = useState<any>(null);

  const pickVideo = () => {
    const options = {
      mediaType: 'video',
      noData: true, // To improve performance by not including a base64-encoded string of the image data in the response object.
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled video picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const videoFile = response.uri;
        setVideo(videoFile);
      }
    });
  };

  const processVideo = async () => {
    const options = {
      width: 300,
      height: 300,
      // other processing options
    };
    const newVideo = await ProcessingManager.crop(video, options);
    console.log('Processed video path: ', newVideo); // Processed video path
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Pick a Video" onPress={pickVideo} />
      {video && <Button title="Process Video" onPress={processVideo} />}
      {/* Optionally, display a video player component to preview the video */}
    </View>
  );
};

export default VideoModifier;
