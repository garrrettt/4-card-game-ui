import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Button({ text, disabled = false, onPress }: ButtonArgs) {
  if (disabled) {
    return (
      <View>
        <Pressable onPress={onPress} style={styles.pressableDisabled}>
          <Text style={styles.textDisabled}>{text}</Text>
        </Pressable>
    </View>
    );
  } else {
    return (
      <View>
        <Pressable onPress={onPress} style={styles.pressable}>
          <Text style={styles.text}>{text}</Text>
        </Pressable>
      </View>
    );
  }
}

interface ButtonArgs {
  text: string,
  disabled?: boolean,
  onPress: VoidFunction
}

const styles = StyleSheet.create({
  pressable: {
    alignSelf: "center",
    paddingHorizontal: 25,
    paddingVertical: 5,
    backgroundColor: "#EFEFEF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4, // for Android
    borderRadius: 5,
  },
  text: {
    fontWeight: "bold",
  },
  pressableDisabled: {
    alignSelf: "center",
    paddingHorizontal: 25,
    paddingVertical: 5,
    backgroundColor: "#BBBBBB",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4, // for Android
    borderRadius: 5,
  },
  textDisabled: {
    fontWeight: "bold",
    color: "#8F8F8F",
  }
});