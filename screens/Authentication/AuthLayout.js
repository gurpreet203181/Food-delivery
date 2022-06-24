import React from "react";
import { View,Text,Image } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


import { images,FONTS,SIZES,COLORS } from "../../constants";
const AuthLayout = ({title,subtitle,titleConatainerStyle,childern})=>{
    return(
        <View style={{flex:1,
        paddingVertical:SIZES.padding,
        backgroundColor:COLORS.white,
        }}>

            {/* App icon */}
             <View style={{alignItems:"center"}}>
                 <Image source={images.logo_02}
                   resizeMode="contain"
                   style={{
                       height: 100,
                       width: 200
                   }} 
                   />
             </View>
             {/* Title and Subtitle */}
             <View style={{marginTop:SIZES.padding,...titleConatainerStyle}}>
               <Text style={{textAlign:"center",...FONTS.h2}}>
                   {title}
               </Text>
               <Text style={{
                   textAlign:"center",
                   color: COLORS.darkGray,
                   marginTop:SIZES.base,
                   ...FONTS.body3
                  }}>
                   {subtitle}
               </Text>
             </View>
             {/* content childern */}
             {childern}


        </View> 
    )
}
export default AuthLayout;