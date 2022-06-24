import React from 'react';
import {
    View,
    Image,TouchableOpacity
} from 'react-native';
import { AuthLayout } from '..';
import { SIZES,COLORS,icons} from '../../constants';
import {  TextButton,FormInput} from '../../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {utils} from "../../utils"

const ForgotPassword = ({navigation}) => {
    const [email,setEmail]= React.useState("")
    const [emailError, setEmailError]= React.useState("")

    function isEnableSendEmail() {
        return email != "" && emailError==""
    }

    return (
     
        <View style={{flex:1, backgroundColor:COLORS.white}}>

        <KeyboardAwareScrollView 
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
            paddingHorizontal:SIZES.padding,
            backgroundColor:COLORS.white
        }}>
             <AuthLayout
                  title="Password Recovery" 
                 subtitle="Please enter your email address to recover"
                 titleConatainerStyle={{marginTop:SIZES.padding*2}}/>
        <View style={{
            flex:1
        }}>
            {/* FORM input */}
         
            <FormInput 
            label="Email"
            keyboradType="email-address"
            autoCompleteType='email'
            onChange={(value) =>{
                utils.validateEmail(value,setEmailError)
                setEmail(value)
            }}
            errorMsg={emailError}
            appendComponenet={
                <TouchableOpacity style={{justifyContent:'center'}} 
                onPress={()=> value=""}>
                      
                        <Image source={email=="" || (email !=""&& emailError=="")? icons.correct:icons.cross} 
                        style={{height:20,width:20,
                         tintColor: email==""?COLORS.gray :(email!="" && emailError==
                         "")?COLORS.green:COLORS.red}}/>

                    </TouchableOpacity>
            }
            />
            {/* Send email  */}
            <TextButton label="Send Email"
            disabled={isEnableSendEmail()? false:true}
            buttonContainerStyle={{
                height:55,
                alignItems:'center',
                marginTop:SIZES.padding,
                borderRadius:SIZES.radius,
                backgroundColor: isEnableSendEmail()?COLORS.primary:COLORS.transparentPrimray
                }} onPress={()=> navigation.goBack()}/>

               

        </View>
    
        </KeyboardAwareScrollView>
        
        </View>

    )
}

export default ForgotPassword;