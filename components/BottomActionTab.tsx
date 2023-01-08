import { StyleSheet, Pressable } from "react-native";

export default function BottomActionTab({ children, onPress }: BottomActionTabArgs) {
  return (
    <Pressable onPress={onPress} style={styles.tab}>
      { children }
    </Pressable>
  );
}

interface BottomActionTabArgs {
  children: React.ReactNode,
  onPress?: VoidFunction
}

const styles = StyleSheet.create({
  tab: {
    padding: 10,
    marginLeft: 10,
    minHeight: 50,
    width: "30%",
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4, // for Android
  }
});