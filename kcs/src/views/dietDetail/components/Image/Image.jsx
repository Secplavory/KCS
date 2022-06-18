import React from 'react';

import './Image.scss';

function Image(props) {
  const { imagesrc } = props;
  return (
    <div id="Image">
      <img className="food-img" src={imagesrc} alt="" />
    </div>
  );
}

export default Image;
