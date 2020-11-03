import * as React from "react"
import { View } from 'react-native';
import Svg, { Path } from "react-native-svg"

function ListUlSolid(props) {
  return (
      <View style={{ aspectRatio: 1}}>
    <Svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="list-ul"
      className="prefix__svg-inline--fa prefix__fa-list-ul prefix__fa-w-16"
      viewBox="0 0 512 512"
      {...props}
    >
      <Path
        fill="currentColor"
        d="M48 48a48 48 0 1048 48 48 48 0 00-48-48zm0 160a48 48 0 1048 48 48 48 0 00-48-48zm0 160a48 48 0 1048 48 48 48 0 00-48-48zm448 16H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-320H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16V80a16 16 0 00-16-16zm0 160H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16v-32a16 16 0 00-16-16z"
      />
    </Svg>
    </ View>
  )
}

export default ListUlSolid
