import { StyleSheet, View } from "react-native";
import PlayerLabel from "./PlayerLabel";
import PlayingCard from "./PlayingCard";

export default function Hand({ cardList, orientation, playerName }: HandArgs) {
  const orientationStyle = orientation == "horizontal" ? styles.horizontal : styles.vertical;
  const containerOrientationStyle = orientation == "horizontal" ? styles.vertical : styles.horizontal;
  const selectedCardStyle = (selected: boolean) => {
    if (!selected) return null; // no special styling if this card is not selected
    
    return styles.selectedCard;
  };
  // if cards are in a row, they should all be vertical, opposite for if they're in a column
  const cardOrientation = orientation == "vertical" ? "horizontal" : "vertical";
  return (
    <View style={ [containerOrientationStyle, styles.alignCenter] }>
      <View style={ orientationStyle }>
        { cardList.map(cardInfo =>
          <View style={[ styles.cardContainer, selectedCardStyle(cardInfo.selected) ]}>
            <PlayingCard 
              value={cardInfo.value} 
              dir={cardInfo.side} 
              orientation={cardOrientation} 
              outlined={cardInfo.outlined}
              flippable={true} />
          </View> 
        )}
      </View>
      <View style={ orientationStyle }>
        <PlayerLabel current text={"Garrett"} />
      </View>
    </View>
  );
}

interface HandArgs {
  cardList: CardInfo[],
  orientation: "vertical" | "horizontal",
  playerName: string
}

// Likely will move this into the API file when I make that
export interface CardInfo {
  value: number,
  selected: boolean,
  outlined: boolean,
  side: "front" | "back" 
}

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: "row"
  },
  vertical: {
    flexDirection: "column"
  },
  selectedCard: {
    position: "relative",
    bottom: 30
  },
  alignCenter: {
    alignItems: "center"
  },
  cardContainer: {
    marginHorizontal: 5
  }
});