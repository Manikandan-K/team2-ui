import React, { Component } from 'react';
import MovieGrid from '../movies/MovieGrid';
import CustomTabs from '../custom-tabs/CustomTabs';
import SelectLocationModal from '../locations/SelectLocationModal'
import { connect } from 'react-redux';
import fetchLocations from '../locations/actions';
import PropTypes from 'prop-types';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    const location = localStorage.getItem('just-cinema-user-location');
    this.state = {
      location: location,
      locations: {
        items: []
      },
      fetchLocations: props.fetchLocations
    }
  }

  componentDidMount() {
    this.state.fetchLocations();
  }

  showProgress() {
    return (
      <div>Loading...</div>
    );
  }

  showError() {
    return (
      <div>Error...</div>
    );
  }

  locationSelected(location){
    localStorage.setItem('just-cinema-user-location', location);
    this.setState({location: location });
  }

  render() {
    if(this.props.locations.fetching) {
      return this.showProgress()
    }

    let selectLocationModal;
    const tabs = ['Now showing', 'Upcoming'];
    const contents = [<MovieGrid type='NOW_SHOWING' location={this.state.location} /> , <MovieGrid type='UPCOMING' location={this.state.location}/>];

    return (
      <div>
        <div className="app-home-location">
          <select value={this.state.location} onChange={(e) => {this.locationSelected(e.currentTarget.value)}}>
          {
            this.props.locations.items.map((record, index) => {
              return <option key={`location-${index}`} value={record.id}>{record.city}</option>
            })
          }
          </select>
        </div>
        <CustomTabs tabHeaders={tabs} tabContents={contents} />
        <SelectLocationModal show={this.state.location === null || this.state.location == undefined} locationSelected={this.locationSelected.bind(this)} locations={this.props.locations} />
      </div>
    );
  }
}

Home.defaultProps = {
  locations: {
    items: []
  }
}

Home.propTypes = {
  locations: PropTypes.shape({
    items: PropTypes.array,
  }),
};


export default connect(
  (state) => ({
    locations: state.locations
  }),
  (dispatch, ownProps) => ({
    fetchLocations: () => dispatch(fetchLocations())
  }))(Home);


