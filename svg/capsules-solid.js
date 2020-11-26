import * as React from "react"
import { View } from 'react-native';
import Svg, { Path } from "react-native-svg"

function CapsulesSolid(props) {
  return (
      <View style={{ aspectRatio: 1}}>
    <Svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="capsules"
      className="prefix__svg-inline--fa prefix__fa-capsules prefix__fa-w-18"
      viewBox="0 0 576 512"
      {...props}
    >
      <Path
        fill="currentColor"
        d="M555.3 300.1L424.2 112.8C401.9 81 366.4 64 330.4 64c-22.6 0-45.5 6.7-65.5 20.7-19.7 13.8-33.7 32.8-41.5 53.8C220.5 79.2 172 32 112 32 50.1 32 0 82.1 0 144v224c0 61.9 50.1 112 112 112s112-50.1 112-112V218.9c3.3 8.6 7.3 17.1 12.8 25L368 431.2c22.2 31.8 57.7 48.8 93.8 48.8 22.7 0 45.5-6.7 65.5-20.7 51.7-36.2 64.2-107.5 28-159.2zM160 256H64V144c0-26.5 21.5-48 48-48s48 21.5 48 48v112zm194.8 44.9l-65.6-93.7c-7.7-11-10.7-24.4-8.3-37.6 2.3-13.2 9.7-24.8 20.7-32.5 8.5-6 18.5-9.1 28.8-9.1 16.5 0 31.9 8 41.3 21.5l65.6 93.7-82.5 57.7z"
      />
    </Svg>
    </View>
  )
}

export default CapsulesSolid;