import React from 'react';
import user from '../../data/user.json';
import Profile from '../Profile/Profile';
import Container from '../Container/Container';

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
      </Container>
    </>
  );
};

export default App;
