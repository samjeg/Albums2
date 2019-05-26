import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
	const { containerHeaderStyle } = styles;

	return (
		<Card>
			<CardSection>
				<View style={containerHeaderStyle}>
					<Text>{props.album.title}</Text>
					<Text>{props.album.artist}</Text>
				</View>
			</CardSection>
		</Card>
	);
};

const styles = {
	containerHeaderStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around',
		height: 80,
		width: 250,
	},
};


export default AlbumDetail;

