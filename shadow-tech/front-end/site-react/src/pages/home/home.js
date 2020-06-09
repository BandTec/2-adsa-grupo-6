import React, {useState} from 'react';

import Imagem from '../../assets/logo.png';
import ImagemShiny from '../../assets/logo-shiny.png';
import imagem from '../../assets/imagem-rede.png';
import ciber from '../../assets/imagem-cybersecurity.png';
import contato from '../../assets/fundo-contato.png';
import ubiquiti from '../../assets/ubiquiti.png';
import search from '../../assets/search.png';
import hourglass from '../../assets/hourglass.png';
import like from '../../assets/like.png';
import money from '../../assets/money.png';
import draven from '../../assets/draven.png';

import * as S from './style';

export default function Home() {
  
  const [logoShiny, setLogoShiny] = useState(false);

  return(
    <>
      <S.DivFundoNavTopo />

      <S.DivHeaderContainer>
            <S.LogoContainer>
                    <div onMouseEnter={() => setLogoShiny(true)}
                    onMouseLeave={() => setLogoShiny(false)}>
                    {logoShiny ? <img style={{height: '60vh'}} src={ImagemShiny} alt=""/> : <img style={{height: '60vh'}} src={Imagem} /> }
                </div>
            </S.LogoContainer>
            <S.ConteudoHeader>
                <S.DivConteudo>
                    <S.DivAcesso>
                        <S.AcessoH2>TENHA A VISIBILIDADE TOTAL DA SUA REDE</S.AcessoH2>
                        <S.AcessoBold>Saiba quem a está acessando agora!</S.AcessoBold>
                        <S.BotaoLogar onClick={() => alert("MODAL DE LOGIN")}>
                            ACESSE SUA CONTA
                        </S.BotaoLogar>
                        <S.CadastrarSpan onClick={() => alert("MODAL DE CADASTRO")}>
                            Não possuo registro, desejo criar uma conta!
                        </S.CadastrarSpan>
                    </S.DivAcesso>
                </S.DivConteudo>
            </S.ConteudoHeader>
        </S.DivHeaderContainer>

        <S.BannerContrate src={imagem} alt="" srcset="" />
        
        <S.DivUbiquiti>
            <S.UbiquitiImg src={ubiquiti} />
            <S.UbiquitiTexto>
                <S.UbiquitiPrincipal>
                    Somos especializados em infraestrutura de TI. Nosso objetivo é entender as necessidades de 
                    nossos clientes e parceiros para elaborar os melhores projetos e soluções, sempre com transparência, 
                    qualidade e flexibilidade.
                </S.UbiquitiPrincipal>
                <S.UbiquitiAbaixo>
                    <S.UbiquitiEsquerda>
                        Somos especializados em infraestrutura de TI. Nosso objetivo é entender as necessidades de 
                        nossos clientes e parceiros para elaborar os melhores projetos e soluções, sempre com transparência, 
                        qualidade e flexibilidade.
                    </S.UbiquitiEsquerda>
                    <S.UbiquitiDireita>
                        Somos especializados em infraestrutura de TI. Nosso objetivo é entender as necessidades de 
                        nossos clientes e parceiros para elaborar os melhores projetos e soluções, sempre com transparência, 
                        qualidade e flexibilidade.
                    </S.UbiquitiDireita>
                </S.UbiquitiAbaixo>
                <S.DivSaibaMais>
                    <S.UbiquitiBotaoSaibaMais>SAIBA MAIS!</S.UbiquitiBotaoSaibaMais>
                </S.DivSaibaMais>
            </S.UbiquitiTexto>
        </S.DivUbiquiti>

        <S.DivComparador>
            <S.DivComparadorTitulo>
                <S.ComparadorTitulo>
                    Por que usar nosso comparador?
                </S.ComparadorTitulo>
            </S.DivComparadorTitulo>
            <S.DivQuadros>
                <S.Quadro>
                    <S.Imagem src={money}/>
                    <S.Titulo>ECONOMIZE</S.Titulo>
                    <S.Texto>Ao comparar os planos das operadoras, é possível economizar até 63%</S.Texto>
                </S.Quadro>
                <S.Quadro>
                    <S.Imagem src={hourglass}/>
                    <S.Titulo>POUPE TEMPO</S.Titulo>
                    <S.Texto>Mostramos somente os planos disponíveis na sua cidade</S.Texto>
                </S.Quadro>
                <S.Quadro>
                    <S.Imagem src={like}/>
                    <S.Titulo>IMPARCIAL</S.Titulo>
                    <S.Texto>Os resultados que mostramos não são influenciados por nenhuma operadora</S.Texto>
                </S.Quadro>
                <S.Quadro>
                    <S.Imagem src={search}/>
                    <S.Titulo>FÁCIL</S.Titulo>
                    <S.Texto>Nos dê alguns detalhes do que procura e encontramos para você</S.Texto>
                </S.Quadro>
            </S.DivQuadros>
        </S.DivComparador>

        <S.DivSectionEquipe>
            <S.DivEquipe>
                <S.TituloEquipe>
                    Equipe
                </S.TituloEquipe>
                <S.DivFotinhos>
                    <S.MembroImagem src={draven}/>
                    <S.MembroImagem src={draven}/>
                    <S.MembroImagem src={draven}/>
                    <S.MembroImagem src={draven}/>
                    <S.MembroImagem src={draven}/>
                    <S.MembroImagem src={draven}/>
                </S.DivFotinhos>
            </S.DivEquipe>
        </S.DivSectionEquipe>
        
        <S.DivSectionMapa>
            <S.DivMapa>
                    <S.Mapa 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2862323672266!2d-46.
                        66372668533753!3d-23.558161267358525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d2a5
                        270055%3A0x3c7ea4f4c7d51fb6!2sRua%20Haddock%20Lobo%2C%20595%20-%20Cerqueira%20C%C3%A9sar%2C%20S%C3%A3o%20Paulo%20
                        -%20SP%2C%2001414-002!5e0!3m2!1spt-BR!2sbr!4v1570480919396!5m2!1spt-BR!2sbr" 
                        frameborder="0" allowfullscreen=""
                    />
            </S.DivMapa>
        </S.DivSectionMapa>

        <S.ImagemCiberseguranca src={ciber} alt="" srcset="" />

        <S.DivContato style={{  
            backgroundImage: `url(${contato})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}} 
        >
            <S.Copyright>
                © 2020 ShadowTech. Todos os direitos reservados. 
            </S.Copyright>
            <S.PoliticasTermos>
                    <a href="https://policies.google.com/privacy"> Política de privacidade </a>
                    | 
                    <a href="https://policies.google.com/terms"> Termos e condições</a> 
            </S.PoliticasTermos>
            <S.ContatoLogo src={Imagem} />
        </S.DivContato>

    </>
  );
}

