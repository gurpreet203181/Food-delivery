import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,TouchableOpacity
} from 'react-native';
import { COLORS,FONTS,SIZES,icons, dummyData } from '../../constants';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useNavigation } from '@react-navigation/native';

import { Header,FotterTotal, CartQuantityButton, StepperInput, TextIconButton} from '../../components';
const MyCart = () => {
    const navigation = useNavigation()
    
    const [MyCartList,setMyCartList] = React.useState(dummyData.myCart)
     
    //handler
        function updateQtyHandler(newQty,id) {
            let newMycartList= MyCartList.map(cl=> (
                cl.id === id? {...cl, qty:newQty}:cl
            ))
            setMyCartList(newMycartList)
        }

        function removeMyCartHandler(id) {
            let newMycartList=[...MyCartList]

            const index =newMycartList.findIndex(cart => cart.id===id)

            newMycartList.splice(index,1)

            setMyCartList(newMycartList)
        }
    //render



    function  renderHeader() {
        return(
            <Header
            containerStyle={{ 
                height:50,
                paddingHorizontal : SIZES.padding,
                marginTop:10,
                alignItems: "center"
 
            }}
            title={"MY CART"} 
           
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

    function  renderCartList() {
        return(
            <SwipeListView
            data={MyCartList}
            keyExtractor= {item => `${item.id}`}
            contentContainerStyle={{
                marginTop:SIZES.radius,
                paddingHorizontal:SIZES.padding,
                paddingBottom:SIZES.padding * 2
            }}
            disableRightSwipe={true}
            rightOpenValue={-75}
            renderItem={(data,rowMap) => (
                <View style={{
                    height: 100,
                    backgroundColor:COLORS.lightGray2,
                    ...styles.cartItemContanier
                }}>

                    {/* Food image */}
                    <View style={{width:90, height: 100, marginLeft:-10}}>

                        <Image source={data.item.image}
                        resizeMode='contain'
                        style={{
                            width: "100%",
                            height:'100%',
                            position: 'absolute',
                            top: 10
                        }}
                        />

                    </View>

                    {/* food info */}
                    <View style={{flex:1}}>

                        <Text style={{...FONTS.body3}}>{data.item.name}</Text>
                      
                        <Text style={{color:COLORS.primary,...FONTS.h3}}>
                            ${data.item.price}</Text>
                    </View>

                    {/* quantity */}

                    <StepperInput 
                    containerStyle={{
                        height:50,
                        width: 125,
                        backgroundColor:COLORS.white
                    }}
                    value={data.item.qty}
                    onAdd={()=> updateQtyHandler(data.item.qty +1 ,data.item.id)}
                    onMinus={()=> {
                        if (data.item.qty>1) {
                            updateQtyHandler(data.item.qty-1, data.item.id)
                        }                        
                    }}

                    />
                </View>
            )}
            renderHiddenItem={(data, rowMap)=>(
                <TextIconButton containerStyle={{
                    flex:1,
                    justifyContent:'flex-end',
                    backgroundColor:COLORS.primary,
                    ...styles.cartItemContanier
                }}
                icon={icons.delete_icon}
                iconStyle={{marginRight:10,tintColor:COLORS.white}}
                onPress={()=> removeMyCartHandler(data.item.id)}
                />
            )}

            />
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
            {/* Cart List */}
            
            {renderCartList()}
                 {/* Footer */}
                 <FotterTotal
                 subTotal={37.97}
                 shippingFee={0.00}
                 total={37.97} 
                 onPress={()=> navigation.navigate("MyCard")}/>

        </View>
    )
}


const styles= StyleSheet.create({
    cartItemContanier:{
        flexDirection:'row',
        alignItems:'center',
        marginTop: SIZES.radius,
        paddingHorizontal:SIZES.radius,
        borderRadius:SIZES.radius
    }
})

export default MyCart;