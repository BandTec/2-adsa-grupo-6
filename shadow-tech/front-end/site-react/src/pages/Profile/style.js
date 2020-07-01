import styled from 'styled-components';

export const DivFundoNavTopo = styled.div`
    height: 80px;
    background-color: #3341A3;
`;

export const global = styled.div`
    width: 100%;
    display: flex;
`;

export const left = styled.div`
    width: 50%;
`;

export const imgInfo = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const processos = styled.div`
    width: 100%;
    height: 40vh;
    max-height: 60vh;
    overflow: auto;

    div{
        color: white;
        display: flex;
        align-items: center;
        padding: 10px;
    }
`;

export const processosI = styled.div`
    height: 5vh;
    margin: 1vh 0 0 1vw;
    background-color: #011638;
    border-radius: 5px;

    div{
        
    }
`;

export const right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const especificacoes = styled.div`
    /* height: 50%; */
    /* margin-top: 2vh; */
    /* display: flex;
    flex-direction: column;
    justify-content: center; */

    label{
        text-align: left;
        font-size: 4vh;
    }
`;

export const cpu = styled.div`
    height: 50%;
    margin-top: 8vh;

    div{
        width: 100%;
        display: flex;
    }

    img{
        margin-right: 3vw;
    }

    label{
        margin-top: 3vh;
        text-align: left;
        font-size: 4vh;
    }
`;