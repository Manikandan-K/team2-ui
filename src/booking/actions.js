import axios from 'axios';
import {baseUrl} from "../movies/helper";

export const BOOKING_IN_PROGRESS = 'BOOKING_IN_PROGRESS';
export const BOOKING_SUCCESSFUL = 'BOOKING_SUCCESSFUL';
export const BOOKING_FAILED = 'BOOKING_FAILED';

const bookSeats = (booking, callback) => {
    axios.post(`${baseUrl()}/bookings`, booking)
        .then((response) => {

            console.log(response.data);
        if (response.status === 200) {
            callback({
                status: 'success',
                referenceId: response.data.bookingId
            });
        }
        else {
        }
    }).catch(
        callback({
            status: 'failed'
        })
    );
}

export default bookSeats;
