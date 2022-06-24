import React from 'react'
import { Text,View,TextInput } from 'react-native'
import { exp } from 'react-native/Libraries/Animated/Easing'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { FONTS,SIZES,COLORS } from '../constants'


const FormInput=({
 containerStyle,
 inputContainerStyle,
 label,
 placeholder,
 inputStyle,
 prependComponenet,
 appendComponenet,
 onChange,
 secureTextEntry,
 keyboradType="default",
 autoCompleteType="off",
 autoCapitalize="none",
 errorMsg="",
 maxLength
})=>{
    return(
        <View style={{...containerStyle}}>
           {/* Label & Errore msg */}
           <View style={{
               flexDirection:'row',
               justifyContent:'space-between'
           }}>
               <Text style={{color:COLORS.gray,...FONTS.body4}}>
                   {label}
               </Text>
               <Text style={{color:COLORS.red,...FONTS.body4}}>
                   {errorMsg}
               </Text>

           </View>
           {/* Text input */}
           <View style={{
               flexDirection:'row',
               height: SIZES.height> 800? 55:45,
               paddingHorizontal:SIZES.padding,
               marginTop:SIZES.height>800? SIZES.base:0,
               borderRadius:SIZES.radius,
               backgroundColor:COLORS.lightGray2,
               ...inputContainerStyle
               }}>
                   {prependComponenet}
                   
                   <TextInput style={{flex:1,color:COLORS.black,...inputStyle}}
                   placeholder={placeholder}
                   placeholderTextColor={COLORS.gray}
                   secureTextEntry={secureTextEntry}
                   keyboardType={keyboradType}
                   autoCompleteType={autoCompleteType}
                   autoCapitalize={autoCapitalize}
                   maxLength={maxLength}
                   onChangeText={onChange}
                   />
                   {appendComponenet}
                       

           </View>
           
        </View>
    )
}
export default FormInput;