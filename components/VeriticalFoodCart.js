import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { ceil } from 'react-native-reanimated';
import { COLORS, FONTS,SIZES,icons } from '../constants';

const VeriticalFoodCart = ({containerStyle, item, onPress,imagestyle,textShow}) =>{
    return(

        <TouchableOpacity style={{
            width: 200,
            padding: SIZES.radius,
            alignItems:'center',
            borderRadius: SIZES.radius,
            backgroundColor:COLORS.lightGray2,
            ...containerStyle
        }}>
            {/* calories and fav */}
            <View  style={{flexDirection:'row'}}>
                <View style={{flex: 1, flexDirection:'row'}}>
                    <Image source={icons.calories} style={{width:30, height:30}}/>
                    <Text style={{color:COLORS.darkGray2,...FONTS.body5}}>
                        {item.calories} calories
                    </Text>
                </View>

                <Image source={icons.love} style={{
                    width: 20,
                    height: 20,
                    tintColor:item.isFavourite? COLORS.primary:COLORS.gray,
                }}/>

            </View>
            <View style={{height:150,width:150,alignItems:'center',justifyContent:'center'}}>
                <Image source={item.image} style={{height:"100%",width:"100%",
                    ...imagestyle
            }}/>
            </View>
            {/* info */}
            {textShow &&
            <View style={{
                alignItems:'center',
                marginTop:-20
            }}>
                <Text style={{...FONTS.h3}}>{item.name}</Text>
                <Text style={{...FONTS.body5,color:COLORS.darkGray2}}>{item.description}</Text>
                <Text style={{...FONTS.h2,marginTop:SIZES.radius}}>${item.price}</Text>



            </View>
              }
        </TouchableOpacity>
    )
}

export default VeriticalFoodCart