import * as React from "react"
import { View, Image } from 'react-native';


function SvgComponent(props) {
  return (
    <View style={{ aspectRatio: 1 }}>
       <Image source={require("../img/plus-solid.png")} width="100%" height="100%"/>
    </View>
  )
}

export default SvgComponent
