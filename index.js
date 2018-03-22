import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import ChatList from './src/components/ChatList';




const App = () => {
	const { containerView } = styles;
  return (
      <View style={containerView}>
      	<Header />
      	<ChatList />
      </View>
    )
} 

const styles = {
	containerView: {
		backgroundColor: '#000',
		flex: 1,
		paddingTop: 15,
		paddingLeft: 20,
		paddingRight: 20
	}
}


AppRegistry.registerComponent('chatApp', () => App);
