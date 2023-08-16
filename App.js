import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const PlaceholderImage = require('./assets/images/background-image.png');


export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if(!result.cancelled) {
      setSelectedImage(result.assets[0].uri)
    }else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
     <View style={styles.imageContainer}> 
        <ImageViewer 
          placehordelImageSource={PlaceholderImage} 
          selectedImage={selectedImage}
          style={styles.image} 
        />
     </View>
     <View style={styles.FooterContainer}>
        <Button theme="primary" onPress={pickImageAsync} label="Choose a photo" />
        <Button label="Use this photo" />
     </View>
     <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 50,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 10
  },
  FooterContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  }
});
