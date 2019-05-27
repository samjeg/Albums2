import React from 'react';
import { Text, View, Image } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail = ({ album }) => {
	const { containerHeaderStyle, imageStyle, imageHeaderStyle } = styles;
	const { title, artist, image, thumbnail_image } = album;

	return (
		<Card>
			<CardSection>
				<View>
					<Image 
						style={imageHeaderStyle}
						source={{ uri: thumbnail_image }} 
					/>
				</View>
				<View style={containerHeaderStyle}>
					<Text>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>

			<CardSection>
				<Image 
					style={imageStyle}
					source={{ uri: image }}	
				/>
			</CardSection>

			<CardSection>
				<Button onPress={() => console.log('Hola!')}>
					Buy Now
				</Button>
			</CardSection>
		</Card>
	);
};

const styles = {
	containerHeaderStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around',
		height: vw(10),
		width: vw(80),
	},
	imageHeaderStyle: {
		height: vw(10),
		width: vw(10),
		marginHorizontal: vw(1.5),
	},
	imageStyle: {
		height: vw(90),
		flex: 1,
		width: null
	}
};


export default AlbumDetail;

