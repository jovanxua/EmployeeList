
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import FormContainer from '../components/FormContainer';

export default class EmployeeForm extends Component {
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
            <FormContainer/>
        )
    }
}
