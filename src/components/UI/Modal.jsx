import React from "react";
import styled from "styled-components";

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.32);
  opacity: 1;
`;

const Main = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 70%;
  padding: 24px;
  left: 15%;
  top: 30%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  transform: ${({ show }) => (show ? "translateY(0)" : "translateY(-100vh)")};
  opacity: ${({ show }) => (show ? "1" : "0")};
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
    0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
  border-radius: 4px;

  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`;

function Modal({ show, children }) {
  return (
    <>
      {show && <Backdrop />}
      <Main show={show}>{children}</Main>
    </>
  );
}

export default Modal;
