import { View, Pressable, Text, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function PressableButton({ label, type, onPress, ...rest }) {
  switch (type) {
    case "primary":
      return (
        <View
          style={[
            styles.btn,
            {
              borderWidth: 4,
              borderColor: "#ffd33d",
              flexDirection: "row",
              backgroundColor: "#fff",
            },
          ]}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            style={{
              paddingRight: 8,
              color: "#25292e",
            }}
          />
          <Pressable onPress={onPress}>
            <Text style={styles.btnLabel}>{label}</Text>
          </Pressable>
        </View>
      );
    default:
      return (
        <Pressable style={styles.btn} onPress={onPress}>
          <Text
            style={[
              styles.btnLabel,
              {
                color: "#fff",
              },
            ]}
          >
            {label}
          </Text>
        </Pressable>
      );
  }
}

const styles = StyleSheet.create({
  btn: {
    width: 320,
    height: 54,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  btnLabel: {
    fontSize: 16,
  },
});
