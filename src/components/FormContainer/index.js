
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import styles from './styles';

export default class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    _onSubmit = () => {

    }
    
    render(){
        console.log('rendering form')
        return(
            <View style={styles.container}>
                <View style={styles.header.container}>
                    <View style={styles.header.left}>
                    </View>
                    <View style={styles.header.center}>
                    </View>
                    <View style={styles.header.right}>
                    </View>
                </View>
            </View>
        )
    }
}
