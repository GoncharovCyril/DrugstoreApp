import * as React from "react"
import { View } from 'react-native';
import Svg, { Path } from "react-native-svg"

function TelegramPlaneBrands(props) {
  return (
      <View style={{
          aspectRatio: 1,
          borderRadius: 10000,
          backgroundColor: props.roundColor,
          justifyContent: 'center',
          alignItems: 'center',
      }}>
        <View style={{
            width: "58%",
        }}>
            <Svg
              aria-hidden="true"
              data-prefix="fab"
              data-icon="telegram-plane"
              className="prefix__svg-inline--fa prefix__fa-telegram-plane prefix__fa-w-14"
              viewBox="0 0 448 512"
            >
              <Path
                fill={props.color}
                d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"
              />
            </Svg>
        </View>
      </View>

  )
}

export default TelegramPlaneBrands;
