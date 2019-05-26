//Import librareis to make components
import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { BoxShadow } from 'react-native-shadow';


//Make a component
const Header = (props) => {
	const { textStyle, viewStyle, shadowOpt } = styles; 

	return (
		<BoxShadow setting={shadowOpt}>
			<TouchableHighlight style={viewStyle}>
				<Text style={textStyle}>{ props.headerText }</Text>
			</TouchableHighlight>
		</BoxShadow>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#f5a623',
		justifyContent: 'center',
		alignItems: 'center',
        height: 60,
        width: 400,
        borderRadius: 3,
        // marginVertical:5,
        overflow: 'hidden',
        elevation: 2,
        position: 'relative',
        // marginHorizontal: 10
	},
	shadowOpt: {
		width: 400,
        height: 60,
        color: '#000',
        border: 2,
        radius: 3,
        opacity: 0.2,
        x: 0,
        y: 2,
        style: { marginVertical: 5, marginHorizontal: 7 },
    },
	textStyle: {
		fontSize: 20
	}
};


//Make componenet available to other parts of the app
export default Header;

