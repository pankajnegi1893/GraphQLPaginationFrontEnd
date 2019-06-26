
import React, {Component} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import { ListItem } from '../../common/ListItem/ListItem';
import  {Spinner} from '../../common/Spinner/Spinner';
import Apis from '../../../graphql/Apis';
import DateHelper from '../../../utils/DateHelper';

export default class Booking extends Component {

    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            bookings: [],
            page_number: 0,
            loading: false
        }
    }

    componentDidMount(){
        this._isMounted = true;
        this.getPaginateData();
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    getPaginateData = () => {
        if (this._isMounted) {
            this.setState({
                loading: true
            }, () => {
                this.loadMore();
            }) 
        }
    }

    loadMore = async() => {
        var isConnectedToInternet =  await DateHelper.isConnectedToInternet();
        
        if(!isConnectedToInternet){
            alert("No Internet Connection");
            this.changeLoadingState(false);
            return;
        }

        try{
            let results = await Apis.getBookingData(this.state.page_number);
            if (this._isMounted) {
                if(results.length == 0) {
                    this.changeLoadingState(false);
                    return;
                }
                this.setState({
                    bookings: this.state.bookings.concat(results),
                    page_number: this.state.page_number + 1,
                    loading: false
                })
            }
        }catch(err){
            if (this._isMounted) {
                this.changeLoadingState(false);
            } 
        }
    }

    changeLoadingState = (isLoading) => {
        this.setState({
            loading: isLoading
        })
    }

    renderItem = ({ item }) => {
        return <ListItem booking={item}></ListItem>
    }

    render() {
        return (
            <View style={{flex:1, flexDirection: 'column'}}>
                {this.state.page_number != 0 && <FlatList
                    style={{ paddingTop: 8 }}
                    showsVerticalScrollIndicator={true}
                    data={this.state.bookings} 
                    renderItem={this.renderItem}
                    onEndReached={({ distanceFromEnd }) => {
                        console.log('on end reached ', distanceFromEnd);
                        this.getPaginateData();
                    }}
                    onEndReachedThreshold={0.5}
                    keyExtractor={(item, index) => index.toString()}
                /> 
                }
                {!!this.state.loading && 
                    <View style={{height: 40, marginTop: 10}}>
                        <Spinner size='large'></Spinner>
                    </View>
                }
                
            </View>
        
        );
    }
}

const styles = StyleSheet.create({

});
