import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { AuthLayout } from '..';
import { FONTS,SIZES,COLORS,icons } from '../../constants';
import { FormInput, SocialButton,   CustomSwitch, TextButton} from '../../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {utils} from "../../utils"
const SignIn = ({navigation}) => {
    const [email,setEmail]= React.useState("")
    const [password,setPassword] =React.useState("")
    const [emailError, setEmailError]= React.useState("")
    const [showPass, setShowPass]= React.useState(false)
    const [saveMe,setSaveMe] = React.useState(false)
    function isEnableSignIn() {
        return email != "" && password != "" && emailError==""
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
                      title="Lets's Sign you in" 
                     subtitle="Welcome back, you've been missed"/>
            <View style={{
                flex:1
            }}>
                {/* FORM input */}
                <FormInput 
                label="Email"
                keyboradType="email-address"
                autoCompleteType='email'
                value={email}

                onChange={(value) =>{
                    utils.validateEmail(value,setEmailError)
                    setEmail(value)
                }}
                errorMsg={emailError}
                appendComponenet={
                    <View style={{justifyContent:'center'}}>
                        <Image source={email=="" || (email !=""&& emailError=="")? icons.correct:icons.cross} 
                        style={{height:20,width:20,
                         tintColor: email==""?COLORS.gray :(email!="" && emailError==
                         "")?COLORS.green:COLORS.red}}/>

                    </View>
                }
                /><FormInput 
                label="Password"
                secureTextEntry={!showPass}
                autoCompleteType='password'
                contentContainerStyle={{marginTop:SIZES.radius}}
                value={password}
                onChange={(value) =>{
                    setPassword(value)
                }}
                appendComponenet={
                  <TouchableOpacity style={{
                      width: 40,alignItems:"flex-end",justifyContent:'center'
                  }} onPress={()=> setShowPass(!showPass)}>
                      
                      <Image source={showPass?icons.eye_close: icons.eye} 
                      style={{height:20,width:20,tintColor:COLORS.gray}}/>
                  </TouchableOpacity>
                }
                />
                <View style={{
                    flexDirection:'row',
                    marginTop:SIZES.radius,
                    justifyContent:'space-between'
                }}>
                    <CustomSwitch value={saveMe} 
                    label="Save me"
                    onChange={(value)=> setSaveMe(value)}/>
                    <TextButton label="Forget Password?"
                    buttonContainerStyle={{backgroundColor:null}}
                    labelStyle={{
                        color:COLORS.gray,
                        ...FONTS.body4
                    }} 
                    onPress={()=> navigation.navigate("ForgotPassword")}/>


                </View>
                {/* Sign in  */}
                <TextButton label="Sign In"
                disabled={isEnableSignIn()? false:true}
                buttonContainerStyle={{
                    height:55,
                    alignItems:'center',
                    marginTop:SIZES.padding,
                    borderRadius:SIZES.radius,
                    backgroundColor: isEnableSignIn()?COLORS.primary:COLORS.transparentPrimray
                    }} onPress={()=> navigation.navigate("Home")}/>
                    {/* sign up */}
                    <View style={{flexDirection:'row',marginTop:SIZES.radius,
                    justifyContent:'center'}}>
                        <Text style={{color: COLORS.darkGray, ...FONTS.body3}}>
                            Don't have an account
                        </Text>
                        <TextButton label="Sign Up"
                        buttonContainerStyle={{backgroundColor:null, marginLeft:3}}
                        labelStyle={{color:COLORS.primary, ...FONTS.h3}}
                        onPress={()=> navigation.navigate("SignUp")}/>


                    </View>

            </View>
            {/* Footer */}
            <View style={{marginBottom:10}}>
                {/* facebook */}
              <SocialButton containStyle={{
                  height: 50,
                  alignItems:"center",
                  borderRadius:SIZES.radius,
                  backgroundColor:COLORS.blue,
                  marginHorizontal:20
                  
              }}
              icon={icons.fb}
              iconPosition="LEFT"
              iconStyle={{tintColor:COLORS.white}}
              label="Continue with Facebook"
              labelStyle={{marginLeft:SIZES.radius,color:COLORS.white}}
              onPress={()=> console.log("FB")}
              />
              {/* google */}
              <SocialButton containStyle={{
                  height: 50,
                  alignItems:"center",
                  borderRadius:SIZES.radius,
                  backgroundColor:null,
                  marginHorizontal:20

                  
              }}
              icon={icons.google}
              iconPosition="LEFT"
              label="Continue with Google"
              labelStyle={{marginLeft:SIZES.radius,color:COLORS.black}}
              onPress={()=> console.log("google")}
              />
            </View>
            
            </KeyboardAwareScrollView>
            
            </View>


    )
}

export default SignIn;