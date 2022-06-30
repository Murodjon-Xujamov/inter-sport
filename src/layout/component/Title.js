import React from 'react';

const Title = (props) => {
  return (
    <div className='title-block'>
      <div className='title' style={{marginBottom: `${props.mb}px`}}>{props.name}</div>
    </div>
  )
}

export default Title;
