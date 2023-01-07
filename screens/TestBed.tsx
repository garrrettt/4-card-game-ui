// Here I want to visualize the different components including...
// - back of card
// - front of card
// - both types of cards with an outline
// - both types of cards with a highlight
// - resized card (both front/back)
// - Bottom action tab

import { StyleSheet, View } from "react-native";
import PlayingCard from "../components/PlayingCard";

export default function TestBed({ showcase }: TestBedArgs) {
  let inner: React.ReactNode = null;

  if (showcase == "card_front") {
    inner = <PlayingCard dir={"front"} value={1} />
  } else if (showcase == "card_back") {
    inner = <PlayingCard dir={"back"} value={1} />
  } else if (showcase == "card_horizontal") {
    inner = <PlayingCard orientation={"horizontal"} value={1} />
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
  | "card_front_outline" 
  | "card_back_outline"
  | "card_front_highlight"
  | "card_back_highlight"
  | "bottom_action_tab"
}