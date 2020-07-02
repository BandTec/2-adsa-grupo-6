import styled from 'styled-components';

export const DivFundoNavTopo = styled.div`
    height: 80px;
    background-color: #3341A3;
`;

export const global = styled.div`
    width: 100%;
    max-height: 85vh;
    height: 100vh;
    display: grid;

    grid-template:  
        "a a c c" 1fr
        "b b c c" 1fr
        "b b c c" 1fr;
`;

export const alunoInfo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    grid-area: a;
`;
export const imgAluno = styled.img`
    width: 20%;
    height: 40%;
`;

export const alunoDetalhes = styled.div`
    height: 100%; 
    width: 50%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const alunoConsumo = styled.div`
    height: 100%; 
    width: 50%; 
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const cardAluno = styled.div`
    background-color: #FFFFFF;
    display: flex;
    padding: 3%;
    height: 90%;
    width: 85%;
    border-radius: 5px;
    box-shadow: 5px 2px 5px gray; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const consumo = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    div{
        display: flex;
        justify-content: center;
        text-align: justify;
    }

`;
export const divCardConsumo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 2vh;
`;

export const imgConsumo = styled.img`
    width: 15%;
    margin-right: 3vw;
`;

export const cardConsumo = styled.div`
    background-color: #FFFFFF;
    display: flex;
    padding: 3%;
    height: 90%;
    width: 40%;
    border-radius: 5px;
    box-shadow: 5px 2px 5px gray; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


export const grafico = styled.div`
    grid-area: b;
    display: flex;
    justify-content: center;
    align-items: center;
`;



export const processos = styled.div`
    grid-area: c;
    width: 97%;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

export const processosI = styled.div`
    height: 5vh;
    width: 90%;
    margin: 1vh 0 0 1vw;
    background-color: #011638;
    border-radius: 5px;

    div{
        
    }
`;

export const cardProcessos = styled.div`
    background-color: #FFFFFF;
    padding: 3%;
    height: 95%;
    width: 100%;
    border-radius: 5px;
    box-shadow: 5px 2px 5px gray; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: auto;
    
    div{
        color: white;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 10px;
    }
`;