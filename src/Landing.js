import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import {Button} from 'native-base';

var myBackground = require('../assets/landing.jpg');

class Landing extends React.Component {
    render() {
        return(
            <View>
                <Image source={myBackground}/>
                <View style={styles.welcomContainer}>
                    <Text style={styles.welcomeText}>Welcome to PokeSearch</Text>
                    <Button
                        block={true}
                        style={styles.buttonStyles}
                        onPress={() => this.props.switchScreen("search")}
                    >
                        <Text style={styles.buttonText}>GO!</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcomContainer: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    welcomeText: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#326bc5',
    },
    buttonStyles: {
      margin: 50,
    },
    buttonText: {
      color: 'white',
    }
});

export default Landing;