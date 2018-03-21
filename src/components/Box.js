import React from 'react';
import { View } from 'react-native';

const Box = (props) => {
	return (
		<View style={styles.containerStyle}>
			{props.children}
		</View>
		)
};

const styles = {
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#fff',
		borderBottomWidth: 0
	}
}

export default Box;