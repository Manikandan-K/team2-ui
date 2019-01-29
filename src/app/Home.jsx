import React, { Component } from 'react';
import MovieGrid from '../movies/MovieGrid';
import CustomTabs from '../custom-tabs/CustomTabs';
import SelectLocationModal from '../locations/SelectLocationModal'

class Home extends Component {
  constructor(props) {
    super(props);

    const location = localStorage.getItem('just-cinema-user-location');
    this.state = {
      location: location
    }
  }
  locationSelected(location){
    localStorage.setItem('just-cinema-user-location', location);
    this.setState({location: location });
  }

  render() {
    let selectLocationModal;
    const tabs = ['Now showing', 'Upcoming'];
    const contents = [<MovieGrid type='NOW_SHOWING' location='chennai' /> , <MovieGrid type='UPCOMING' location='chennai' />];

    if(this.state.location === null || this.state.location == undefined){
      selectLocationModal = <SelectLocationModal show={true} locationSelected={this.locationSelected.bind(this)} />;
    }
    return (
      <div>
        <CustomTabs tabHeaders={tabs} tabContents={contents} />
        {selectLocationModal}
        <MovieGrid />
      </div>
    );
  }
}

export default Home;
