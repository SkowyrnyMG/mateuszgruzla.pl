import React from 'react';
import styled from 'styled-components';

import NavHeading from 'components/atoms/nav-heading';
import Button from 'components/atoms/button';

const Wrapper = styled.div`
  margin-top: 0;
`;

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background: ${({ theme }) => theme.base.accent.tertiary}; */
`;

const StyledInput = styled.input`
  border: none;
  margin-bottom: 1rem;
`;

const SubscribeForm = () => {
  return (
    <Wrapper>
      <NavHeading>Subscribe to newsletter</NavHeading>
      <StyledForm action=''>
        <StyledInput type='email' placeholder='email.' />
        <StyledInput type='text' placeholder='name.' />
        <Button btncolor={({ theme }) => theme.base.accent.tertiary}>SUBSCRIBE</Button>
      </StyledForm>
    </Wrapper>
  );
};

export default SubscribeForm;
