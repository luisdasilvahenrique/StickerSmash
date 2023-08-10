import { Image } from "react-native";
import { StyleSheet } from 'react-native';

export default function ImageViewer({ placehordelImageSource }) {
    return (
        <Image source={placehordelImageSource} style={styles.image} />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18
    }
})