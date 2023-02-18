import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constans/colors";

function PrimaryButton({ children,onPress }) {

    

    return (
        <View style={style.buttonOuterContainer} >
            <Pressable
                style={({pressed})=>pressed?
                [style.buttonInnerContainer,
                 style.pressed
                ]
                :style.buttonInnerContainer}
                android_ripple={{ color: Colors.primary600 }}
                onPress={onPress}>
                <Text style={style.buttonText}>{children}</Text>
            </Pressable>
        </View>


    )
}

export default PrimaryButton;

const style = StyleSheet.create({
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed:{
        opacity:0.75
    }
})