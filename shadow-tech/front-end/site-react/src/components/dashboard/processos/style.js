import styled from 'styled-components'

export const divProcessos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #CCC;
  margin-bottom: 5vh;
  height: 80vh;
  max-height: 80vh;
  overflow: auto;
`;

export const processos = styled.div`
  display: flex;
  align-items: center;
  background-color: #011638;
  opacity: 0.8;
  width: 98%;
  height: 20%;
  margin: 1% 0;

  label{
    margin: 0 0.8%;
    color: white;
  }
`;