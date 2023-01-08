import { useRef, useState } from "react";
import { Animated, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";

export default function PlayingCard({ value, flippable = true, dir = "front", orientation = "vertical", outlined = false }: PlayingCardArgs) {
  const onCardPress = () => { if (flippable) flip() };
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

  const orientationStyle = orientation == "horizontal" ? styles.horizontal : null;
  const outlineStyle = outlined ? styles.outlined : null;
  return (
    <Pressable onPress={onCardPress} style={ [styles.playingCardContainer, orientationStyle, outlineStyle] }>
      <Animated.View style={[styles.card_front, styles.flipCardFront, flipAnimationStyleFront]}>
        <Text style={styles.text}>{ value }</Text>
      </Animated.View>
      <Animated.View style={[styles.card_back, styles.flipCardBack, flipAnimationStyleBack]}>
        <ImageBackground 
          style={styles.card_back_background} 
          resizeMode="stretch" 
          source={require("../assets/card_back.png")} />
      </Animated.View>
    </Pressable>
  );
}

interface PlayingCardArgs {
  value: number,
  flippable?: boolean,
  dir?: "front" | "back",
  orientation?: "vertical" | "horizontal",
  outlined?: boolean,
}

const styles = StyleSheet.create({
  playingCardContainer: {
    aspectRatio: 3 / 4,
    width: 70,
  },
  horizontal: {
    transform: [{
      rotate: "90deg"
    }]
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
    height: "100%",
    borderRadius: 5,
  },
  card_back: {
    padding: 2.5,
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
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
  },
  outlined: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#FAFF00",
  }
});