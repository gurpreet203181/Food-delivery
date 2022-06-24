import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Header, TextIconButton,FormInput,CardItem,FotterTotal } from '../../components';
import { COLORS, dummyData } from '../../constants';
import { SIZES,FONTS,icons } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const Checkout = ({  route }) => {
    const navigation = useNavigation();

    const [selectedCard, setSelectedCard]= React.useState(null)

    React.useEffect(() => {
              let {selectedCard}= route.params
              setSelectedCard(selectedCard)
    }, [])

    function renderHeader() {
        return(
            <Header
            containerStyle={{ 
                height:50,
                paddingHorizontal : SIZES.padding,
                marginTop:10,
                alignItems: "center"
 
            }}
            title={"CHECKOUT"} 
           
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
                <View style={{width:40}}/>

            }
         />
        )
    }

    function renderMyCards(){
        return(
            <View>
                { selectedCard && dummyData.myCards.map((item,index)=>{
                    return(
                        <CardItem 
                        key={`MyCard-${item.id}`}
                        item={item}
                        isSelected={`${selectedCard?.key}-${selectedCard?.id}`
                         == `MyCard-${item.id}`}
                        onPress={() => setSelectedCard({...item, key:"MyCard"})}
                        />
                    )
                })}
            </View>
        )
    }
    
    function renderDeliveryAdd(){
        return(
            <View style={{marginTop:SIZES.padding}}>
                <Text style={{...FONTS.h3}}>Delivery Address</Text>
                
                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    marginTop:SIZES.radius,
                    paddingVertical:SIZES.radius,
                    paddingHorizontal:SIZES.padding,
                    borderWidth:2,
                    borderRadius:SIZES.radius,
                    borderColor:COLORS.lightGray2

                }}>
                    <Image source={icons.location1}
                    style={{
                        width: 40,height:40
                    }}/>
                    
                    <Text style={{
                        marginLeft:SIZES.radius,
                        width: "85%",
                        ...FONTS.body3
                    }}>300 Post street San Franciso, Ca </Text>
                </View>
            </View>
        )
    }
    function renderCoupon(){
        return(
            <View style={{
                marginTop:SIZES.padding
            }}>
              <Text style={{...FONTS.h3}}> Add Coupon</Text>

              <FormInput 
              inputContainerStyle={{
                  marginTop:0,
                  paddingLeft:SIZES.padding,
                  paddingRight:0,
                  borderWidth:2,
                  borderColor:COLORS.lightGray2,
                  overflow:'hidden'
              }} 
              placeholder='Coupon Code'
              appendComponenet={
                  <View 
                  style={{
                      width: 60,
                      alignItems:'center',
                      justifyContent:'center',
                      backgroundColor:COLORS.primary
                  }}>
                      <Image 
                      source={icons.discount} 
                      style={{
                          width: 40,
                          height: 40,
                      }}/>

                  </View>
              }/>



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

            <KeyboardAwareScrollView 
             keyboardDismissMode='on-drag'
             extraScrollHeight={-200}
             contentContainerStyle={{
                 flexGrow:1,
                 paddingHorizontal:SIZES.padding,
                 paddingBottom:20
             }}
            >
                {/* My cards */}
                {renderMyCards()}

            {renderDeliveryAdd()}

            {/* Coupon */}

            {renderCoupon()}


            </KeyboardAwareScrollView>
            <FotterTotal
                 subTotal={37.97}
                 shippingFee={0.00}
                 total={37.97} 
                 onPress={()=> navigation.replace("Success")}/>
        </View>
    )
}

export default Checkout;