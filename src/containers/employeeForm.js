
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import FormModal from '../components/FormModal';

export default class EmployeeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentWillMount() {

    }

    _onSubmit = () => {

    }
    
    render(){
        console.log('rendering form')
        return(
            <View style={styles.container}>
                <Text>Hi!</Text>
            </View>
        )
    }
}
