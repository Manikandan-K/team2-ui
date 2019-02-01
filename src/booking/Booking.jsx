import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import bookSeat from './actions';

const BOOKING_INITIAL = 'BOOKING_INITIAL';
const BOOKING_STARTED = 'BOOKING_STARTED';
const BOOKING_IN_PROGRESS = 'BOOKING_IN_PROGRESS';
const BOOKING_SUCCESSFUL = 'BOOKING_SUCCESSFUL';
const BOOKING_FAILED = 'BOOKING_FAILED';

class Booking extends React.Component {
    constructor(props) {
        super(props);
        this.showId = props.match.params.showId;
        this.numberOfSeats = props.tickets;
        this.showDate = props.showDate;

        this.state = {
            userName: '',
            userEmail: '',

            requestState: BOOKING_INITIAL,
            bookingSuccess: false,
            bookingFailed: false,
            referenceId: ''
        }

        this.getFormattedDate = this.getFormattedDate.bind(this);
        this.updateUserName = this.updateUserName.bind(this);
        this.updateUserEmail = this.updateUserEmail.bind(this);
        this.doneBooking = this.doneBooking.bind(this);
        this.submit = this.submit.bind(this);

    }

    componentWillMount() {
        // needs to remove it in future
        if (!this.props.show) {
            this.props.navigate("/");
            return false;
        }
    }
    getFormattedDate(date) {
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    }

    updateUserName(event) {
        this.setState({
            userName: event.target.value
        });
    }

    updateUserEmail(event) {
        this.setState({
            userEmail: event.target.value
        });
    }

    doneBooking(status) {
        if (status.status === 'success') {
            this.setState({
                bookingSuccess: true,
                bookingFailed: false,
                referenceId: status.referenceId
            });
        }
        else {
            this.setState({
                bookingSuccess: false,
                bookingFailed: true,
                referenceId: ''
            });
        }
    }

    submit(event) {
        const { show } = this.props;
        const bookingDetails = {
            numberOfSeats: this.numberOfSeats,
            showId: show.id,
            userName: this.state.userName,
            userEmail: this.state.userEmail
        }
        bookSeat(bookingDetails, this.doneBooking);
    }

    render() {
        if (!this.props.show) {
            return null;
        }

        const { movieName, cinema, showTime } = this.props.show;
        return (
            <div className="">
                <div className={this.state.bookingSuccess ? "input-screen hide" : "input-screen show"}>
                    <div className="info-sec">
                        <h2 className="title">{movieName}</h2>
                        <h3 className="screen">{cinema}</h3>

                        <div>
                            Show time: {this.getFormattedDate(this.showDate) + " " + showTime}
                        </div>
                        <div>
                            Seats: {this.numberOfSeats}
                        </div>
                    </div>

                    <div className="form-fields">
                        <form>
                            <div className="form-group">
                                <label for="exampleInputName">Name</label>
                                <input type="text" className="form-control" onChange={this.updateUserName} id="exampleInputName" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" onChange={this.updateUserEmail} id="exampleInputEmail1" placeholder="Email" />
                            </div>

                            <div className="form-group">
                                <div className={this.state.bookingFailed ? "show" : "hide"}>
                                    <div className="alert alert-danger" role="alert">
                                        <b>Dude! </b> Booking failed
                                    </div>
                                </div>
                            </div>

                            <button type="button" onClick={this.submit} className="btn btn-success">Book Now</button>
                        </form>

                    </div>
                </div>

                <div className={this.state.bookingSuccess ? "jumbotron show" : "jumbotron hide"}>
                    <h1>Dude! You got the tickets</h1>
                    <h3>Your booking has been made successfully. Your reference id is <b>{this.state.referenceId}</b>.</h3>

                    <div className="text-center">
                        <span className="glyphicon glyphicon-ok-circle text-success glyph-10x"></span>
                    </div>

                    <h4>
                        Save the reference.
                    </h4>
                </div>
            </div>

        )
    }
}

export default connect(
    (state) => ({
        show: state.app.show,
        tickets: state.app.tickets,
        showDate: state.app.showDate,
    }),
    (dispatch, ownProps) => ({
        navigate: (url) => dispatch(push(url))
    }))(Booking);