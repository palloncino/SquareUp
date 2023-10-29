import React, {useState} from 'react';
import {Button, View} from 'react-native';
import {MediaType, launchImageLibrary} from 'react-native-image-picker';
import Video from 'react-native-video';

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

  async function uploadVideo() {
    try {
      let formData = new FormData();

      formData.append('video', {
        uri: video,
        type: 'video/mov',
        name: 'video.mov',
      });
      formData.append('bgcolor', 'red');

      let response = await fetch('http://127.0.0.1:3000/api/video-upload', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      let blob = await response.blob();
      let url = URL.createObjectURL(blob);
      console.log(url); // example: blob:C1311375-A785-4DF3-A83A-DA4D2C624FB6?offset=0&size=41230
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Pick a Video" onPress={pickVideo} />
      {video && (
        <>
          <Button title="Process Video" onPress={uploadVideo} />
          <Video
            source={{uri: video}}
            style={{width: '100%', height: 300}}
            controls={true}
          />
        </>
      )}
    </View>
  );
};

export default VideoModifier;
