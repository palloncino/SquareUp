import React, {useState} from 'react';
import {Button, View} from 'react-native';
import {MediaType, launchImageLibrary} from 'react-native-image-picker';
import Video from 'react-native-video';
import RNFS from 'react-native-fs';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';

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

      let base64 = await response.text();
      let filePath = `${RNFS.DocumentDirectoryPath}/processed_video.mp4`;
      await RNFS.writeFile(filePath, base64, 'base64');
      setVideo(undefined);
      setVideo(filePath);
      await CameraRoll.saveToCameraRoll(filePath, 'video');
      await RNFS.unlink(filePath);
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
