import React from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Header,TextIconButton, TextButton, CustomSwitch, FormInput ,FormInputCheck} from '../../components';
import { FONTS,SIZES,COLORS,icons, images } from '../../constants';
import   {utils}  from '../../utils';

import { useNavigation } from '@react-navigation/native';

const AddCard = ({route}) => {
    const navigation = useNavigation();

    const[selectedCard,setSelectedCard]= React.useState(null)

    const [cardnumber, setCardNumber]= React.useState("")
    const [cardnumberErrore, setCardNumberErrore]= React.useState("")
    
    const [CardName, setCardName]= React.useState("")
    const [CardNameErrore, setCardNameErrore]= React.useState("")

    
    const [expiryDate, setExpiryDate]= React.useState("")
    const [expiryDateError, SetExpiryDateError]= React.useState("")

    
    const [cvv, setCvv]= React.useState("")
    const [cvvError, setCvvError]= React.useState("")

    
    
    const [isRemember, setIsRemember]= React.useState(true)
    const [saveMe,setSaveMe] = React.useState(false)
    




    
    React.useEffect(()=> {
        let {selectedCard}= route.params
        setSelectedCard(selectedCard)
    },[])

    function isEnableAddCard(){
        return cardnumber !="" && CardName !="" && expiryDate!= ""
        && cvv != "" && cardnumberErrore=="" && cardnumberErrore=="" &&
        expiryDateError =="" && cvvError==""
    }

    function renderHeader() {
        return(
            <Header
            containerStyle={{ 
                height:50,
                paddingHorizontal : SIZES.padding,
                marginTop:10,
                alignItems: "center"
 
            }}
            title={"ADD NEW CARD"} 
           
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
    function renderCard(){
        return(
            <ImageBackground source={images.card}
                style={{
                    height: 200,
                    width: "100%",
                    marginTop:SIZES.radius,
                    borderRadius:SIZES.radius,
                    overflow: 'hidden'
                }}>

                    {/* logo */}
                    <Image
                    source={selectedCard?.icon}
                    resizeMode="contain"
                    style={{
                        position: 'absolute',
                        top:20,
                        right: 20,
                        height: 40,
                        width: 80,
                    }}/>

                    {/* Details */}
                    <View 
                    style={{
                         position: 'absolute',
                         bottom: 10,
                         left: 0,
                         right: 0,
                         paddingHorizontal:SIZES.padding
                    }}>
                        <Text 
                        style={{
                            color: COLORS.white,
                            ...FONTS.h3
                        }}>
                           {CardName}
                        </Text>
                        <View
                        style={{
                            flexDirection:'row'
                        }}
                        >
                            <Text style={{
                                flex: 1,color:COLORS.white, ...FONTS.body3
                            }}>
                                {cardnumber}
                            </Text>
                            <Text style={{color:COLORS.white, ...FONTS.body3}}>
                                {expiryDate}
                                </Text>


                        </View>

                    </View>

            </ImageBackground>
        )
    }
    function renderForm(){
        return(
            <View style={{
                marginTop:SIZES.padding*2
            }}>
                {/* Card number */}
                <FormInput
                label="Card Number"
                maxLength={19}
                keyboradType='number-pad'
                value={cardnumber}
                onChange={(value)=> {setCardNumber(value.replace(/\s/g,'').
                replace(/(\d{4})/g,'$1 ').trim())
                utils.validateInput(value,19,setCardNumberErrore)}}
                errorMsg={cardnumberErrore}
                appendComponenet={
                    <FormInputCheck 
                    value={cardnumber}
                    error={cardnumberErrore}/>
                }
                />
                {/* card Name */}
                <FormInput
                value={CardName}
                label="CardHolder Name"
                containerStyle={{marginTop:SIZES.radius}}

                onChange={(value)=> {
                utils.validateInput(value,1,setCardNameErrore)
                setCardName(value)}}

                errorMsg={CardNameErrore}
                appendComponenet={ 
                    <FormInputCheck 
                    value={CardName}
                    error={CardNameErrore}/>
                }
                />

                {/* expiryDate and cvv */}
                <View style={{
                    flexDirection:'row',
                    marginTop:SIZES.radiusa
                }}>
                     <FormInput
                value={expiryDate}
                label="Expiry Date"
                placeholder='MM/YY'
                maxLength={5}
                keyboradType='number-pad'

                containerStyle={{flex:1}}
                onChange={(value)=> {

                utils.validateInput(value,5,SetExpiryDateError)
                setExpiryDate(value)}}

                appendComponenet={ 
                    <FormInputCheck 
                    value={expiryDate}
                    error={expiryDateError}/>
                }
                />
                <FormInput
                value={cvv}
                label="CVV"
                maxLength={3}
                keyboradType='number-pad'

                containerStyle={{flex:1, marginLeft:SIZES.radius}}
                onChange={(value)=> {

                utils.validateInput(value,3,setCvvError)
                setCvv(value)}}

                appendComponenet={ 
                    <FormInputCheck 
                    value={cvv}
                    error={cvv}/>
                }
                />


                </View>
                
                <CustomSwitch  
                value={saveMe} 
                label="Remember this card details."
                containerStyle={{marginTop:SIZES.radius}}
                onChange={(value)=> setSaveMe(value)}/>

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
               
                buttonContainerStyle={{
                    height: 60,
                    borderRadius:SIZES.radius,
                    backgroundColor: isEnableAddCard()?COLORS.primary:
                    COLORS.transparentPrimray
                }}
                label="Add Card"
                disabled={!isEnableAddCard}
                onPress={()=> navigation.goBack( )}
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

            <KeyboardAwareScrollView
              keyboardDismissMode='on-drag'
               
              contentContainerStyle={{
                  flexGrow:1,
                  paddingHorizontal:SIZES.padding
              }}
            >
                {/* Card */}

                {renderCard()}

                {/* Forms */}
                {renderForm()}

            </KeyboardAwareScrollView>
                {/* fotter */}

            {renderFooter()} 

        </View>
    )
}

export default AddCard;