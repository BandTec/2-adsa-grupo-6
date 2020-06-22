import React, { useState } from 'react';
import { useModal } from 'use-react-modal';
import { useHistory } from 'react-router-dom';

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

import NavigationBar from '../../components/navigation-bar/navigation-bar';

import api from '../../services/api';

import * as S from './style';

export default function Home() {

    const hist = useHistory();

    const [logoShiny, setLogoShiny] = useState(false);

    const [esqueciSenha, setEsqueciSenha] = useState(false);

    const [abrirModalLogin, fecharModalLogin, isOpenModalLogin, ModalLogin] = useModal({
        background: 'rgba(0,0,0,0.3)',
        onClose({ targetEl, event, portal }) {
            setEsqueciSenha(false);
        }
    });

    const [abrirModalCadastro, fecharModalCadastro, isOpenCadastro, ModalCadastro] = useModal({
        background: 'rgba(0,0,0,0.3)'
    });

    const [abrirModalSaibaMais, fecharModalSaibaMais, isOpenSaibaMais, ModalSaibaMais] = useModal({
        background: 'rgba(0,0,0,0.3)',
    });

    async function handleLogin() {

        let email = document.getElementById('txtEmail').value;
        let senha = document.getElementById('txtSenha').value;

        await api.post('/userLogin', { "email": email, "senha": senha }).then(res => {
            fecharModalLogin();
            hist.push('/dashboards');
        }).catch(error => {
            if (error.response.status === 404) {
                alert('Credenciais inválidas!');
            }else{
                alert('Erro de conexão!');
            }
        });
    }

    async function handleRegister() {

        let nome = document.getElementById('txtNome').value;
        let email = document.getElementById('txtEmail').value;
        let senha = document.getElementById('txtSenha').value;
        let confirmarSenha = document.getElementById('txtConfirmaSenha').value;

        await api.post('/listEmail', { "email": email }).then(res => {
            alert('Usuário já cadastrado');
        }).catch(error => {
            if (error.response.status === 404) {
                if (nome !== "" &&
                    email !== "" &&
                    senha !== "") {
                        if(senha.length > 5){
                            if (senha === confirmarSenha) {
                                if(email.endsWith('@bandtec.com.br') && email !== '@bandtec.com.br'){
                                    api.post('/user', { "nome": nome, "email": email, "senha": senha }).then(function (res) {
                                        alert('Usuario cadastrado com sucesso');
                                    }).catch(function (error) {
                                        alert('Credenciais inválidas!');
                                    });
                                }else{
                                    alert('Seu email não pertence a nenhuma instituição cadastrada')
                                }
                            } else {
                                alert('Senhas não compativeis ');
                            }
                        }else{
                            alert('Senha deve conter no minimo 6 caracteres');
                        }
                } else {
                    alert('Por favor , não deixar nenhum campo vazio');
                    }
            } else {
                alert('Sem conexão com o banco')
            }
        })
    }

    return (
        <>
            <S.DivFundoNavTopo />
            <NavigationBar />
            <S.DivHeaderContainer>
                <S.LogoContainer>
                    <div onMouseEnter={() => setLogoShiny(true)}
                        onMouseLeave={() => setLogoShiny(false)}>
                        {logoShiny ? <S.LogoImagem src={ImagemShiny} alt="" /> : <S.LogoImagem style={{ height: '60vh' }} src={Imagem} />}
                    </div>
                </S.LogoContainer>
                <S.ConteudoHeader>
                    <S.DivConteudo>
                        <S.DivAcesso>
                            <S.AcessoH2>TENHA A VISIBILIDADE TOTAL DA SUA REDE</S.AcessoH2>
                            <S.AcessoBold>Saiba quem a está acessando agora!</S.AcessoBold>
                            <S.BotaoLogar onClick={abrirModalLogin}>
                                ACESSE SUA CONTA
                            </S.BotaoLogar>
                            <S.CadastrarSpan onClick={abrirModalCadastro}>
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
                        <S.UbiquitiBotaoSaibaMais onClick={abrirModalSaibaMais}>SAIBA MAIS!</S.UbiquitiBotaoSaibaMais>
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
                        <S.Imagem src={money} />
                        <S.Titulo>ECONOMIZE</S.Titulo>
                        <S.Texto>Ao comparar os planos das operadoras, é possível economizar até 63%</S.Texto>
                    </S.Quadro>
                    <S.Quadro>
                        <S.Imagem src={hourglass} />
                        <S.Titulo>POUPE TEMPO</S.Titulo>
                        <S.Texto>Mostramos somente os planos disponíveis na sua cidade</S.Texto>
                    </S.Quadro>
                    <S.Quadro>
                        <S.Imagem src={like} />
                        <S.Titulo>IMPARCIAL</S.Titulo>
                        <S.Texto>Os resultados que mostramos não são influenciados por nenhuma operadora</S.Texto>
                    </S.Quadro>
                    <S.Quadro>
                        <S.Imagem src={search} />
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
                        <S.MembroImagem src={draven} />
                        <S.MembroImagem src={draven} />
                        <S.MembroImagem src={draven} />
                        <S.MembroImagem src={draven} />
                        <S.MembroImagem src={draven} />
                        <S.MembroImagem src={draven} />
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

            <S.ImagemCiberSeguranca src={ciber} onClick={() => window.open('https://www.cisco.com/c/en/us/products/security/what-is-cybersecurity.html', '_blank')} alt="" srcset="" />

            <S.DivContato style={{
                backgroundImage: `url(${contato})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
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

            {isOpenModalLogin && (
                <ModalLogin>
                    <S.Modal>
                        <S.DivContainerClose>
                            <S.SpanClose onClick={fecharModalLogin}>
                                &times;
                            </S.SpanClose>
                        </S.DivContainerClose>
                        <S.DivTituloModal>
                            <S.TituloModal>
                                LOGIN
                            </S.TituloModal>
                        </S.DivTituloModal>
                        <S.ConteudoModal>
                            <S.DivLabelInput>
                                <S.LabelModal htmlFor="txtEmail">E-mail:</S.LabelModal>
                                <S.InputModal type="email" name="email" id="txtEmail" placeholder="Insira o seu e-mail" />
                            </S.DivLabelInput>
                            <S.DivLabelInput>
                                <S.LabelModal htmlFor="txtSenha">Senha:</S.LabelModal>
                                <S.InputModal type="password" id="txtSenha" placeholder="Insira a sua senha" />
                            </S.DivLabelInput>
                            <S.DivCheck>
                                <S.CheckboxModal type="checkbox" id="chkLembrar" />
                                <S.LabelModal htmlFor="chkLembrar">Lembrar de mim</S.LabelModal>
                            </S.DivCheck>
                            <S.ButtonModal onClick={handleLogin}>
                                ACESSAR
                            </S.ButtonModal>
                            <S.DivEsqueciSenha>
                                <S.SpanEsqueciSenha onClick={() => setEsqueciSenha(true)}>
                                    Esqueci minha senha
                                </S.SpanEsqueciSenha>
                            </S.DivEsqueciSenha>
                        </S.ConteudoModal>

                        {esqueciSenha && (
                            <S.ModalEsqueciSenha>
                                <S.DivContainerClose>
                                    <S.SpanClose onClick={() => setEsqueciSenha(false)}>
                                        &times;
                                    </S.SpanClose>
                                </S.DivContainerClose>
                                <S.DivTituloModal>
                                    <S.TituloModal>
                                        ESQUECI MINHA SENHA
                                    </S.TituloModal>
                                </S.DivTituloModal>
                                <S.DivDescricaoSenha>
                                    <S.DescricaoEsqueciSenha>
                                        Ao utilizar este formulário, será enviada uma nova senha para o e-mail inserido no campo abaixo.
                                    </S.DescricaoEsqueciSenha>
                                </S.DivDescricaoSenha>
                                <S.ConteudoModal style={{ paddingTop: '0' }}>
                                    <S.DivLabelInput>
                                        <S.LabelModal htmlFor="txtEmail">E-mail:</S.LabelModal>
                                        <S.InputModal type="text" id="txtEmail" placeholder="Insira o seu e-mail" />
                                    </S.DivLabelInput>
                                    <S.ButtonModal>
                                        SOLICITAR
                                    </S.ButtonModal>
                                </S.ConteudoModal>
                            </S.ModalEsqueciSenha>
                        )}

                    </S.Modal>
                </ModalLogin>
            )}


            {isOpenCadastro && (
                <ModalCadastro>
                    <S.Modal>
                        <S.DivContainerClose>
                            <S.SpanClose onClick={fecharModalCadastro}>
                                &times;
                            </S.SpanClose>
                        </S.DivContainerClose>
                        <S.DivTituloModal>
                            <S.TituloModal>
                                CADASTRO
                            </S.TituloModal>
                        </S.DivTituloModal>
                        <S.ConteudoModal>
                            <S.DivLabelInput>
                                <S.LabelModal htmlFor="txtNome">Nome:</S.LabelModal>
                                <S.InputModal type="text" id="txtNome" placeholder="Insira o seu nome" />
                            </S.DivLabelInput>
                            <S.DivLabelInput>
                                <S.LabelModal htmlFor="txtEmail">E-mail:</S.LabelModal>
                                <S.InputModal type="email" name="email" id="txtEmail" placeholder="Insira o seu e-mail" />
                            </S.DivLabelInput>
                            <S.DivLabelInput>
                                <S.LabelModal htmlFor="txtSenha">Senha:</S.LabelModal>
                                <S.InputModal type="password" id="txtSenha" placeholder="Insira a sua senha" />
                            </S.DivLabelInput>
                            <S.DivLabelInput>
                                <S.LabelModal htmlFor="txtConfirmaSenha">Confirmação da Senha:</S.LabelModal>
                                <S.InputModal type="password" id="txtConfirmaSenha" placeholder="Insira novamente a sua senha" />
                            </S.DivLabelInput>
                            <S.DivCheck>
                                <S.CheckboxModal type="checkbox" id="chkLembrar" />
                                <S.LabelModal htmlFor="chkLembrar">Receber novidades por e-mail</S.LabelModal>
                            </S.DivCheck>
                            <S.ButtonModal onClick={handleRegister}>
                                CADASTRAR
                            </S.ButtonModal>
                        </S.ConteudoModal>
                    </S.Modal>
                </ModalCadastro>
            )}

            {isOpenSaibaMais && (
                <ModalSaibaMais>
                    <S.Modal>
                        <S.DivContainerClose>
                            <S.SpanClose onClick={fecharModalSaibaMais}>
                                &times;
                            </S.SpanClose>
                        </S.DivContainerClose>
                        <S.DivTituloModal>
                            <S.TituloModal>
                                SAIBA MAIS
                            </S.TituloModal>
                        </S.DivTituloModal>
                        <S.ConteudoModal>
                            <S.DivLabelInput>
                                <S.LabelModal htmlFor="txtEmail">E-mail:</S.LabelModal>
                                <S.InputModal type="email" name="email" id="txtEmail" placeholder="Insira o seu e-mail" />
                            </S.DivLabelInput>
                            <S.DivLabelInput>
                                <S.LabelModal htmlFor="txtSenha">Senha:</S.LabelModal>
                                <S.InputModal type="password" id="txtSenha" placeholder="Insira a sua senha" />
                            </S.DivLabelInput>
                            <S.DivCheck>
                                <S.CheckboxModal type="checkbox" id="chkLembrar" />
                                <S.LabelModal htmlFor="chkLembrar">Lembrar de mim</S.LabelModal>
                            </S.DivCheck>
                            <S.ButtonModal onClick={handleLogin}>
                                ACESSAR
                            </S.ButtonModal>
                            <S.DivEsqueciSenha>
                                <S.SpanEsqueciSenha>
                                    Esqueci minha senha
                                </S.SpanEsqueciSenha>
                            </S.DivEsqueciSenha>
                        </S.ConteudoModal>
                    </S.Modal>
                </ModalSaibaMais>
            )}

        </>
    );
}

