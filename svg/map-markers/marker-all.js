import * as React from "react"
import { View } from 'react-native';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Path,
  Circle,
} from "react-native-svg"


function MarkerAll(props) {
  return (
    <View style={{ aspectRatio: 1, width: '100%', height: '100%' }}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        // width={28}
        // height={40}
        width='100%'
        height='100%'
        viewBox="0 0 50 42"
        {...props}
      >
        <Defs>
          <LinearGradient
            x1={11.931}
            y1={36.473}
            x2={32.836}
            y2={19.327}
            id="prefix__b"
            stopColor="#231F20"
            gradientTransform="scale(.9868 1.01339)"
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="0%" />
            <Stop stopOpacity={0} offset="100%" />
          </LinearGradient>
          <LinearGradient
            x1={11.931}
            y1={36.473}
            x2={32.836}
            y2={19.327}
            id="prefix__a"
            stopColor="#231F20"
            gradientTransform="scale(.9868 1.01339)"
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="0%" />
            <Stop stopOpacity={0} offset="100%" />
          </LinearGradient>
          <LinearGradient
            xlinkHref="#prefix__a"
            id="prefix__d"
            gradientUnits="userSpaceOnUse"
            gradientTransform="scale(.9868 1.01339)"
            x1={11.931}
            y1={36.473}
            x2={32.836}
            y2={19.327}
          />
          <LinearGradient
            xlinkHref="#prefix__a"
            id="prefix__c"
            gradientUnits="userSpaceOnUse"
            gradientTransform="scale(.9868 1.01339)"
            x1={11.931}
            y1={36.473}
            x2={32.836}
            y2={19.327}
          />
        </Defs>
        <G transform="translate(-.949)" fillRule="evenodd">
          <G fill="none">
            <Path
              d="M12.718 39.666c4.71-2.394 17.82-11.517 18.305-11.979.551-.52 1.061-1.06 1.49-1.619 3.001-4 1.122-7.62-4.429-8.03-.476-.035-1.069-.106-1.679-.16-.959 3.427-3.223 7.602-6.433 12.33a117.4 117.4 0 01-4.616 6.308 113.63 113.63 0 01-2.07 2.569 3.386 3.386 0 01-.568.58zm0 0"
              opacity={0.5}
              fill="url(#prefix__b)"
            />
            <Path
              d="M0 13.5C0 6.044 6.044 0 13.5 0S27 6.044 27 13.5c0 .782-.067 1.557-.198 2.317l.011.166-.036.228c-.595 3.703-3.054 8.473-6.805 13.997a117.4 117.4 0 01-4.616 6.308 113.63 113.63 0 01-2.07 2.569 3.386 3.386 0 01-.465.494 3.032 3.032 0 01-.727.483 2.32 2.32 0 01-1.402.17c-.115-.022-.148-.029-.216-.048a2.286 2.286 0 01-1.66-1.68 2.507 2.507 0 01-.006-1.18 2.72 2.72 0 01.05-.195l2.77-10.257C5.06 25.962 0 20.322 0 13.5zm0 0"
              fillOpacity={0.8}
              fill="#fff"
            />
            <Path
              d="M2 13.5C2 7.149 7.149 2 13.5 2S25 7.149 25 13.5c0 .767-.075 1.517-.219 2.243a1.1 1.1 0 01.021.151c-1.285 8.003-13.083 21.947-13.083 21.947s-.375.525-.733.409c-.368-.094-.205-.562-.205-.562l3.432-12.71c-.236.015-.474.022-.713.022C7.149 25 2 19.851 2 13.5zm0 0"
              fill="#4db141"
            />
            <Circle fill="#fff" cx={13.5} cy={13.5} r={8.5} />
            <Circle fill="#4db141" cx={13.5} cy={13.5} r={4.5} />
          </G>
          <G transform="translate(8.982)" fill="none">
            <Path
              d="M12.718 39.666c4.71-2.394 17.82-11.517 18.305-11.979.551-.52 1.061-1.06 1.49-1.619 3.001-4 1.122-7.62-4.429-8.03-.476-.035-1.069-.106-1.679-.16-.959 3.427-3.223 7.602-6.433 12.33a117.4 117.4 0 01-4.616 6.308 113.63 113.63 0 01-2.07 2.569 3.386 3.386 0 01-.568.58zm0 0"
              opacity={0.5}
              fill="url(#prefix__c)"
            />
            <Path
              d="M0 13.5C0 6.044 6.044 0 13.5 0S27 6.044 27 13.5c0 .782-.067 1.557-.198 2.317l.011.166-.036.228c-.595 3.703-3.054 8.473-6.805 13.997a117.4 117.4 0 01-4.616 6.308 113.63 113.63 0 01-2.07 2.569 3.386 3.386 0 01-.465.494 3.032 3.032 0 01-.727.483 2.32 2.32 0 01-1.402.17c-.115-.022-.148-.029-.216-.048a2.286 2.286 0 01-1.66-1.68 2.507 2.507 0 01-.006-1.18 2.72 2.72 0 01.05-.195l2.77-10.257C5.06 25.962 0 20.322 0 13.5zm0 0"
              fillOpacity={0.8}
              fill="#fff"
            />
            <Path
              d="M2 13.5C2 7.149 7.149 2 13.5 2S25 7.149 25 13.5c0 .767-.075 1.517-.219 2.243a1.1 1.1 0 01.021.151c-1.285 8.003-13.083 21.947-13.083 21.947s-.375.525-.733.409c-.368-.094-.205-.562-.205-.562l3.432-12.71c-.236.015-.474.022-.713.022C7.149 25 2 19.851 2 13.5zm0 0"
              fill="#ffc000"
            />
            <Circle fill="#fff" cx={13.5} cy={13.5} r={8.5} />
          </G>
          <Circle fill="#ffc000" cx={22.482} cy={13.5} r={4.5} />
          <G transform="translate(17.963)" fill="none">
            <Path
              d="M12.718 39.666c4.71-2.394 17.82-11.517 18.305-11.979.551-.52 1.061-1.06 1.49-1.619 3.001-4 1.122-7.62-4.429-8.03-.476-.035-1.069-.106-1.679-.16-.959 3.427-3.223 7.602-6.433 12.33a117.4 117.4 0 01-4.616 6.308 113.63 113.63 0 01-2.07 2.569 3.386 3.386 0 01-.568.58zm0 0"
              opacity={0.5}
              fill="url(#prefix__d)"
            />
            <Path
              d="M0 13.5C0 6.044 6.044 0 13.5 0S27 6.044 27 13.5c0 .782-.067 1.557-.198 2.317l.011.166-.036.228c-.595 3.703-3.054 8.473-6.805 13.997a117.4 117.4 0 01-4.616 6.308 113.63 113.63 0 01-2.07 2.569 3.386 3.386 0 01-.465.494 3.032 3.032 0 01-.727.483 2.32 2.32 0 01-1.402.17c-.115-.022-.148-.029-.216-.048a2.286 2.286 0 01-1.66-1.68 2.507 2.507 0 01-.006-1.18 2.72 2.72 0 01.05-.195l2.77-10.257C5.06 25.962 0 20.322 0 13.5zm0 0"
              fillOpacity={0.8}
              fill="#fff"
            />
            <Path
              d="M2 13.5C2 7.149 7.149 2 13.5 2S25 7.149 25 13.5c0 .767-.075 1.517-.219 2.243a1.1 1.1 0 01.021.151c-1.285 8.003-13.083 21.947-13.083 21.947s-.375.525-.733.409c-.368-.094-.205-.562-.205-.562l3.432-12.71c-.236.015-.474.022-.713.022C7.149 25 2 19.851 2 13.5zm0 0"
              fill="#c6cad8"
            />
            <Circle fill="#fff" cx={13.5} cy={13.5} r={8.5} />
          </G>
          <Circle fill="#c6cad8" cx={31.463} cy={13.5} r={4.5} />
        </G>
      </Svg>
    </View>
  )
}

export default MarkerAll;