import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from './default-avatar.jpg';

import styles from './FriendListItem.module.css';

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li className={styles.item} key={id}>
      {isOnline ? (
        <span className={styles.online}></span>
      ) : (
        <span className={styles.offline}></span>
      )}
      <img className={styles.avatar} src={avatar} alt="Avatar" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatar: defaultAvatar,
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
