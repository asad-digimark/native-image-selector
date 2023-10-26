import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import ImageViewer from "./components/ImageViewer";
import { useState } from "react";
import PressableButton from "./components/PressableButton";
import CircleButton from "./components/CircleButton";
import IconButton from "./components/IconButton";

export default function App() {
  const [imageURI, setImageURI] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);

  async function pickImageAsync() {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (result.canceled) {
      setImageURI(null);
    } else {
      setImageURI(result.assets[0].uri);
      setShowAppOptions(true);
    }
  }

  function onReset() {
    setImageURI(null);
    setShowAppOptions(false);
  }
  function onSaveImageAsync() {
    setShowAppOptions(false);
  }

  return (
    <View style={styles.container}>
      <ImageViewer imageURI={imageURI} />
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <IconButton icon="refresh" label="Reset" onPress={onReset} />
          <CircleButton />
          <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
        </View>
      ) : (
        <View>
          <PressableButton
            type="primary"
            label="Choose a photo"
            onPress={pickImageAsync}
          />
          <PressableButton
            label="Use this photo"
            onPress={() => {
              setShowAppOptions(true);
              console.log("pressed");
            }}
          />
        </View>
      )}
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
  optionsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    // flex: 1,
  },
});
