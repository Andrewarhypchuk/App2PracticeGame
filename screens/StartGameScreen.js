import { useState } from "react";
import { TextInput,View,Alert, Text } from "react-native";
import { StyleSheet} from 'react-native';
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constans/colors";


function StartGameScreen({onPickNumber}){

  const[enteredValue,setEnteredValue] = useState('')
  function numberInputHandler(enteredText){
     setEnteredValue(enteredText)
  }
  function resetInputHandler(){
    setEnteredValue('')
  }
  function confirmInputValue(){
    const chosenNumber = parseInt(enteredValue)
    if(isNaN(chosenNumber)|| chosenNumber <= 0|| chosenNumber >99 ){
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between  1 and 99',
        [{text:'Okay',style:'destructive',onPress:resetInputHandler}]
      )
       return
    }
    onPickNumber(chosenNumber)
 }


   return(
    <View style={style.rootContainer}>
      <Title>Guess my number !</Title>
      <View style={style.inputContainer} >
        <Text style={style.instructionText}>Enter a number</Text>
          <TextInput
           style={style.numberInput}
           keyboardType='number-pad'
           autoCapitalize="none"
           maxLength={2}
           autoCorrect={false}
           onChangeText={numberInputHandler}
           value={enteredValue}
            />
          <View style={style.buttonsContainer}>
            <View style={style.buttonContainer}><PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton></View>
            <View style={style.buttonContainer}><PrimaryButton onPress={confirmInputValue}>Confirm</PrimaryButton></View>
          </View>
      </View>
    </View>
   )
}
export default StartGameScreen;

const style = StyleSheet.create({
    rootContainer:{
       flex:1,
       marginTop:100,
       alignItems:'center'
    },
    inputContainer:{
      marginHorizontal:24,
      borderRadius:8,
      justifyContent:'center',
      alignItems:'center',
      marginTop:36,
      padding:15,
      backgroundColor:Colors.primary800,
      elevation:10,
      shadowColor:'black',
      shadowOffset:{
        width:0,
        height:2
      },
      shadowRadius:6,
      shadowOpacity:0.5
    },
    instructionText:{
       color:Colors.accent500,
       fontSize:24
    },
    numberInput:{
          height:50,
          width:70,
          textAlign:'center',
          fontSize:32,
          borderBottomColor:Colors.accent500,
          borderBottomWidth:2,
          color:Colors.accent500,
          marginVertical:8,
          fontWeight:'boldkk'
    },
    buttonsContainer:{
      flexDirection:'row'
    },
    buttonContainer:{
      flex:1
    }
  })