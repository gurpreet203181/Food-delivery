import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { AuthLayout } from '..';
import { FONTS,SIZES,COLORS,icons } from '../../constants';
import { FormInput, SocialButton,    TextButton} from '../../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {utils} from "../../utils"


const SignUp = ({navigation}) => {
    const [email,setEmail]= React.useState("")
    const [emailError, setEmailError]= React.useState("")
   
    const [username,setUsername]= React.useState("")
    const [usernameError,setUsernameError]= React.useState("")
 
    const [password,setPassword] =React.useState("")
    const [passwordError,setPasswordError] =React.useState("")
    
    const [showPass, setShowPass]= React.useState(false)
    function isEnableSignUP() {
        return email!="" && username!="" && password!="" && emailError==""
                     && passwordError=="" && usernameError==""
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
                  title="Getting Started" 
                 subtitle="Create an account to continue!"/>
       <View style={{
                flex:1
            }}>
                {/* FORM input */}
                <FormInput 
                value={email}
                label="Email"
                keyboradType="email-address"
                autoCompleteType='email'
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
                />
                <FormInput
                value={username}
                label="Username"
                containStyle={{
                    marginTop:SIZES.radius
                }}
                onChange={(value)=>{setUsername(value)}}
                errorMsg={usernameError}
                appendComponenet={
                    <View style={{justifyContent:'center'}}>
                        <Image source={username=="" || (username !=""&& usernameError=="")? icons.correct:icons.cross} 
                        style={{height:20,width:20,
                         tintColor: username==""?COLORS.gray :(username!="" && usernameError==
                         "")?COLORS.green:COLORS.red}}/>

                    </View>
                }
                />
                <FormInput 
                value={password}
                label="Password"
                secureTextEntry={!showPass}
                errorMsg={passwordError}
                autoCompleteType='password'
                contentContainerStyle={{marginTop:SIZES.radius}}
                onChange={(value) =>{
                    utils.validatePassword(value,setPasswordError)
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
                {/* Sign Up */}
                <TextButton label="Sign UP"
                disabled={isEnableSignUP()? false:true}
                buttonContainerStyle={{
                    height:55,
                    alignItems:'center',
                    marginTop:SIZES.padding,
                    borderRadius:SIZES.radius,
                    backgroundColor: isEnableSignUP()?COLORS.primary:COLORS.transparentPrimray
                    }} onPress={()=> navigation.navigate("Otp")}/>
                   
                    <View style={{flexDirection:'row',marginTop:SIZES.radius,
                    justifyContent:'center'}}>
                        <Text style={{color: COLORS.darkGray, ...FONTS.body3}}>
                            Already have an account?
                        </Text>
                        <TextButton label="Sign In"
                        buttonContainerStyle={{backgroundColor:null, marginLeft:3}}
                        labelStyle={{color:COLORS.primary, ...FONTS.h3}}
                        onPress={()=> navigation.navigate("SignIn")}/>


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
          onPress={()=> navigation.navigate("Otp")}
          />
        </View>
        </KeyboardAwareScrollView>
        
        </View>
    )
}

export default SignUp;