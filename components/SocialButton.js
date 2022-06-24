import React from "react";
import { TouchableHighlight,Text, Image,StyleSheet, TouchableOpacity } from "react-native";
import { exp } from "react-native/Libraries/Animated/Easing";
import { tintColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { TextIconButton } from ".";
import { FONTS,COLORS } from "../constants";

const SocialButton=({
    containStyle,
    label,
    labelStyle,
    icon,
    iconPosition,
    onPress,
    iconStyle

})=>{
    return(
       <TouchableOpacity style={{
           flexDirection:"row",
           alignItems:"center",
           justifyContent:"center",
           ...containStyle
       }} 
       onPress={onPress}>
           {iconPosition=="LEFT" &&
           <Image source={icon}
           style={{
               ...styles.image,...iconStyle
           }}/>}
           <Text style={{...FONTS.body3,...labelStyle}}>
               {label}
           </Text>
           {iconPosition=="RIGHT" &&   
           <Image source={icon}
           style={{
               ...styles.image,...iconStyle
           }}/>}

       </TouchableOpacity>
    )
}
const styles= StyleSheet.create({
    image:{
        marginLeft:5,
        width: 20,
        height: 20,
        tintColor:COLORS.black
    }
})
export default SocialButton;