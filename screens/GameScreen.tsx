import { View, StyleSheet } from "react-native";
import Hand, { CardInfo } from "../components/Hand";

export default function GameScreen({ hands }: GameScreenArgs) {
  return (
    <View style={[styles.flexSpaceBetween, styles.container]}>
      <Hand cardList={hands[0]} orientation={"horizontal"} playerName={"Player 1"} handPosition="top" />
      <View style={[styles.row, styles.flexSpaceBetween]}>
        <Hand cardList={hands[1]} orientation={"vertical"} playerName={"Player 2"} handPosition="left" />
        <Hand cardList={hands[2]} orientation={"vertical"} playerName={"Player 3"} handPosition="right" />
      </View>
      <Hand cardList={hands[3]} orientation={"horizontal"} playerName={"Player 4"} handPosition="bottom" currentPlayer />
    </View>
  );
}

interface GameScreenArgs {
  hands: CardInfo[][]
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  },
  flexSpaceBetween: {
    justifyContent: "space-between"
  },
  container: {
    height: "100%",
    width: "100%",
    paddingVertical: 50,
    paddingHorizontal: 20
  }
});