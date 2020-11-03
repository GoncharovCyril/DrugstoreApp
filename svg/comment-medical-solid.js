import * as React from "react"
import { View } from 'react-native';
import Svg, { Path } from "react-native-svg"

function CommentMedicalSolid(props) {
  return (
      <View style={{ aspectRatio: 1}}>
            <Svg
              aria-hidden="true"
              data-prefix="fas"
              data-icon="comment-medical"
              className="prefix__svg-inline--fa prefix__fa-comment-medical prefix__fa-w-16"
              viewBox="0 0 512 512"
              {...props}
            >
              <Path
                fill="currentColor"
                d="M256 32C114.62 32 0 125.12 0 240c0 49.56 21.41 95 57 130.74C44.46 421.05 2.7 466 2.2 466.5A8 8 0 008 480c66.26 0 116-31.75 140.6-51.38A304.66 304.66 0 00256 448c141.39 0 256-93.12 256-208S397.39 32 256 32zm96 232a8 8 0 01-8 8h-56v56a8 8 0 01-8 8h-48a8 8 0 01-8-8v-56h-56a8 8 0 01-8-8v-48a8 8 0 018-8h56v-56a8 8 0 018-8h48a8 8 0 018 8v56h56a8 8 0 018 8z"
              />
            </Svg>
        </View>
  )
}

export default CommentMedicalSolid
