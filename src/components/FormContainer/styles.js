import React, {StyleSheet} from 'react-native';

export default {
    container: {
        flex:1
    },

    header: {
        container: {
            height: 60,
            backgroundColor: '#EEB843',
            flexDirection: 'row'
        },

        left: {
            width: 60,
            backgroundColor: 'blue'
        },

        right: {
            width: 100,
            backgroundColor: 'blue'
        },

        center: {
            flex: 1,
            backgroundColor: 'yellow'
        }
    },

    contEmpty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    welcome: {
        fontSize: 16
    },

    form: {
        container: {
            paddingTop: 30,
            paddingBottom: 30,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            maxWidth: 400,
            minWidth: 300
        },
    }
}
   