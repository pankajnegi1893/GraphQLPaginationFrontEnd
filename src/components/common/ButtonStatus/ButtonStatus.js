
import React from 'react';
import {Platform, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const ButtonStatus = (props) => {
    const buttonText =  props.isSuccess ? 'Success' : 'Cancelled'
    return (
        <TouchableOpacity
            style={[styles.buttonStyle, props.isSuccess ? styles.successStyle: styles.warningStyle]}
            activeOpacity={.5}>
            <Text text={buttonText} style={styles.textStyle}>{buttonText}</Text>
      </TouchableOpacity>
    )
}

ButtonStatus.propTypes = {
    isSuccess: PropTypes.bool.isRequired
};

ButtonStatus.defaultProps = {
    isSuccess: false
};

const styles = {
    buttonStyle : {
        marginTop: 20,
        paddingVertical: Platform.OS == 'ios' ? 0 : 10,
        marginHorizontal:10,
        borderRadius: 10,
        height: 30,
        justifyContent: 'center',
    },

    successStyle: {
        backgroundColor: '#62d77b',
    },

    warningStyle: {
        backgroundColor: '#eac552',
    },

    textStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 14,
    },
  };

export { ButtonStatus };