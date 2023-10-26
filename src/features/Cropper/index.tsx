import React, {useState, useRef} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import ViewShot from 'react-native-view-shot';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';

const Cropper = () => {
  const [image, setImage] = useState<any>(null);
  const viewShotRef = useRef<ViewShot>(null);

  const pickImage = async () => {
    const _img = await ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: false,
      includeBase64: true,
    });
    const {path, width, height} = _img;
    setImage({
      uri: path,
      width: width,
      height: height,
    });
  };

  const downloadImage = async () => {
    if (viewShotRef.current && viewShotRef.current.capture) {
      try {
        const uri = await viewShotRef.current.capture();
        const savedPath = await CameraRoll.saveToCameraRoll(uri, 'photo');
        console.log('Image captured at', savedPath);
      } catch (error) {
        console.error('Error saving image: ', error);
      }
    }
  };

  const maxDimension = 300;
  const aspectRatio = image?.width / image?.height;
  const newWidth = aspectRatio >= 1 ? maxDimension : maxDimension * aspectRatio;
  const newHeight =
    aspectRatio >= 1 ? maxDimension / aspectRatio : maxDimension;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <Text>Pick an Image</Text>
      </TouchableOpacity>
      {image && (
        <ViewShot ref={viewShotRef} options={{format: 'jpg', quality: 0.9}}>
          <View style={styles.imageContainer}>
            <Image
              source={image}
              style={{width: newWidth, height: newHeight}}
            />
          </View>
        </ViewShot>
      )}
      {image && (
        <TouchableOpacity onPress={downloadImage}>
          <Text>Download Image</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Cropper;
