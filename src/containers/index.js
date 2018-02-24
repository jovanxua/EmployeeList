/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Realm from'realm';
import styles from './styles';
import EmployeeSchema from './data';
import EmployeeForm from './employeeForm';

export default class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      realm: null,
      _aEmployeeList: [],
      _oActiveEmployee: null,
      _bShowForm: false,
      _oDefaultEmployeeInfo: {
        firstname: '',
        middlename: '',
        lastname: '',
        birthday: '',
        address: '',
        position: '',
        salary: ''
      }
    };
  }

  componentWillMount() {
    this._initData();
  }
  
  _initData = () => {
    Realm.open({schema: [EmployeeSchema]})
    .then(realm => {
      this.setState(
        { realm },
        this._getData()
      )
    })
    .catch(error => {
      console.log(error);
    });
    
    
  }

  _addNewEmployee = () => {
    this.setState({ _bShowForm: true })
  }

  _getData = () => {
    const oEmployeeList = realm.objects('Employee');
    this.setState({ _aEmployeeList: oEmployeeList })
  }

  _onCancel = () => {
    this.setState({ _bShowForm: false })
  }

  _onSubmit = (value) => {
    this.setState({ _bShowForm: false })
  }

  render() {
    console.log('rendering index');
    const iListLen = this.state._aEmployeeList.length;

    if(this.state._bShowForm){
      return(
        <EmployeeForm
          title={this.state._oActiveEmployee ? 'MODIFY EMPLOYEE PROFILE' : 'ADD NEW EMPLOYEE'}
          visible={this.state._bShowForm}
          onCancel={this._onCancel}
          onOK={this._onSubmit}
        />
      )
    }
    else{
      return (
        <View style={styles.container}>
          {
            iListLen > 0 ?
              <Text style={styles.txtDefault}>
                {this.state._aEmployeeList}
              </Text>
            :
            <TouchableOpacity
              style={styles.contEmpty}
              onPress={this._addNewEmployee}>
              <Text style={styles.txtDefault}>
                No Existing Employee. Tap anywhere to Add.
              </Text>
            </TouchableOpacity>
          }
        </View>
      );
    }
  }
}
