import { StyleSheet, Text, View } from "react-native";

export default function BottomActionTabDrawer({ main, children }: BottomActionTabDrawerArgs)  {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        { main }
      </View>
      <View style={styles.footer}>
        { children }
      </View>
    </View>
  );
}

interface BottomActionTabDrawerArgs {
  main: React.ReactNode,
  children: React.ReactNode
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1
  },
  footer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
});