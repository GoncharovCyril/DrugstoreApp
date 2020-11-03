import * as React from "react"
import { View } from 'react-native';
import Svg, { Path } from "react-native-svg"

function MapMarketAltSolid(props) {
  return (
      <View style={{ aspectRatio: 1}}>
    <Svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="map-marker-alt"
      className="prefix__svg-inline--fa prefix__fa-map-marker-alt prefix__fa-w-12"
      viewBox="0 0 384 512"
      {...props}
    >
      <Path
        fill="currentColor"
        d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
      />
    </Svg>
    </ View>
  )
}

export default MapMarketAltSolid;
