import styled from 'styled-components'

export const divProcessos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #CCC;
  margin-bottom: 5vh;
  max-height: 50vh;
  overflow: auto;
`;

export const processos = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: #011638;
  opacity: 0.8;
  min-height: 8vh;
  width: 98%;
  margin: 1% 0;

  label{
    cursor: pointer;
    margin: 0 0.8%;
    color: white;
  }
`;