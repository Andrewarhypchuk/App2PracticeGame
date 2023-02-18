import { useState } from "react";
import {StyleSheet,ImageBackground,SafeAreaView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from "./screens/GameScreen";
import Colors from "./constans/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {

const[userNumber,setUserNumber] = useState('');
const[gameIsOver,setGameIsOver] = useState(true)

function pickedNumberHandler(pickedNumber){
     setUserNumber(pickedNumber)
     setGameIsOver(false)
}
function gameOverHandler(){
  setGameIsOver(true)
}

let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>
if(userNumber){
   screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
}
if(gameIsOver && userNumber){
  screen = <GameOverScreen />
}


  return (
    <LinearGradient colors={[Colors.primary800,Colors.accent500]} style={style.rootScreen}>
      <ImageBackground 
      source={require('./assets/img/background.png')}
      resizeMode='cover'
      style={style.rootScreen}
      imageStyle={style.backGroundImage}
      >
       <SafeAreaView style={style.rootScreen} >{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  rootScreen:{
    flex:1
  },
  backGroundImage:{
    opacity:0.2
  }
})





