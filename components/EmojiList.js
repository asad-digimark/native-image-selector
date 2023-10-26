import { useState } from "react";
import { FlatList, Image, Platform, Pressable, StyleSheet } from "react-native";

export default function EmojiList({ onSelect }) {
  const [emoji] = useState([
    require("../assets/images/emoji1.png"),
    require("../assets/images/emoji2.png"),
    require("../assets/images/emoji3.png"),
    require("../assets/images/emoji4.png"),
    require("../assets/images/emoji5.png"),
    require("../assets/images/emoji6.png"),
  ]);

  return (
    <FlatList
      data={emoji}
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => {
        return (
          <Pressable onPress={() => onSelect(item)}>
            <Image source={item} key={index} style={styles.emoji} />
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: 6,
    gap: 4,
  },
  emoji: {
    width: 40,
    height: 40,
  },
});
