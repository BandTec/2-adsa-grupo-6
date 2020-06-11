import styled from 'styled-components';

export const alunosSearch = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

export const search = styled.div`
    width: 70%;
    margin: 8vh 0 6vh;
    display:flex; 
    align-items: center;
    justify-content: center;

    input{
        height: 40px;
        width: 80%;
        margin-right: 10px;
        background-color: #011638;
        border-radius: 5px;
    }

    input::placeholder{
        color: white;
    }   

`

export const listAlunos = styled.div`
    width: 90%;
    border-radius: 5px;
    margin-bottom: 3vh;
    max-height: 80vh;
    overflow: auto;

    /* background-color: #FFF; */
`;

export const alunos = styled.div`
    display: flex;
    justify-content: center;
    width: 97%;
    margin: 1vh 1vw;

    cursor: pointer;

    div{
        cursor: pointer;
        background-color: #011638;
        display: flex;
        width: 100%;
        margin: 0 1%;
        border-radius: 5px;
        align-items: center;
        padding: 0 10px;
        color: white;
    }
`;
