import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';



const App = () => {
	const { containerView } = styles;
  return (
      <View style={containerView}>
      	<Header />
      </View>
    )
} 

const styles = {
	containerView: {
		backgroundColor: '#ef553a',
		flex: 1,
		paddingTop: 15,
		paddingLeft: 20,
		paddingRight: 20,
		borderRadius: 30
	}
}


AppRegistry.registerComponent('chatApp', () => App);
