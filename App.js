import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';

const PlaceholderImage = require('./assets/images/background-image.png');


export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.imageContainer}> 
        <ImageViewer placehordelImageSource={PlaceholderImage} style={styles.image} />
     </View>
     <View style={styles.FooterContainer}>
        <Button theme={primary} label="Choose a photo" />
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
    borderRadius: 18
  },
  FooterContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  }
});
