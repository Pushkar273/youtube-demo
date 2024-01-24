import React from 'react'
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

function MainContainer() {
  return (
    <div className='p-3'>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer;