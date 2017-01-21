import './styles.css';
import React from 'react';

export default () => {
  let typeList = ["legoFlinders"];
  let type = typeList[Math.floor(Math.random() * typeList.length)];
  return <div className={ `HomeMedia u-${type}` } />
}
