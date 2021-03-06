//Import librareis to make components
import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import { BoxShadow } from 'react-native-shadow';
import { vw } from 'react-native-expo-viewport-units';


//Make a component
const Card = (props) => {
  const { viewStyle, shadowOpt } = styles; 

    return (
        <BoxShadow setting={shadowOpt}>
            <TouchableHighlight style={viewStyle}>
                <View style={viewStyle}>
                    {props.children}
                </View>
            </TouchableHighlight>
        </BoxShadow>
    );
};


const styles = {
    viewStyle: {
        position: 'relative',
        width: vw(95),
        height: vw(120),
        backgroundColor: '#fff',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        // marginVertical:5,
        overflow: 'hidden'
    },
    shadowOpt: {
        width: vw(95),
        height: vw(120),
        color: '#000',
        border: 2,
        radius: 3,
        opacity: 0.2,
        x: 0,
        y: 2,
        style: { marginVertical: 5, marginHorizontal: 7 }
    },
};


//Make componenet available to other parts of the app
export default Card;

