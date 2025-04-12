import { StyleSheet, View, Text, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
// import {useNavigation} from '@react-navigation/native';
type Props = {
  label: string;
    theme?: "primary";
    onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
  if (theme === "primary") {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderColor: "green", borderWidth: 4, borderRadius: 18 },
        ]}
      >
        <Pressable
        //   onPress={() => alert("You pressed a button.")}
          onPress={onPress}
          style={[styles.button, { backgroundColor: "#fff" }]}
        >
          <FontAwesome
            name="picture-o"
            size={24}
            color="black"
            style={styles.buttonIcon}
          />

          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={() => alert("You pressed a button.")}
        style={styles.button}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#25292e",
    marginHorizontal: 20,
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
