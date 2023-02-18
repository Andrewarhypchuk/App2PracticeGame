import { Text,StyleSheet } from "react-native";
import Colors from "../../constans/colors";


function Title({children}){
   return  <Text style={style.title}>{children}</Text>
}
export default Title;

const style = StyleSheet.create({
    title:{
        color:"white" ,
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        borderWidth:2,
        borderColor:"white",
        padding:12
    }
})