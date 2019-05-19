//import library to help create component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';


//Create a component
const App = () => (
	<Header />
);

// Register it to the device
AppRegistry.registerComponent('albums2', () =>  App);

