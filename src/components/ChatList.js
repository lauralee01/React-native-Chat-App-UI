import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import ChatInfo from './ChatInfo';
import data from '../../data.json';

const chat = data.chat;

class ChatList extends Component {
	state = { chat: [] };
	componentWillMount() {
		this.setState({ chat: chat});
	}

	renderChat() {
		return this.state.chat.map(chat => 
			<ChatInfo key={chat.name} chat={ chat } />
			);
	}
	render() {
		return (
			<ScrollView>
				{this.renderChat()}
			</ScrollView>
		);
	}
}

export default ChatList;