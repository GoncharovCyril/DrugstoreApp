import * as React from "react"
import { View } from 'react-native';
import Svg, { Path } from "react-native-svg"

function VirusSolid(props) {
  return (
      <View style={{ aspectRatio: 1}}>
    <Svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="virus"
      className="prefix__svg-inline--fa prefix__fa-virus prefix__fa-w-16"
      viewBox="0 0 512 512"
    >
      <Path
        fill={props.color}
        d="M483.55 227.55H462c-50.68 0-76.07-61.27-40.23-97.11L437 115.19A28.44 28.44 0 00396.8 75l-15.24 15.22c-35.84 35.83-97.11 10.45-97.11-40.23V28.44a28.45 28.45 0 00-56.9 0V50c0 50.68-61.27 76.06-97.11 40.23L115.2 75A28.44 28.44 0 0075 115.19l15.25 15.25c35.84 35.84 10.45 97.11-40.23 97.11H28.45a28.45 28.45 0 100 56.89H50c50.68 0 76.07 61.28 40.23 97.12L75 396.8a28.45 28.45 0 0040.2 40.2l15.24-15.25c35.84-35.84 97.11-10.45 97.11 40.23v21.54a28.45 28.45 0 0056.9 0V462c0-50.68 61.27-76.07 97.11-40.23L396.8 437a28.45 28.45 0 0040.2-40.2l-15.25-15.24c-35.84-35.84-10.45-97.12 40.23-97.12h21.54a28.45 28.45 0 100-56.89zM224 272a48 48 0 1148-48 48 48 0 01-48 48zm80 56a24 24 0 1124-24 24 24 0 01-24 24z"
      />
    </Svg>
    </ View>
  )
}

export default VirusSolid
