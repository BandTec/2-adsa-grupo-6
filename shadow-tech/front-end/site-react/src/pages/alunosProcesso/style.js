import styled from 'styled-components';

export const DivFundoNavTopo = styled.div`
    height: 80px;
    background-color: #3341A3;
`;

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
        /* background-color: #3341A3; */
        background-color: white;
        padding: 1vh 1vw;
        color: black;
        box-shadow: 5px 2px 5px gray;
        border-radius: 5px;
    }

    input::placeholder{
        color: black;
    }   
`;

export const listAlunos = styled.div`
    width: 75%;
    border-radius: 5px;
    margin-bottom: 3vh;
    max-height: 80vh;
    overflow: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;

    // background-color: #ccc;
`;

export const alunos = styled.div`
    display: flex;
    justify-content: center;
    width: 95%;
    margin: 1vh 1vw;
    background-color: white;
    border: 2px solid #3341A3;
    box-shadow: 5px 2px 5px gray;
    border-radius: 5px;
    padding-left: 2px;

    cursor: pointer;

    div{
        cursor: pointer;
        background-color: #FFF;
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 0 1%;
        border-radius: 5px;
        align-items: center;
        padding: 0 10px;
        color: black;
    }
`;

export const itemProcesso = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;