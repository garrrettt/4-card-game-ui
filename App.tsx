import TestBed from "./screens/TestBed";
import { StyleSheet, ImageBackground } from "react-native";

const DEV_MODE = true;

export default function App() {
  if (DEV_MODE) {
    return (
      <ImageBackground source={require('./assets/texture_bg_sm.jpg')} resizeMode="cover" style={styles.background}>
        <TestBed showcase={"card_front"} />
      </ImageBackground>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center"
  }
});