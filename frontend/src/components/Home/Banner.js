import React from 'react';
import logo from '../../imgs/logo.png';
import styled from 'styled-components';

const Banner = () => {
  const StyledDiv = styled.div`
    background-color: ${(props) => props.theme.dark};
  `;
  return (
    <div className='banner text-white'>
      <div className='container p-4 text-center'>
        <img src={logo} alt='banner' />
        <StyledDiv>
          <span>A place to </span>
          <span id='get-part'>get</span>
          <span> the cool stuff.</span>
        </StyledDiv>
      </div>
    </div>
  );
};

export default Banner;
