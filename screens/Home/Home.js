import React from 'react';
import {
    View,
    ScrollView,
    Text,
    TouchableOpacity,Image,TextInput,FlatList
} from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { FilterModal } from '..';
import { HorizontalFoodCard,VeriticalFoodCart } from '../../components';
import { FONTS,SIZES,COLORS,icons,dummyData } from '../../constants';
import { useNavigation } from '@react-navigation/native';
const Section = ({title,onPress,children}) =>{
    return(
        <View>
            {/* Header */}
            <View style={{
                flexDirection:'row',
                marginHorizontal:SIZES.padding,
                marginTop:30,
                marginBottom:20
            }}>
                <Text style={{flex :1, ...FONTS.h3}}>
                    {title}
                </Text>
                <TouchableOpacity onPress={onPress}>
                    <Text style={{color:COLORS.primary,...FONTS.body3}}>
                        Show All
                    </Text>
                </TouchableOpacity>

            </View>
            {/* Content */}
            {children}
        </View>
    )
}
const Home = () => {

    const navigation = useNavigation();
    
    const [selectedCategoryID, setselectedCategoryID]= React.useState(1)

    const [selectedMenuType, setSelectedMenuType]= React.useState(1)
    const [recommends , setRecommends]= React.useState([])
    const [popular , setPopular]= React.useState([])
    
   const [menuList, setMenuList] = React.useState([])
    
     const [ShowFilterModal,setShowFilterModal] = React.useState(false)
    React.useEffect(()=>  {
        handelChangeCategory(selectedCategoryID, selectedMenuType)
    },[])
     
    //handler
     
     function handelChangeCategory(CategoryID,menutypeId ) {
        //retirieve the popluer menu

        let selectedPopular =dummyData.menu.find(a => a.name == "Popular")
 
        //retrieve the recommended menu
     let selectedRecommend = dummyData.menu.find(a => a.name == "Recommended")
 
      // find the menu based on the menuTypeid
        let selectedMenu= dummyData.menu.find(a => a.id == menutypeId)
     
        //set the recommended menu based on the categoryID
        setRecommends(selectedRecommend?.list.filter(a => a.categories.includes(CategoryID)))
        //set the menu based on the CategoryId
        setMenuList(selectedMenu?.list.filter(a=> a.categories.includes(CategoryID)))
          
        setPopular(selectedPopular?.list.filter(a => a.categories.includes(CategoryID)))

    }



function renderSearch() {
    return(
        <View style={{
            flexDirection: 'row',
            height: 40,
            alignItems:'center',
             marginHorizontal:SIZES.padding,
             marginVertical:SIZES.base,
             paddingHorizontal:SIZES.radius,
             borderRadius:SIZES.radius,
             backgroundColor: COLORS.lightGray2
        }}>
            {/* Icon */}
            <Image source={icons.search} 
            style={{ height:20, width:20, tintColor:COLORS.black}}
            />
            
            {/* Text input */}
            <TextInput style={{
                flex: 1,
                marginLeft:SIZES.radius,
                ...FONTS.body3,
                color: COLORS.black
                
            }}
            placeholder='search food...'
            />
            
            {/* filter button */}
            <TouchableOpacity onPress={()=> setShowFilterModal(true)}>
                <Image source={icons.filter} style={{
                    height:20, width: 20, tintColor:color.black
                }}/>
            </TouchableOpacity>

        </View>
    )
    
}

function renderMenuTypes() {
    return(
        <FlatList 
        horizontal 
        data = {dummyData.menu}
        keyExtractor={(item)=> `${item.id}`}
        showsVerticalScrollIndicator ={false}
        contentContainerStyle={{
            marginTop:30,
            marginBottom:20
        }}
        renderItem={({item,index})=>(
            <TouchableOpacity style={{
                marginLeft:SIZES.padding,
                marginRight:index== dummyData.menu.length-1? SIZES.padding:0
            }}
            onPress={()=>{
                setSelectedMenuType(item.id)
                handelChangeCategory(selectedCategoryID,item.id)
            }}>
                <Text style={{
                    color: selectedMenuType == item.id?COLORS.primary:COLORS.black,
                    ...FONTS.h3
                }}>
                {item.name}
                </Text>

            </TouchableOpacity>
        )}

         />

    )
}
function renderRecommendedSection() {
    return(
        <Section title="Recommended" onPress={() => console.log("Show all recommended")}>

         <FlatList 
         data={recommends}
         keyExtractor={(item)=> `${item.id}`}
         horizontal
         showsVerticalScrollIndicator ={false}
         renderItem={({item,index})=> (
             <HorizontalFoodCard
             containerStyle={{
                 height:180,
                 width : SIZES.width * 0.85,
                 marginLeft:index== 0 ? SIZES.padding:10,
                 marginRight: index == recommends.length -1 ? SIZES.padding:0,
                 paddingRight:SIZES.radius,
                 alignItems:"center"

             }}
             imageStyle={{marginTop:35, height:150,width:150}}
             item={item}
             onPress={()=> console.log("HorizontalFoodCard")}
             />
         )}
         />
        </Section>
    )
}
function renderPopularSection() {
    return(
        <Section title={"Popular Near you"}
        onPress={()=> console.log("Show all popular items")}>
            <FlatList 
            data={popular}
            keyExtractor={(item)=> `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={ ({item, index})=>(
               <VeriticalFoodCart
               containerStyle={{
                marginLeft:index == 0 ? SIZES.padding:18,
                marginRight: index == popular.length -1? SIZES.padding :0
            
            }}
            item={item}
            onPress={()=> console.log("Vertical food cart")}
               />
            )}
            />
        </Section>
    )
}
 function renderFoodCategories() {
     return(
         <FlatList 
         data={dummyData.categories}
         keyExtractor={(item)=> `${item.id}`}
         horizontal
         showsHorizontalScrollIndicator={false}
         renderItem={({item,index})=>(
             <TouchableOpacity style={{
                 flexDirection :'row',
                 height: 55,
                 marginTop:SIZES.padding,
                 marginLeft:index==0? SIZES.padding : SIZES.radius,
                 marginRight :index==dummyData.categories.length-1?SIZES.padding:0,
                 paddingHorizontal:8,
                 borderRadius:SIZES.radius,
                 backgroundColor:selectedCategoryID==item.id? COLORS.primary:COLORS.lightGray2
             }} onPress={()=> {
                setselectedCategoryID(item.id)
                handelChangeCategory(item.id, selectedMenuType)
             }}>
                 <Image source={item.icon}
                 style={{marginTop:5,height:50,width:50}}/>

                 <Text style={{
                     alignSelf:'center',
                     marginRight:SIZES.base,
                     color: selectedCategoryID==item.id?COLORS.white:COLORS.darkGray2,
                     ...FONTS.h3
                 }}>
                     {item.name}
                 </Text>

             </TouchableOpacity>
         )}
         />
     )
 }
 function renderDeliveryTO() {
     return(
         <View style={{
             marginTop:SIZES.padding,
             marginHorizontal:SIZES.padding
         }}>
             <Text style={{color:COLORS.primary,...FONTS.body3}}>
                 DELIVERY TO 
             </Text>

             <TouchableOpacity style={{
                 flexDirection:'row',
                 marginTop:SIZES.base,
                 alignItems:'center'}}>
                     <Text style={{...FONTS.h3}}>
                      {dummyData?.myProfile?.address}
                     </Text>
                     <Image source={icons.down_arrow} style={{
                         marginLeft:SIZES.base,height:20,width:20
                     }}/>

             </TouchableOpacity>

         </View>
     )
 }
    return (
        <ScrollView   
        showsHorizontalScrollIndicator={false}
        
            style={{
                flex: 1,
            }}>


                {/* search */}
                {renderSearch()}
                {ShowFilterModal &&
                <FilterModal  isVisible={ShowFilterModal}
                   onClose={()=> setShowFilterModal(false)}
                />
                  }

                
                {/* list */}
                <FlatList 
                data={menuList}
                keyExtractor={(item)=> `${item.id}`}
                showsVerticalScrollIndicator ={false}
                ListHeaderComponent={
                    <View>
                        {renderDeliveryTO()}
                         {renderFoodCategories()}
                        {renderPopularSection()}
                        {renderRecommendedSection()}
                     
                         {/* Menu types */}
                        {renderMenuTypes()}
                    </View>
                }
                renderItem={({item, index}) =>{
                    return (
                      <HorizontalFoodCard
                      containerStyle={{
                          height: 130,
                          alignItems:'center',
                          marginHorizontal:SIZES.padding,
                          marginBottom: SIZES.radius
                      }}
                      imageStyle={{
                          marginTop:20, height: 110, width:110
                      }}
                      item={item}
                      onPress={()=> 
                        navigation.navigate("FoodDetail",{itemId: item })}
                      />
                    )
                }}

                />

        </ScrollView>
    )
}

export default Home;