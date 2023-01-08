import { StyleSheet, View } from "react-native";
import PlayerLabel from "./PlayerLabel";
import PlayingCard from "./PlayingCard";

export default function Hand({ cardList, orientation, playerName, handPosition }: HandArgs) {
  const orientationStyle = orientation == "horizontal" ? styles.horizontal : styles.vertical;
  const selectedCardStyle = (selected: boolean) => {
    if (!selected) return null; // no special styling if this card is not selected
    
    if (handPosition == "top") {
      return styles.selectedCardTopHand;
    } else if (handPosition == "bottom") {
      return styles.selectedCardBottomHand;
    } else if (handPosition == "left") {
      return styles.selectedCardLeftHand;
    } else if (handPosition == "right") {
      return styles.selectedCardRightHand;
    }
  };
  // if cards are in a row, they should all be vertical, opposite for if they're in a column
  const getCardOrientation = () => {
    if (handPosition == "top") {
      return "down";
    } else if (handPosition == "bottom") {
      return "up";
    } else if (handPosition == "left") {
      return "right";
    } else if (handPosition == "right") {
      return "left";
    }
  }
  const cardOrientation = getCardOrientation();
  return (
    <View style={ [styles.vertical, styles.alignCenter] }>
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
        <PlayerLabel current text={playerName} />
      </View>
    </View>
  );
}

interface HandArgs {
  cardList: CardInfo[],
  orientation: "vertical" | "horizontal",
  playerName: string,
  // describes where a hand is being displayed on the screen
  handPosition: "top" | "bottom" | "left" | "right" 
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
  selectedCardTopHand: {
    position: "relative",
    top: 30
  },
  selectedCardLeftHand: {
    position: "relative",
    left: 30
  },
  selectedCardRightHand: {
    position: "relative",
    right: 30
  },
  selectedCardBottomHand: {
    position: "relative",
    bottom: 30
  },
  alignCenter: {
    alignItems: "center"
  },
  cardContainer: {
    marginHorizontal: 5,
  }
});