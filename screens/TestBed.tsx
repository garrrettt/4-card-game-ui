import { StyleSheet, Text, View } from "react-native";
import PlayingCard from "../components/PlayingCard";
import BottomActionTabDrawer from "../components/BottomActionTabDrawer";
import BottomActionTab from "../components/BottomActionTab";
import PlayerLabel from "../components/PlayerLabel";
import Hand, { CardInfo } from "../components/Hand";
import GameScreen from "./GameScreen";

const mockCardData: CardInfo[] = [
  {value: 5, selected: false, outlined: false, side: "front"},
  {value: 7, selected: true, outlined: false, side: "back"},
  {value: 2, selected: false, outlined: false, side: "back"},
  {value: 9, selected: false, outlined: false, side: "front"},
];

const mockCardData2: CardInfo[] = [
  {value: 5, selected: false, outlined: false, side: "front"},
  {value: 7, selected: false, outlined: false, side: "back"},
  {value: 2, selected: false, outlined: false, side: "back"},
  {value: 9, selected: false, outlined: false, side: "front"},
];

export default function TestBed({ showcase }: TestBedArgs) {
  let inner: React.ReactNode = null;

  if (showcase == "card_front") {
    inner = <PlayingCard dir={"front"} value={1} />
  } else if (showcase == "card_back") {
    inner = <PlayingCard dir={"back"} value={1} />
  } else if (showcase == "card_horizontal") {
    inner = <PlayingCard orientation={"left"} value={1} />
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
  } else if (showcase == "player_label_current") {
    inner = <PlayerLabel current text={"Garrett"} />
  } else if (showcase == "player_label") {
    inner = <PlayerLabel text={"Garrett"} />
  } else if (showcase == "hand") {
    inner = <Hand cardList={mockCardData} orientation={"vertical"} playerName={"Garrett"} handPosition={"left"}></Hand>
  } else if (showcase == "game") {
    inner = <GameScreen hands={[mockCardData2, mockCardData2, mockCardData2, mockCardData2]} />
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
  | "player_label"
  | "player_label_current"
  | "hand"
  | "game"
}