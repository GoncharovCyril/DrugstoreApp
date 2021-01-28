import * as React from "react"
import { View } from 'react-native';
import Svg, { Path } from "react-native-svg"


function ChevronLeftSolid(props) {
    return (
        <View style={{ aspectRatio: 1, width: '100%', height: '100%' }}>
            <Svg
                aria-hidden="true"
                data-prefix="fas"
                data-icon="exchange-alt"
                className="prefix__svg-inline--fa prefix__fa-exchange-alt prefix__fa-w-16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="100%"
                height="100%"
                {...props}
            >
                <Path
                    fill="currentColor"
                    d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"
                />
            </Svg>
        </View>
    )
}


export default ChevronLeftSolid;
