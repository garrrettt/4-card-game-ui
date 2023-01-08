import { StyleSheet, Text, View } from "react-native";
import PlayingCard from "../components/PlayingCard";
import BottomActionTabDrawer from "../components/BottomActionTabDrawer";
import BottomActionTab from "../components/BottomActionTab";

export default function TestBed({ showcase }: TestBedArgs) {
  let inner: React.ReactNode = null;

  if (showcase == "card_front") {
    inner = <PlayingCard dir={"front"} value={1} />
  } else if (showcase == "card_back") {
    inner = <PlayingCard dir={"back"} value={1} />
  } else if (showcase == "card_horizontal") {
    inner = <PlayingCard orientation={"horizontal"} value={1} />
  } else if (showcase == "card_outlined") {
    inner = <PlayingCard outlined value={1} />
  } else if (showcase == "card_unflippable") {
    inner = <PlayingCard flippable={false} value={1} />
  } else if (showcase == "bottom_action_tab") {
    inner = (
      <BottomActionTabDrawer main={null}>
        <BottomActionTab onPress={() => console.log("Pressed!")}>
          <Text> Garrett drew a Swap card. Select a card or place in discard. </Text>
        </BottomActionTab>
        <BottomActionTab>
          <Text> Knock </Text>
        </BottomActionTab>
        <BottomActionTab>
          <Text> End Turn </Text>
        </BottomActionTab>
      </BottomActionTabDrawer>
    );
  }

  return (
    <View style={styles.container}>
      { inner }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row", 
    width: "100%",
  },
});

interface TestBedArgs { 
  showcase: "card_front" 
  | "card_back" 
  | "card_horizontal"
  | "card_outlined" 
  | "card_unflippable"
  | "bottom_action_tab"
}