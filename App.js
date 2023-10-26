import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import ImageViewer from "./components/ImageViewer";
import { useState } from "react";
import PressableButton from "./components/PressableButton";

export default function App() {
  const [imageURI, setImageURI] = useState(null);
  async function pickImageAsync() {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (result.canceled) {
      setImageURI(null);
      alert("You did not select any image");
    } else {
      setImageURI(result.assets[0].uri);
    }
  }
  return (
    <View style={styles.container}>
      <ImageViewer imageURI={imageURI} />
      <View>
        <PressableButton
          type="primary"
          label="Choose a photo"
          onPress={pickImageAsync}
        />
        <PressableButton
          label="Use this photo"
          onPress={() => console.log("pressed")}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 40,
  },
  bgImage: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
