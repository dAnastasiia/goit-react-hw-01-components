import React from 'react';
import user from '../../data/user.json';
import statisticalData from '../../data/statistical-data.json';
import Container from '../Container/Container';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';

const App = () => {
  return (
    <>
      <Container>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />

        <Statistics statisticalData={statisticalData} />
      </Container>
    </>
  );
};

export default App;
