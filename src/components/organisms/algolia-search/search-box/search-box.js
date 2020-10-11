import React from 'react';
import styled from 'styled-components';
import { connectSearchBox } from 'react-instantsearch-dom';

const StyledForm = styled.form`
  width: 100%;

  ${({ theme: { base } }) => base.mq.smallTablet} {
    margin-top: 5em;
  }

  ${({ theme: { base } }) => base.mq.bigPhone} {
    margin-top: 8em;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  background: none;
  outline: none;
  border: none;
  border-bottom: 2px solid ${({ theme: { color } }) => color.content};
  border-radius: 0;

  :active,
  :focus {
    border-color: ${({ theme: { base } }) => base.accent.secondary};

    ::placeholder {
      color: ${({ theme: { base } }) => base.accent.secondary};
    }
  }
`;

export default connectSearchBox(({ refine, currentRefinement, className, onFocus }) => (
  <StyledForm className={className}>
    <StyledInput
      className='SearchInput'
      type='text'
      placeholder='Search'
      aria-label='Search'
      onChange={(e) => refine(e.target.value)}
      value={currentRefinement}
      onFocus={onFocus}
    />
  </StyledForm>
));
