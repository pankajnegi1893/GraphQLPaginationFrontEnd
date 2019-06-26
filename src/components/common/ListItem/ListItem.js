import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import { Card } from 'native-base';
import {ButtonStatus} from '../ButtonStatus/ButtonStatus';
import Icon from 'react-native-vector-icons/Ionicons';
import DateHelper from '../../../utils/DateHelper';
import PropTypes from 'prop-types';
import styles from './listStyle'; 


const ListItem = (props) => {
    const { package_name, date, isSuccess, club_name, address, booking_id, date_of_booking, total } = props.booking;
    return (
        <Card style={styles.containerStyle}>
            <View style={styles.columnStyle}>
                <View style={styles.rowStyle}>
                    <View style={{marginTop:20, marginHorizontal:10, flex: 0.60, flexDirection: 'column'}}>
                        <Text style={styles.fontLargeBold}>{package_name}</Text>
                        <Text style={[styles.fontSmall, {marginTop:4}]}>{DateHelper.formatToDateAMPM(new Date(date))}</Text>
                    </View>
                    <View style={{flex: 0.40, flexDirection: 'column'}}>
                        <ButtonStatus isSuccess={isSuccess}></ButtonStatus>
                        {!isSuccess &&
                            <View style={[styles.rowStyle, styles.contentCenter, {marginTop:10}]}>
                                <Icon name="ios-checkmark-circle" color="#eac552" size={20}></Icon>
                                <Text style={{marginLeft:8, fontSize: 10}}>Refund Successful</Text>
                            </View>  
                        }
                        
                    </View>    
                </View>
                <View style={styles.rowStyle}>
                    <View style={{marginTop:8, marginLeft:10, marginRight:10, flex: 1, flexDirection: 'column'}}>
                        <Text style={styles.fontLargeBold}>{club_name}</Text>
                        <Text style={[styles.fontSmall, {marginTop:4}]}>{address}</Text>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row', marginTop:12, marginHorizontal:10,  justifyContent: 'space-between'}}>
                    <View style={styles.columnStyle}>
                        <Text style={styles.fontSmall}>BOOKING ID</Text>
                        <Text style={styles.fontMediumBold}>{booking_id}</Text>
                    </View>
                    <View style={{marginHorizontal:2, flex: 1, flexDirection: 'column'}}>
                        <Text style={styles.fontSmall}>DATE OF BOOKING</Text>
                        <Text style={styles.fontMediumBold}>{DateHelper.formatToDate(new Date(date_of_booking))}</Text>
                    </View>
                    <View style={[{marginHorizontal:2}, styles.columnStyle]}>
                        <Text style={[ styles.fontSmall , {marginLeft:10}]}>TOTAL</Text>
                        <Text style={[ styles.fontMediumBold,{marginLeft:10}]}>₹ {total}</Text>
                    </View>
                </View>
                <View style={[styles.rowStyle, {marginTop:10,  backgroundColor: '#f3f3f3', height:1}]}></View>
                <View style={[styles.rowStyle, styles.contentCenter, {marginVertical: 10}]}>
                        <TouchableWithoutFeedback
                            style={styles.buttonStyle}>
                            <Text style={styles.textStyle}>View Details</Text>
                        </TouchableWithoutFeedback>
                </View>
            </View> 
        </Card> 
    )
}

ListItem.propTypes = {
    booking: PropTypes.shape({
        address: PropTypes.string.isRequired,
        booking_id: PropTypes.number.isRequired,
        club_name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        date_of_booking: PropTypes.string.isRequired,
        package_name: PropTypes.string.isRequired,
        isSuccess: PropTypes.bool.isRequired,
        total: PropTypes.number.isRequired  
      }).isRequired
};
  
ListItem.defaultProps = {
    booking: {
       address :"address here, India",
       booking_id :103624452,
       club_name :"Fun Unlimited Club",
       date :"12 Jun 2019 04:00 PM",
       date_of_booking:"12 Jun 2019 04:00 PM",
       isSuccess :true,
       package_name :"Package Name",
       total :43543
    },
  };



export { ListItem };