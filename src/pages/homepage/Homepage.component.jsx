import React from 'react';
import '../homepage/homepage.styles.scss';
import DIrectory from '../../components/directory/DIrectory.components';

const HomePage = ({ history }) => {
  return (
    <div className="hompage">
      <DIrectory />
    </div>
  );
};

export default HomePage;
