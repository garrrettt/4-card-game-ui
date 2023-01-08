import { StyleSheet, Text, View } from "react-native";

export default function PlayerLabel({ current = false, text }: PlayerLabelArgs) {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>
        { text }
      </Text>
      <Text style={styles.status}>
        { current && "Current Player" }
      </Text>
    </View>
  );
}

interface PlayerLabelArgs {
  current?: boolean,
  text: string
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  headline: {
    fontSize: 30,
    fontWeight: "bold",
  },
  status: {
    fontSize: 12,
    color: "red",
  }
});