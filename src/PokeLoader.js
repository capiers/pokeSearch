import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

var myBackground = require('../assets/landing.jpg');

class PokeLoader extends React.Component {
    render() {
        return(
            <View style={styles.LoaderContainer}>
				<Image 
					source={{uri: "https://media.tenor.com/images/39d6060576a516f1dd437eafccafbdb1/tenor.gif"}}
					style={styles.loaderImage}
				/>
			</View>
        );
    }
}

const styles = StyleSheet.create ({
    LoaderContainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    loaderImage: {
        height: 200,
		width: 200,
    }
});

export default PokeLoader;