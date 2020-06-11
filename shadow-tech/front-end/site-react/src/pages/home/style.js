import styled from 'styled-components';

export const DivFundoNavTopo = styled.div`
    height: 70px;
    background-color: #3341A3;
`;

// HEADER
export const DivHeaderContainer = styled.div`
    /* color: #3341A3; */
    display: flex;
    flex-direction: row;
    background-color: #E5E5E5;
    width: 100%;
    height: 70vh;
    
    @media screen and (max-width: 1015px){
        background-color: green;
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
        padding: 20px 0;
        display: flex;
        justify-content: center;
        align-items: center;
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
    padding: 32px 0;
`;

export const AcessoBold = styled.b`
    padding: 0 0 32px 0;
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
    padding: 32px 0;
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
`;
export const UbiquitiEsquerda = styled.span`
    padding: 16px 32px 16px 0;
    width: 50%;
`;
export const UbiquitiDireita = styled.span`
    padding: 16px 0 16px 32px;
    width: 50%;
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

export const DivMapa = styled.div `
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
export const ImagemCiberseguranca = styled.img`
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