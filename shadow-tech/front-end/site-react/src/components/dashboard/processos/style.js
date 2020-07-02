import styled from 'styled-components'

export const divProcessos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #CCC;
  margin-bottom: 5vh;
  max-height: 50vh;
  overflow: auto;
    
  box-shadow: 5px 2px 5px gray;
  border-radius: 5px;
`;

export const processos = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: #3341A3;
  min-height: 8vh;
  width: 98%;
  margin: 1% 0;

  label{
    cursor: pointer;
    margin: 0 0.8%;
    color: white;
  }
`;