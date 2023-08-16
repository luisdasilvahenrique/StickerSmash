import { Image } from "react-native";
import { StyleSheet } from 'react-native';

export default function ImageViewer({ placehordelImageSource, selectedImage }) {
    const imageSource = selectedImage ? { uri: selectedImage } : placehordelImageSource;
    return (
        <Image source={imageSource} style={styles.image} />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18
    }
})