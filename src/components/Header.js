import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

const Header = () => {
	const { textStyle, viewStyle, textStyler } = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{moment().format('dddd')}</Text>
			<Text style={textStyler}>{moment().format('LT')}</Text>

		</View>
		)
};

const styles = {
	viewStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,

	},
	textStyle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#fff'
	},
	textStyler: {
		fontSize: 40,
		fontWeight: 'bold',
		color: '#fff'
	}
}

export default Header;