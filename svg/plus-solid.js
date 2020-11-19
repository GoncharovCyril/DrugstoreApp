import * as React from "react"
import { View } from 'react-native';
import Svg, { Path } from "react-native-svg"

function PlusSolid(props) {
  return (
      <View style={{ aspectRatio: 1, width: "100%", height: "100%"}}>
            <Svg
              aria-hidden="true"
              data-prefix="fas"
              data-icon="plus"
              className="prefix__svg-inline--fa prefix__fa-plus prefix__fa-w-14"
              viewBox="0 0 448 512"
            >
              <Path
                fill={props.color}
                d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
              />
            </Svg>
        </View>
  )
}

export default PlusSolid;
