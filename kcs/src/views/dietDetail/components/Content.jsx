import React from 'react';

function Content(props) {
  const { title, content, date, time } = props;
  return <>{title + content + date + time}</>;
}

export default Content;
