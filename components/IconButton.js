import { View, Pressable, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function IconButton({ icon, label, onPress }) {
  return (
    <Pressable
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={onPress}
    >
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text
        style={{
          color: "#fff",
          marginTop: 8,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}
