import React from 'react';
import {
    View,ScrollView,
    Text,TouchableOpacity,Image
} from 'react-native';
import { Header,TextIconButton,TextButton,CardItem } from '../../components';
import { FONTS,SIZES,COLORS,icons,dummyData } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const MyCard = () => {
    const navigation = useNavigation();
   
    const [selectedCard, setSelectedCard]= React.useState(null)
    function renderHeader() {
        return(
            <Header
            containerStyle={{ 
                height:50,
                paddingHorizontal : SIZES.padding,
                marginTop:10,
                alignItems: "center"
 
            }}
            title={"MY CARDS"} 
           
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

    function renderMycard(){
        return(
            <View>
                {dummyData.myCards.map((item,index)=>{
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
    
    function renderAddNewCard(){
        return(
            <View style={{marginTop:SIZES.padding}}>
                <Text style={{...FONTS.h3}}>Add new card</Text>

                {dummyData.allCards.map((item,index)=> {
                    return(
                        <CardItem 
                        key={`NewCard-${item.id}`}
                        item={item}
                        isSelected={`${selectedCard?.key}-${selectedCard?.id}`
                         == `NewCard-${item.id}`}
                        onPress={() => setSelectedCard({...item, key:"NewCard"})}
                        />
                    )
                })}
            </View>
        )
    }
    function renderFooter(){
        return(
            <View style={{
                paddingTop:SIZES.radius,
                paddingBottom:SIZES.padding,
                paddingHorizontal:SIZES.padding
            }}>
                <TextButton 
                disabled={selectedCard==null}
                buttonContainerStyle={{
                    height: 60,
                    borderRadius:SIZES.radius,
                    backgroundColor: selectedCard==null ? COLORS.gray:
                     COLORS.primary
                }}
                label={selectedCard?.key == "NewCard" ? "Add" : "Place your Oder"}
                onPress={()=> {
                    if (selectedCard?.key == "NewCard") {
                        navigation.navigate("AddCard",{selectedCard:selectedCard})
                    } else {
                        navigation.navigate("Checkout",{selectedCard:selectedCard})
                        
                    }
                } }/>

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
            {/* card */}

            <ScrollView contentContainerStyle={{
                flexGrow:1,
                marginTop:SIZES.radius,
                paddingHorizontal:SIZES.padding,
                paddingBottom:SIZES.radius
            }}>
                {/* My card */}
                {renderMycard()}


                    {/* Add new Card */}
                {renderAddNewCard()}

                  {/* footer */}
            </ScrollView>
            {renderFooter()}
            {/* Delivery */}


        </View>
    )
}

export default MyCard;