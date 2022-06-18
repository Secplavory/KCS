import React from 'react';

import Individual from '../../../../asserts/PersonalInformationPage/Individual.png';
import './UserInfo.scss';

function UserInfo(props) {
  // const { name, gender, birthday } = props;
  const { name } = props;
  return (
    <div id="UserInfo">
      <img className="user-img" src={Individual} alt="" />
      <span className="user-name">
        <strong>{name}</strong>
      </span>
    </div>
  );
}

export default UserInfo;
