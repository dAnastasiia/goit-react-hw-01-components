import React from 'react';

//Данные
import user from '../../data/user.json';
import statisticalData from '../../data/statistical-data.json';
import friends from '../../data/friends.json';

//Компоненты
import Container from '../Container/Container';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';

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

        <FriendList friends={friends} />
      </Container>
    </>
  );
};

export default App;
