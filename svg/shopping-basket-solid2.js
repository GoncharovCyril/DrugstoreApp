import * as React from "react"
import { View } from 'react-native';
import Svg, { Path } from "react-native-svg"

function ShoppingBasketSolid(props) {
  return (
    <View style={{ aspectRatio: 1 }}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        height="100%"
        width="100%"
        {...props}
      >
        <Path
          d="M14 36c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4zM2 4v4h4l7.19 15.17-2.7 4.9c-.31.58-.49 1.23-.49 1.93 0 2.21 1.79 4 4 4h24v-4H14.85c-.28 0-.5-.22-.5-.5 0-.09.02-.17.06-.24L16.2 26h14.9c1.5 0 2.81-.83 3.5-2.06l7.15-12.98c.16-.28.25-.61.25-.96a2 2 0 00-2-2H10.43l-1.9-4H2zm32 32c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4z"
          fill="currentColor"
        />
        <Path d="M0 0h48v48H0z" fill="none" />
      </Svg>
    </ View>
  )
}

export default ShoppingBasketSolid
