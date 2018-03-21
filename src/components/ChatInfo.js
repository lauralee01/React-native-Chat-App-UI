import React from 'react';
import { Text, View, Image } from 'react-native';
import Box from './Box';
import BoxSection from './BoxSection';

const ChatInfo = () => {
	const { name, image } = chat;
	const { imageStyle, textStyle, viewStyle} = styles;
	return (
		<Box>
			<BoxSection>
				<View style={viewStyle}>
					<Image 
						style={imageStyle}
						source={"/public/img/images/laura.png"}
					/>
					<Text>{name}</Text>
				</View>
			</BoxSection>
			<BoxSection>
				<View style={viewStyle}>
					<Image
						style={imageStyle}
						source={"/public/img/images/joshua.png"}
					 />
					<Text>{name}</Text>
				</View>
			</BoxSection>
			<BoxSection>
				<View style={viewStyle}>
					<Image
						style={imageStyle}
						source={"/public/img/images/hs.png"}
					 />
					<Text>{name}</Text>
				</View>
			</BoxSection>
			<BoxSection>
				<View style={viewStyle}>
					<Image 
						style={imageStyle}
						source={"/public/img/images/swap.jpg"}
					/>
					<Text>{name}</Text>
				</View>
			</BoxSection>
			<BoxSection>
				<View style={viewStyle}>
					<Image 
						style={imageStyle}
						source={"/public/img/images/pal.jpg"}
					/>
					<Text>{name}</Text>
				</View>
			</BoxSection>
		</Box>
		)
};

const styles = {
	imageStyle: {
		height: 50,
		width: 50,
		borderRadius: 50,
		flex: 4
	},
	textStyle: {
		fontSize: 20,
		flex: 6
	},
	viewStyle: {
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'column'
	}
}

export default ChatInfo;