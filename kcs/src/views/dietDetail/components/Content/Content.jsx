import React from 'react';

import './Content.scss';

function Content(props) {
  // const { title, content, date, time } = props;
  const { title, content, date } = props;
  return (
    <div id="Content">
      <h2>
        <strong>{title}</strong>
      </h2>
      <div className="datetime">
        <time>{date}</time>
        {/* <time>{time}</time> */}
      </div>
      <p>{content}</p>
    </div>
  );
}

export default Content;
