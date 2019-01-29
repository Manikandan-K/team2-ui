import React from 'react';
import MovieGrid from '../movies/MovieGrid';
import CustomTabs from '../custom-tabs/CustomTabs';


class Home extends React.Component {
  render() {
    const tabs = ['Now showing', 'Upcoming'];
    const contents = [<MovieGrid type='NOW_SHOWING' location='chennai' /> , <MovieGrid type='UPCOMING' location='chennai' />];
    return (
      <div>
        <CustomTabs tabHeaders={tabs} tabContents={contents} />
      </div>  
    )
  }
}

export default Home;