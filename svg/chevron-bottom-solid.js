/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 438 267" width="438pt" height="267pt"><defs><clipPath id="_clipPath_AOydkD6jGQMpkOGp8UyKt4wxATH1FkZX"><rect width="438" height="267"/></clipPath></defs><g clip-path="url(#_clipPath_AOydkD6jGQMpkOGp8UyKt4wxATH1FkZX)"><path d=" M 201.373 257.982 L 7.03 63.638 C -2.343 54.265 -2.343 39.069 7.03 29.697 L 29.697 7.03 C 39.054 -2.327 54.219 -2.345 63.598 6.99 L 218.344 161.011 L 373.089 6.99 C 382.468 -2.345 397.633 -2.327 406.99 7.03 L 429.657 29.697 C 439.03 39.07 439.03 54.266 429.657 63.638 L 235.314 257.981 C 225.942 267.354 210.746 267.354 201.373 257.982 Z " fill="rgb(0,0,0)"/></g></svg> */

import * as React from "react"
import { View } from 'react-native';
import Svg, { Path } from "react-native-svg"


function ChevronBottomtSolid(props) {
    return (
        <View style={{ aspectRatio: 1 }}>
            <Svg xmlns="http://www.w3.org/2000/svg" style="isolation:isolate" viewBox="0 0 438 267" width="100%" height="100%">
                <Path fill={props.color}  d=" M 201.373 257.982 L 7.03 63.638 C -2.343 54.265 -2.343 39.069 7.03 29.697 L 29.697 7.03 C 39.054 -2.327 54.219 -2.345 63.598 6.99 L 218.344 161.011 L 373.089 6.99 C 382.468 -2.345 397.633 -2.327 406.99 7.03 L 429.657 29.697 C 439.03 39.07 439.03 54.266 429.657 63.638 L 235.314 257.981 C 225.942 267.354 210.746 267.354 201.373 257.982 Z "/>
            </Svg>
        </View>
    )
}


export default ChevronBottomtSolid;
