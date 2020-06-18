import styled from 'styled-components';

export const NavigationBarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    height: 80px;
    width: 100%;
    display: flex; 
    flex-direction: column;
`;
export const NavigationBar = styled.div`
    background-color: #3341A3;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`;
export const LogoContainer = styled.div`
    padding: 5px 1vw 0 1vw;
`;
export const LogoImagem = styled.img`
    height: 70px;
`;
export const ButtonsContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and (max-width: 700px){
        width: 80%;
    }
`;
export const Button = styled.button`
    color: white;
    font-size: 1.5em;
    width: 23%;
    height: 100%;
    cursor: pointer;
    border: none;
    background-color: inherit;
    outline: none;
    &:hover, :active{ 
        color: #3341A3;
        background-color: #FFFFFF88;
        transition: 0.5s;
    }
`;
export const Dropdown = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: red;
`;
export const DropdownContainer = styled.div`
    display: flex; 
    justify-content: flex-end;
    width: 100%;
    background-color: green;
`;
export const DivDropdown = styled.div`
    z-index: 1000;
    width: 50%;
    height: 0;
    background-color: blue;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    @media screen and (max-width: 700px){
        width: 80%;
    }
`;
export const DropdownOption = styled.div`
    width: 23%;
    height: 20vh;
    min-height: 80px;
    background-color: #3341A3;
    display: flex;
    flex-direction: column;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
`;
export const DropdownItem = styled.div`
    box-sizing: border-box;
    cursor: pointer;
    font-weight: 600;
    border: 1px solid #3341A3;
    border-top: none;
    color: #3341A3;
    background-color: #E5E5E5;
    padding: 4vh;
    width: 100%;
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover, :active{ 
        color: #3341A3;
        background-color: #FFFFFF88;
        transition: 0.5s;
    }
    &:last-child{ 
        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 20px;
    }
`;

export const Modal = styled.div`
    height: auto;
    width: 45vw;
    min-width: 300px;
    background-color: #E5E5E5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #3341A3;
    border-right: 20px solid #3341A3;
    border-radius: 2%;
    @media screen and (max-width: 310px){
        min-width: 100%;
    }
`;
export const DivTituloModal = styled.div`
    color: #3341A3;
    padding-top: 5vh;
    align-items: center;
    justify-content: center;
    display: flex;
`;
export const TituloModal = styled.h1`
    text-align: center;
`;
export const ConteudoModal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5vh 0;
    width: 80%;
`;
export const DivLabelInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2vh 0;
`;
export const InputModal = styled.input`
    background-color: #DDDDDD;
    outline: none;
    padding: 1vh 1vw;
    border: 1px solid #3341A3;
    border-radius: 50px;
    width: 100%;
`;
export const DivCheck = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 2vh 0;
`;
export const CheckboxModal = styled.input`
    margin: 1vh 1vw 1vh 0;
`;
export const LabelModal = styled.label`
    font-weight: 600;
`;
export const ButtonModal = styled.button`
    font-weight: 600;
    padding: 1vh 1vw;
    outline: none;
    cursor:pointer;
    color: white;
    background-color: #3341A3;
    border: 1px solid white;
    border-radius: 50px;
    box-shadow: 0px 0px 5px;
    &:hover, :active{ 
        background-color: #3341A3AA;
    }
`;
export const DivContainerClose = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
`;
export const SpanClose = styled.span`
    padding-left: 10px;
    cursor: pointer;
    font-size: 50px; 
    font-weight: 1600;
    color: #3341A3;
`;
export const SpanEsqueciSenha = styled.span`
    padding-top: 4vh;
    cursor: pointer;
    font-weight: 600;
    &:hover, :active{
        text-decoration: underline;
    }
`;
export const DivEsqueciSenha = styled.div`
    width: 100%;
    padding: 1vh 1vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalEsqueciSenha = styled.div`
    height: auto;
    width: 35vw;
    border: 1px solid #3341A3;
    border-radius: 2%;
    background-color: #E5E5E5;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const DivDescricaoSenha = styled.div`
    padding: 3vh 0 1vh 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const DescricaoEsqueciSenha = styled.b`
    text-align: justify;
    width: 80%;
`;