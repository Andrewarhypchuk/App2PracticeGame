import { Alert, StyleSheet,Text, View } from "react-native";
import { useState,useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";



function generateRandomBetween(min, max, exclude) {
const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }
let minBoundary = 1;
let maxBoundary = 100;

  function GameScreen({userNumber,onGameOver}){
   const initialGuess = generateRandomBetween(1,100,userNumber)
   const[currentGuess,setCurrentGuess]=useState(initialGuess);
   useEffect(()=>{
        if(currentGuess === userNumber){
            onGameOver();
        }
   },[currentGuess,userNumber,onGameOver])
   function nextGuessHandler(direction){
      if(
        (direction === 'lower' && currentGuess < userNumber ) || (direction === 'greater' && currentGuess > userNumber )
      ){
        Alert.alert("Don't lie!","You know that this is wrong...",[{text:'Sorry!',style,style:'cancel'}])
          return 
      }
      if(direction === 'lower'){
        maxBoundary = currentGuess;
      }else{
        minBoundary = currentGuess + 1;
  
      }
      const newRandowNumber = generateRandomBetween(minBoundary,maxBoundary,currentGuess)
      setCurrentGuess(newRandowNumber)
   }


    return <View style={style.screen}>
        <Title>Opponent's Guess</Title>
             {/* {Guess} */}
             <NumberContainer>{currentGuess}</NumberContainer>
             <View>
                <Text>
                    Higher or lower?
                </Text>
              <View>
                  <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>+</PrimaryButton>
                  <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>-</PrimaryButton>
              </View>
             </View>
        
        </View>
}

export default GameScreen;

const style = StyleSheet.create({
    screen:{
        flex:1,
        padding:20,
        paddingTop:50
    }
})