import React from 'react';

import LoaderGif from '../../assets/loader.gif';

import SpinnerStyled from './Spinner.style';

const Spinner = () => {
  return (
    <SpinnerStyled>
      <img src={LoaderGif} alt='Spinner' />
    </SpinnerStyled>
  );
};

export default Spinner;
