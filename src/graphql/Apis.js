import fetch from 'node-fetch';
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";

const client = new ApolloClient({
    uri: "http://192.168.0.4:3000/graphql",
    fetch: fetch
});
  
const paginateQuery =  gql`
            query ($page_number: Int!, $limit: Int!){
                getBookings(page_number: $page_number,  limit: $limit){
                address
                date
                date_of_booking
                booking_id
                club_name
                isSuccess
                package_name
                total
                }
            }`

const Apis = {

    getBookingData: async function(page_number){
        try{
            const paginateVariable = {"page_number": page_number, "limit": 10 } 
            let result = await client.query({
                                query: paginateQuery,
                                variables: paginateVariable
                            })
            return result.data.getBookings;
        }catch(error){
            throw err;
        }
    },
}

export default Apis;