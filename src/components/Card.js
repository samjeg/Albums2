//Import librareis to make components
import React from 'react';
import { TouchableHighlight, Dimensions } from 'react-native';
import { BoxShadow } from 'react-native-shadow';


//Make a component
const Card = (props) => {
  const { viewStyle, shadowOpt } = styles; 

  return (
    <BoxShadow setting={shadowOpt}>
      <TouchableHighlight style={viewStyle}>
          {props.children}
      </TouchableHighlight>
    </BoxShadow>
  );
};


const styles = {
    viewStyle: {
        position: 'relative',
        width: Dimensions.get('window').width,
        height: 120,
        backgroundColor: '#f5a623',
        borderRadius: 3,
        paddingTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        // marginVertical:5,
        overflow: 'hidden'
    },
    shadowOpt: {
        width: Dimensions.get('window').width,
        height: 120,
        color: '#000',
        border: 2,
        radius: 3,
        opacity: 0.2,
        x: 0,
        y: 2,
        style: { marginVertical: 5 }
    },
};


//Make componenet available to other parts of the app
export default Card;

