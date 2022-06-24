import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    Platform
  } from "react-native";
  import MapView, { PROVIDER_GOOGLE,Marker } from "react-native-maps";

  import {  TextIconButton} from '../../components';
  import { FONTS,COLORS,SIZES,icons,constants,dummyData,images } from '../../constants';
  import {utils} from "../../utils"

  const App = () => {
  
    const mapView = React.useRef()
    const [region, SetRegion] = React.useState(null)
    const [toLoc, setToLoc] = React.useState(null)
    const [FromLoc, setFromLoc]= React.useState(null)
    const [angle, setAngle] = React.useState(0)
    
    React.useEffect(()=>{
      
    const initialRegion ={ 
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
    let destination ={
      latitude:1.528900,
      longitude:110.368
    }
    setToLoc(destination)
    setFromLoc(dummyData.fromLocs[1])
    SetRegion(initialRegion)
    },[])

    function renderMap(){
      return(
       <MapView
         ref={mapView}
         style={{
           flex: 1
         }}   
         provider={PROVIDER_GOOGLE}
         initialRegion={region}
       >

       </MapView>
      )
    }
  
    return(
      <View style={{flex:1}}>
          {/* MAP */}
          {renderMap()}
      </View>
    )
  }

export default Map;