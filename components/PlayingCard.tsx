import { useRef, useState } from "react";
import { Animated, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";

export default function PlayingCard({ dir = "front", value }: PlayingCardArgs) {
  const onCardPress = () => flip();
  const [rotation, setRotation] = useState(dir == "front" ? 0 : 180);
  const flipAnim = useRef(new Animated.Value(dir == "front" ? 0 : 180)).current;
  flipAnim.addListener(({ value }) => {
    setRotation(value)
  });

  const flipToBack = () => {
    Animated.timing(
      flipAnim,
      {
        toValue: 180,
        duration: 300,
        useNativeDriver: true
      }
    ).start();
  }

  const flipToFront = () => {
    Animated.timing(
      flipAnim,
      {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }
    ).start();
  }

  const flip = () => {
    if (rotation == 0) {
      flipToBack();
    } else {
      flipToFront();
    }
  }

  const flipAnimationStyleFront = { 
    transform: [{ 
      rotateY: flipAnim.interpolate( {
        inputRange: [ 0, 180 ],
        outputRange: [ "0deg", "180deg" ]
      } ),
    }], 
    perspective: 1000
  };

  const flipAnimationStyleBack = { 
    transform: [{ 
      rotateY: flipAnim.interpolate( {
        inputRange: [ 0, 180 ],
        outputRange: [ "180deg", "360deg" ]
      } ),
    }],
    perspective: 1000 
  };

  return (
    <Pressable onPress={onCardPress} style={ styles.playingCardContainer }>
      <Animated.View style={[styles.card_front, styles.flipCardFront, flipAnimationStyleFront]}>
        <Text style={styles.text}>{ value }</Text>
      </Animated.View>
      <Animated.View style={[, styles.card_back, styles.flipCardBack, flipAnimationStyleBack]}>
        <ImageBackground 
          style={styles.card_back_background} 
          resizeMode="stretch" 
          source={require("../assets/card_back.png")} />
      </Animated.View>
    </Pressable>
  );
}

interface PlayingCardArgs {
  dir?: "front" | "back",
  value: number,
}

const styles = StyleSheet.create({
  playingCardContainer: {
    aspectRatio: 3 / 4,
    width: "20%",
    borderRadius: 5,
  },
  playingCardShadow: {
    /* initially placed in both the front/back card animated views, but couldn't get to animated in
    the right directison, so removing for now  */
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4, // for Android
  },
  text: {
    fontSize: 20,
  },
  card_front: {
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  card_back: {
    padding: 2.5,
    backgroundColor: "#D9D9D9",
  },
  card_back_background: {
    width: "100%",
    height: "100%",
  },
  flipCardFront: { /* same for front & back */
    position: "absolute",
    backfaceVisibility: "hidden",
  },
  flipCardBack: {
    backfaceVisibility: "hidden",
  },
  expand: {
    height: "100%",
    width: "100%",
  }
});