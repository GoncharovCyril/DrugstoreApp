import React, {useRef, useEffect} from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Animated, Button } from 'react-native';

const styles = StyleSheet.create({
   
});

const PersonalAreaScreen = ({navigation}) => {
    return (
        <View>

        </View>
    );
};


const LoadingView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 3000,
        }).start();        
    }, [fadeAnim]);

    const onPress = () => {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 3000,
            }).start();        
    };

    return (
        <TouchableOpacity
            style={{
                ...props.style,
                alignItems: 'center',
            }}
            onPress={onPress}

        >
            <Animated.View style={{
                flex: 1,
                transform: [{
                    rotateZ: fadeAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "360deg"],
                    }),
                }],
                alignItems: 'center',

            }}>
                <Animated.View
                    style={{
                        backgroundColor: 'green',
                        width: "5%",
                        height: "5%",
                        borderWidth: 1,
                        borderRadius: 100,
                    }}
                />
            </Animated.View>
        </TouchableOpacity>
        
    );
};
const App = () => (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <LoadingView style={{width: 200, height: 200}} />
    </View>
);


export default App;
