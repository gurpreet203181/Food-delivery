import React from "react";
import { View,Image,StyleSheet } from "react-native";
import { icons,COLORS } from "../constants";

const Ratings =({
    rating,
    iconStyle,
    activteColor=COLORS.orange,
    inactiveColor=COLORS.lightOrange3,
})=>{
    return(

        <View style={{
            flexDirection :"row",
        
        }}>
            <Image
            source={icons.star}
            style={{
                tintColor: rating >= 1? activteColor: inactiveColor,
                ...styles.rateIcons,
                ...iconStyle
            }}/>
            
            <Image
            source={icons.star}
            style={{
                tintColor: rating >= 2? activteColor: inactiveColor,
                ...styles.rateIcons,
                ...iconStyle
            }}/>
            
            <Image
            source={icons.star}
            style={{
                tintColor: rating >= 3? activteColor: inactiveColor,
                ...styles.rateIcons,
                ...iconStyle
            }}/>
            
            <Image
            source={icons.star}
            style={{
                tintColor: rating >= 4? activteColor: inactiveColor,
                ...styles.rateIcons,
                ...iconStyle
            }}/>
            
            <Image
            source={icons.star}
            style={{
                tintColor: rating >= 5? activteColor: inactiveColor,
                ...styles.rateIcons,
                ...iconStyle
            }}/>

        </View>
    )
}

const styles= StyleSheet.create({
    rateIcons:{
        height: 15,
        width: 15
    }
})
export default Ratings;