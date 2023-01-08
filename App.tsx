import TestBed from "./screens/TestBed";
import { StyleSheet, ImageBackground } from "react-native";

const DEV_MODE = true;

export default function App() {
  let content: React.ReactNode = null;

  if (DEV_MODE) {
    content = <TestBed showcase={"player_label_current"} />
  }

  return (
    <ImageBackground source={require('./assets/texture_bg_sm.jpg')} resizeMode="cover" style={styles.background}>
      { content }
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center"
  }
});