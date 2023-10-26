import { Image } from "react-native";
import defaultImage from "../assets/images/background-image.png";

export default function ImageViewer({ imageURI }) {
  return (
    <Image
      source={imageURI ? { uri: imageURI } : defaultImage}
      style={{
        width: 320,
        height: 440,
        borderRadius: 18,
      }}
      resizeMode="cover"
    />
  );
}
