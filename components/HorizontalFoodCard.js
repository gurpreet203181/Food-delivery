import React from "react";
import { TouchableOpacity,View,Text,Image } from "react-native";
import { COLORS,FONTS,SIZES,icons } from "../constants";

const HorizontalFoodCard= ({containerStyle, imageStyle, item, onPress})=>{
    return(

        <TouchableOpacity style={{
           flexDirection:"row",
           borderRadius:SIZES.radius,
           backgroundColor:COLORS.lightGray2,
           ...containerStyle
        }} onPress={onPress}
        >
            {/* Image */}
            <Image source={item.image} style={imageStyle}/>

            {/* info */}
            <View style={{flex:1}}>

                <Text style={{...FONTS.h3 ,fontSize:17}}>
                    {item.name}

                </Text>
                <Text style={{...FONTS.body4,height:45 ,color:COLORS.darkGray2,overflow:"hidden"}}>
                    {item.description}

                </Text>
                <Text style={{...FONTS.h2 ,marginTop:SIZES.base}}>
                    {item.price}

                </Text>

            </View>
            <View style={{
                flexDirection:"row",
                position: "absolute",
                top: 5,
                right: SIZES.radius
            }}>
                <Image source={icons.calories} style={{width:30,height:30}}/>
                <Text style={{color:COLORS.darkGray2, ...FONTS.body5}}>
                    {item.calories}</Text>

            </View>

        </TouchableOpacity>
    )
}

export default HorizontalFoodCard;