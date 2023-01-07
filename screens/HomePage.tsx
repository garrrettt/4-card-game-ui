import { View, ImageBackground, Text, StyleSheet } from 'react-native';
import { useFonts, LuckiestGuy_400Regular } from '@expo-google-fonts/luckiest-guy';
import NameField from '../components/NameField';
import Button from '../components/Button';
import { useState } from 'react';

export default function HomePage() {
  let [fontsLoaded] = useFonts({
    LuckiestGuy_400Regular,
  });
  let [nameText, onChangeText] = useState("");

  if (!fontsLoaded) return null;
  const isButtonDisabled = () => nameText.length == 0;

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/texture_bg_sm.jpg')} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>4 Card Game</Text>
        <NameField text={nameText} onChangeText={onChangeText} />
        <Button text={"New Game"} disabled={isButtonDisabled()} onPress={() => console.log("Hello world ;)")} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text:{
    color: "black",
    fontSize: 42,
    textAlign: "center",
    fontFamily: "LuckiestGuy_400Regular",
    marginBottom: 10,
  }
});