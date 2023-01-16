import React from "react";
import styled from "styled-components";

import Titulo from "../Titulo";
import Conta from "../Conta";
import Statement from "../Statement";

const StyledContainer = styled.div `
  background-color: #f1f1f1;
  min-height: 90vh;
  padding: 0px 15vw;
`;

const Content = styled.section `
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Container = () => {
  return (
    <StyledContainer>
      <Titulo>Olá Fulano!</Titulo>
      <Content>
        <Conta />
        <Statement />
      </Content>
    </StyledContainer>
  );
};

export default Container;
