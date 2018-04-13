import React from 'react';
import { Text, View, Image } from 'react-native';
import Box from './Box';
import BoxSection from './BoxSection';

const ChatInfo = (props) => {
	const chat = props.chat;
	const { name, image } = chat;
	const { imageStyle, textStyle, viewStyle} = styles;
	return (
		
			<View>
				<View style={viewStyle} >
					<Image 
						style={imageStyle}
						source={require("../../public/img/images/laura.png")}
					/>
					<Text style={textStyle}>{name}</Text>
				</View>
			
				<View style={viewStyle}>
					<Image
						style={imageStyle}
						source={require("../../public/img/images/joshua.png")}
					 />
					<Text style={textStyle}>{name}</Text>
				</View>
			
				<View style={viewStyle}>
					<Image
						style={imageStyle}
						source={require("../../public/img/images/hs.jpg")}
					 />
					<Text style={textStyle}>{name}</Text>
				</View>
			
				<View style={viewStyle}>
					<Image 
						style={imageStyle}
						source={require("../../public/img/images/swap.jpg")}
					/>
					<Text style={textStyle}>{name}</Text>
				</View>
			
				<View style={viewStyle}>
					<Image 
						style={imageStyle}
						source={require("../../public/img/images/pal.jpg")}
					/>
					<Text style={textStyle}>{name}</Text>
				</View>
			</View>
		)
};

const styles = {
	imageStyle: {
		height: 50,
		width: 50,
		borderRadius: 50,
		flex: 2,
		margin: 10
	},
	textStyle: {
		fontSize: 20,
		flex: 8,
		color: '#192f6a',
		marginTop: 20
	},
	viewStyle: {
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'row',
		backgroundColor: '#fff',
		borderBottomWidth: 1,
		borderColor: '#192f6a'
	}
}

export default ChatInfo;