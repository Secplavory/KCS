import React from 'react';

function UserInfo(props) {
  const { name, gender, birthday } = props;
  return <>{name + gender + birthday}</>;
}

export default UserInfo;
