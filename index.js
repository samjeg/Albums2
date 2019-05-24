//import library to help create component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumsList from './src/components/AlbumsList';


//Create a component
const App = () => (
	<View>
		<Header headerText={'ALBUMS'} />
		<AlbumsList />
	</View>
);

// Register it to the device
AppRegistry.registerComponent('albums2', () =>  App);

