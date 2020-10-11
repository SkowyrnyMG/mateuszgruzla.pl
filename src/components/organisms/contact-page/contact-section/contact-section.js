import React from 'react';
import styled from 'styled-components';

import SocialList from 'components/modules/social-list/social-list';
import ContactForm from 'components/modules/contact-form/contact-form';

const Wrapper = styled.section`
  margin-bottom: 7.5rem;
  width: 100%;
  display: flex;
  align-items: flex-start;
  ${({ theme: { base } }) => base.mq.bigTablet} {
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${({ theme: { base } }) => base.mq.bigTablet} {
    margin-bottom: 15rem;
    /* align-items: center; */
  }
`;

const StyledParagraph = styled.p`
  margin-bottom: 5rem;
  font-size: ${({ theme: { base } }) => base.fontSize.m};
`;

const FormWrapper = styled.div`
  flex-basis: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme: { base } }) => base.mq.bigTablet} {
    flex-basis: 100%;
    width: 100%;
  }
`;

const ContactSection = () => {
  return (
    <Wrapper>
      <ContactInfo>
        <StyledParagraph>If you want to chat with me you can use contact form or just simply write to me on my social profiles.</StyledParagraph>
        <SocialList vertical />
      </ContactInfo>
      <FormWrapper>
        <ContactForm />
      </FormWrapper>
    </Wrapper>
  );
};

export default ContactSection;
