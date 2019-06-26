import NetInfo from "@react-native-community/netinfo";

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", 
"Aug", "Sept", "Oct", "Nov", "Dec"];

const DateHelper = {

        formatToDateAMPM: function(date){
            return this.formatToDate(date) + ', ' + this.formatAMPM(date);
        },

        formatAMPM: function(date){
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            hours = hours < 10 ? '0'+hours : hours;
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var strTime = hours + ':' + minutes + '' + ampm;
            return strTime;
        },
        formatToDate: function(date){
            var dayDate =  date.getDate();
            var month = date.getMonth();
            var year = date.getFullYear();

            dayDate = dayDate < 10 ? '0'+dayDate : dayDate;
            month = month < 10 ? '0'+month : month;

            var strDate = dayDate + ' ' + monthNames[date.getMonth()] + ' ' + year;
            return strDate;
        },

        isConnectedToInternet: async function() {
            try{
               let state = await NetInfo.fetch(); 
               console.log('state.isConnected :- ', state.isConnected);
               return state.isConnected;
            }catch (err){
                console.log(err);
                return false;
            }
        }
}

export default DateHelper;