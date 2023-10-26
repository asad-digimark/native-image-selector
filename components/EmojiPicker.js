import { Modal, View, Text, Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function EmojiPicker({ isVisible, children, onClose }) {
  console.log("child = ", children);
  return (
    <Modal animationType="slide" transparent visible={isVisible} style={{}}>
      <View
        style={{
          height: "28%",
          width: "100%",
          borderWidth: 1,
          position: "absolute",
          bottom: 0,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          backgroundColor: "#25292e",
          // flexDirection: "row",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: "16%",
            backgroundColor: "#464C55",
            paddingHorizontal: 16,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
            }}
          >
            Choose a sticker
          </Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" size={22} color="#fff" />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}
