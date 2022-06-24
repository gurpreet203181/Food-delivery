import React from "react";
import { TouchableOpacity ,Text,Image,View} from "react-native";
import { FONTS ,COLORS,icons,SIZES} from "../constants"; 


const CartQuantityButton = ({containerStyle,iconStyle,quantity,onPress}) => {
    return(
       <TouchableOpacity 
       style={{
           width: 40,
           height: 40,
           alignItems:"center",
           justifyContent:"center",
           backgroundColor:COLORS.lightOrange2,
           borderRadius:SIZES.radius,
           ...containerStyle
       }}onPress={onPress}>
          
           <Image source={icons.cart} style={{
               marginLeft:5,
               width: 20,
               height: 20,
               tintColor:COLORS.black,
               ...iconStyle
           }}/>
           <View style={{
               position: "absolute",
               top: 5,
               right: 5,
               height: 15,
               width: 15,
               alignItems:"center",
               justifyContent:"center",
               borderRadius:SIZES.radius,
               backgroundColor:COLORS.primary
           }}>
           <Text style={{
               color: COLORS.white,
               ...FONTS.body5,
               fontSize:10,
           }}>{quantity}</Text>               
           </View>
        

       </TouchableOpacity>
    )
}
export default CartQuantityButton;