import React from 'react';
import {
    View,
    Text,TouchableOpacity,Image,ScrollView
} from 'react-native';
import { FONTS,COLORS,SIZES,icons,dummyData ,images} from '../../constants';
import { Header,CartQuantityButton,VeriticalFoodCart,IconLabel,
    TextButton,
    StepperInput,
    LineDivider,Ratings} from '../../components';
import { useNavigation } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const FoodDetail = ({route}) => {
    const navigation = useNavigation()
    const name= route.params.itemId
    const [foodItem,setFoodItem]= React.useState(name)
    const [selectedSize,setSelectedSize]= React.useState("")
    const [qty,setQty]= React.useState(1)



    function  renderHeader() {
        return(
            <Header
            containerStyle={{ 
                height:50,
                paddingHorizontal : SIZES.padding,
                marginTop:10,
                alignItems: "center"
 
            }}
            title={"DETAILS"} 
           
            leftComponent={
                <TouchableOpacity style={{
                    width: 40,
                    height: 40,
                    alignItems: 'center',
                    justifyContent:'center',
                    borderWidth:1,
                    borderColor: COLORS.gray2,
                    borderRadius:SIZES.radius
                }}
                onPress={()=> navigation.goBack()}
                > 
                
 
                <Image source={icons.back} style={{height:20,width:20}}/>
                
                </TouchableOpacity>
            }
            rightComponent={
               
                <CartQuantityButton quantity={3}/>
            }
         />
        )
    }
    function renderDetail() {
        return(
        <View style={{
            marginTop:SIZES.radius,
            marginBottom:SIZES.padding,
            paddingHorizontal:SIZES.padding
            }}>
                {/* FOOD CARD */}
                <View style={{
                    height: 190,
                    borderRadius:15,
                    backgroundColor:COLORS.lightGray2
                }}>
                        <VeriticalFoodCart
               containerStyle={{
                   width: "100%",
            }}
            imagestyle={{
                height:200,
                width: "100%",
                marginTop:SIZES.padding*2   
            }}
            item={foodItem}
            textShow={false}

             />
             </View>
               {/* Food Info */}
               <View style={{marginTop:SIZES.padding}}>
                   {/* Name  */}
                   <Text style={{...FONTS.h1}}>
                       {foodItem?.name}
                   </Text>
                   <Text style={{
                       marginTop:SIZES.base,
                       color: COLORS.darkGray,
                       textAlign: 'justify',
                       ...FONTS.body3
                   }}>
                       {foodItem?.description}
                   </Text>

                   <View style={{
                       flexDirection:'row',
                       marginTop:SIZES.padding
                   }}>
                       <IconLabel containerStyle={{
                           backgroundColor:COLORS.primary
                       }}
                       icon={icons.star}
                       label="4.5"
                       labelStyle={{color:COLORS.white}}/>
                   
                       <IconLabel containerStyle={{
                           
                           marginLeft:SIZES.radius,
                           paddingHorizontal:0
                       }}
                       icon={icons.clock}
                       iconStyle={{tintColor:COLORS.back}}

                       label="30 Mins"
                       labelStyle={{color:COLORS.black}}/>
                    
                       <IconLabel containerStyle={{
                           marginLeft:SIZES.radius,
                           paddingHorizontal:0
                       }}
                       icon={icons.dollar}
                       iconStyle={{tintColor:COLORS.back}}
                       label="Free Shipping"
                       labelStyle={{color:COLORS.black}}/>

                   </View>

                   <View style={{
                       flexDirection:'row',
                       marginTop:SIZES.padding*2,
                       alignItems:'center',
                       justifyContent:'flex-start'
                   }}>
                       <Text style={{...FONTS.h4,color:COLORS.black}}>
                           Sizes:
                           </Text>
                           <View style={{
                               flexDirection:'row',
                               flexWrap:'wrap',
                               marginLeft:SIZES.padding
                           }}>


                           {dummyData.sizes.map((item,index)=>{
                               return(
                                   <TextButton
                                   key={`Sizes-${index}`}
                                   buttonContainerStyle={{
                                       width: 55,
                                       height: 55,
                                       margin:SIZES.base,
                                       borderWidth:1,
                                       borderRadius:SIZES.radius,
                                       borderColor:selectedSize== item.id?COLORS.primary: COLORS.gray2,
                                       backgroundColor:selectedSize == item.id? COLORS.primary:null
                                   }}
                                   label={item.label}
                                   labelStyle={{
                                       color: selectedSize== item.id? COLORS.white: COLORS.gray2,
                                       ...FONTS.body2
                                   }} onPress={()=> setSelectedSize(item.id)}/>
                               )
                           })}
                           </View>



                   </View>
               </View>
        </View>
        )
    }

    function  renderRestaurant() {
        return(
            <View style={{
                flexDirection:'row',
                marginVertical:SIZES.padding,
                paddingHorizontal:SIZES.padding,
                alignItems:'center'
            }}>
                <Image 
                source={images.profile}
                style={{
                    width: 50,
                    height: 50,
                    borderRadius:SIZES.radius
                }}/>
                {/* Info */}
                <View style={{
                    flex: 1,
                    marginLeft:SIZES.radius,
                    justifyContent:'center'
                }}>
                    <Text style={{...FONTS.h3}}>ByGurpreet</Text>
                    <Text style={{color:COLORS.gray,...FONTS.body4}}>1.2km away from you</Text>

                </View>
                <Ratings rating={4} 
                iconStyle={{marginLeft:3}}/>

            </View>
        )
    }

    function  renderFooter() {
        return(
            <View style={{
                flexDirection:'row',
                height: 120,
                alignItems:'center',
                paddingHorizontal:SIZES.padding,
                paddingBottom:SIZES.radius
            }}>
                <StepperInput value={qty}
                onAdd={()=> qty <10? setQty(qty +1): null}
                onMinus={() => {
                    if(qty > 1){
                        setQty(qty - 1 )
                    }
                }}
                />

                <TextButton
                buttonContainerStyle={{
                    flex:1,
                    flexDirection:'row',
                    height: 60,
                    marginLeft:SIZES.radius,
                    paddingHorizontal:SIZES.radius,
                    borderRadius:SIZES.radius,
                    backgroundColor:COLORS.primary
                }}
                label="Buy Now"
                label2="$15.99"
                onPress={()=> navigation.navigate("MyCart")}
                />

            </View>
        )
    }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor:COLORS.white
            }}
        >
            {/* Header */}
            {renderHeader()}
            {/* Body */}
            <ScrollView>
                {/* Food detial */}
                {renderDetail()}
                <LineDivider/>
                {renderRestaurant()}
                <LineDivider/>
                {renderFooter()}
                
            </ScrollView>
        </View>
    )
}

export default FoodDetail;