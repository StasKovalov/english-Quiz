/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Modal = ({ isVisible, close, children }) => (
  isVisible ?
    <Backdrop onClick={close}>
      <Wrapper onClick={e => e.stopPropagation()}>{children}</Wrapper>
    </Backdrop> : null
);

export default Modal;

const Wrapper = styled.div`
  max-width: 95%;
  max-height: 95%;
  overflow: auto;
`;

const Backdrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 101;
  background: rgba(0, 0, 0, 0.4);
`;
