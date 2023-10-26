import { View, Image } from "react-native";

export default function EmojiSticker({ stickerSource, size }) {
  return (
    <View
      style={{
        top: -350,
      }}
    >
      <Image
        source={stickerSource}
        resizeMode="contain"
        style={{
          width: size,
          height: size,
        }}
      />
    </View>
  );
}
