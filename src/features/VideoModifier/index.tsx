import React, {useState} from 'react';
import {Button, View} from 'react-native';
import {MediaType, launchImageLibrary} from 'react-native-image-picker';
import {ProcessingManager} from 'react-native-video-processing';

const VideoModifier = () => {
  const [video, setVideo] = useState<any>(null);

  const pickVideo = () => {
    const options = {
      mediaType: 'video' as MediaType,
      noData: true,
    };

    launchImageLibrary(options, ({didCancel, errorMessage, assets}) => {
      if (didCancel) {
        console.log('User cancelled video picker');
      } else if (errorMessage) {
        console.log('ImagePicker Error: ', errorMessage);
      } else if (assets) {
        const videoFile = assets[0].uri;
        setVideo(videoFile);
      } else {
        console.log('error in launchImageLibrary');
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
