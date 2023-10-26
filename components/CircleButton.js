import { View, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
export default function CircleButton({ onPress }) {
  return (
    <View
      style={{
        height: 68,
        width: 68,
        borderColor: "#ffd33d",
        borderWidth: 4,
        borderRadius: 34,
        padding: 3,
      }}
    >
      <Pressable
        onPress={onPress}
        style={{
          flex: 1,
          backgroundColor: "#fff",
          borderRadius: 34,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MaterialIcons name="add" size={38} color="#25292e" />
      </Pressable>
    </View>
  );
}
