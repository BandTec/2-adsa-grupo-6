import styled from 'styled-components';

export const DivFundoNavTopo = styled.div`
    height: 70px;
    background-color: #3341A3;
`;

// HEADER
export const DivHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #E5E5E5;
    width: 100%;
    height: 70vh;
    @media screen and (max-width: 1015px){
        height: auto;
        flex-direction: column;
    }
`;

export const LogoContainer = styled.div`
    padding-left: 10vw;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1015px){
        padding: 5vh 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const LogoImagem = styled.img`
    height: 60vh;
    @media screen and (max-width: 405px){
        height: auto;
    }
`;

export const ConteudoHeader = styled.div`
    height:100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const DivConteudo = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const DivAcesso = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const AcessoH2 = styled.h2`
`;

export const AcessoBold = styled.b`
    padding: 5vh 0 5vh 0;
`;

export const BotaoLogar = styled.button`
    outline: none;
    cursor:pointer;
    color: white;
    background-color: #3341A3;
    border: 1px solid white;
    border-radius: 50px;
    padding: 5vh 5vw;
    font-size: 1em;
    font-weight: 600;
    box-shadow: 0px 0px 5px;
    &:hover, :active{ 
        background-color: #3341A3AA;
    }
`;

export const CadastrarSpan = styled.span`
    cursor: pointer;
    font-weight: 600;
    padding: 5vh 10vh;
    &:hover, :active{
        text-decoration: underline;
    }
`;

// BANNER
export const BannerContrate = styled.img`
    height: auto;
    width: 100%;
`;

// UBIQUITI
export const DivUbiquiti = styled.div`
    background-color: #E5E5E5;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const UbiquitiImg = styled.img`
    padding: 6vh;
    height: 315px;
    width: 315px;
`;
export const UbiquitiTexto = styled.div`
    text-align: justify;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 32px;
    font-weight: 600;
`;
export const UbiquitiPrincipal = styled.span`
    padding: 32px;
`;
export const UbiquitiAbaixo = styled.span`
    padding: 32px;
    width: 100%;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 1015px){
        padding: 0;
        height: auto;
        flex-direction: column;
    }
`;
export const UbiquitiEsquerda = styled.span`
    padding: 16px 32px 16px 0;
    width: 50%;
    @media screen and (max-width: 1015px){
        padding: 32px;
        width: 100%;
    }
`;
export const UbiquitiDireita = styled.span`
    padding: 16px 0 16px 32px;
    width: 50%;
    @media screen and (max-width: 1015px){
        padding: 32px;
        width: 100%;
    }
`;
export const DivSaibaMais = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 32px 0;
    width: 100%;
`;
export const UbiquitiBotaoSaibaMais = styled.button`
    outline: none;
    cursor:pointer;
    color: white;
    background-color: #3341A3;
    border: 1px solid white;
    border-radius: 50px;
    padding: 5vh 5vw;
    font-size: 1em;
    font-weight: 600;
    width: auto;
    box-shadow: 0px 0px 5px;
    &:hover, :active{ 
        background-color: #3341A3AA;
    }
`;

// POR QUE USAR NOSSO COMPARADOR?
export const DivComparador = styled.div`
    height: 60vh; 
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 1015px){
        height: auto;
    }
`;
export const DivComparadorTitulo = styled.div`
`;
export const ComparadorTitulo = styled.h1`
`;
export const DivQuadros = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 1015px){
        height: auto;
        flex-direction: column;
    }
`;
export const Quadro = styled.div`
    width: 20vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const Imagem = styled.img`
    padding: 25%;
`;
export const Titulo = styled.h2`
    text-align: center;
`;
export const Texto = styled.p`
    padding: 32px;
    text-align: justify;
`;

// EQUIPE ANTIGO - TESTE
export const DivSectionEquipe = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    min-height: 40vh;
`;
export const DivEquipe = styled.div`
    text-align: center;
    width: 100%;
    height: auto;
    min-height: 100%;
    background-repeat: no-repeat;
`;
export const TituloEquipe = styled.h1`
    padding-top: 10vh;
`;
export const DivFotinhos = styled.div`
    padding: 10vh 0;
`;
export const MembroImagem = styled.img``;

// MAPA 
export const DivSectionMapa = styled.div`
    display: flex;
    width: 100%;
    height: 70vh;
`;

export const DivMapa = styled.div`
    background-color: #FFF;
    width: 100%;
    height: 100%;
`;

export const Mapa = styled.iframe`
    width: 100%;
    height: 100%;
    border: 0;
`;

// CIBERSEGURANÇA
export const ImagemCiberSeguranca = styled.img`
    cursor: pointer;
    height: auto;
    width: 100%;
`;

// CONTATO 
export const DivContato = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    padding: 3%;
`;
export const Copyright = styled.span`
    padding: 1% 0;
`;
export const PoliticasTermos = styled.span`
    padding: 1% 0;
`;

export const ContatoLogo = styled.img`
    height: 100px;
`;

// MODAL
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
    padding: 1vh 1vw;
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
    box-shadow: 0px 0px 5px;
    &:hover, :active{ 
        background-color: #3341A3AA;
    }
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