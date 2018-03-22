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
		backgroundColor: '#192f6a',
		height: 80,
		borderColor: '#192f6a',
		borderWidth: 1,
		marginBottom: 10
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