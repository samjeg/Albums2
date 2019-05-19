//Import librareis to make components
import React from 'react';
import { Text, TouchableHighlight, Dimensions } from 'react-native';
import { BoxShadow } from 'react-native-shadow';


//Make a component
const Header = () => {
	const { textStyle, viewStyle, shadowOpt } = styles; 

	return (
		<BoxShadow setting={shadowOpt}>
			<TouchableHighlight style={viewStyle}>
				<Text style={textStyle}>Albums!</Text>
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
        y: 10,
        style: { marginVertical: 5 }
    },
	textStyle: {
		fontSize: 20
	}
};


//Make componenet available to other parts of the app
export default Header;

