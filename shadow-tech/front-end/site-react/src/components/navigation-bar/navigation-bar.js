import React, { useState } from 'react';
import { useModal } from 'use-react-modal';
import { useHistory } from 'react-router-dom';

import Loading from '../../components/Loading';

import logo from '../../assets/logo.png';
import logoShiny from '../../assets/logo-shiny.png';
import * as S from './style';

import api from '../../services/api';


export default function NavigationBar({ isDash }) {

    const hist = useHistory();
    let [isLoading, setIsLoading] = useState(false);


    const [mostrarDropdown, setMostrarDropdown] = useState(false);
    const [mostrarLogoShiny, setMostrarLogoShiny] = useState(false);
    const [esqueciSenha, setEsqueciSenha] = useState(false);

    const [abrirModalLogin, fecharModalLogin, isOpenModalLogin, ModalLogin] = useModal({
        background: 'rgba(0,0,0,0.3)',
    });
    const [abrirModalCadastro, fecharModalCadastro, isOpenCadastro, ModalCadastro] = useModal({
        background: 'rgba(0,0,0,0.3)'
    });
    const [abrirModalPerfil, fecharModalPerfil, isOpenPerfil, ModalPerfil] = useModal({
        background: 'rgba(0,0,0,0.3)'
    });

    const sair = () => {
        sessionStorage.clear();

        hist.push('/');
    }


    async function handleLogin() {
        setIsLoading(true);

        let email = document.getElementById('txtEmail').value;
        let senha = document.getElementById('txtSenha').value;


        await api.post('/userLogin', { "email": email, "senha": senha }).then(res => {
            setIsLoading(false);
            fecharModalLogin();
            hist.push('/dashboards');
        }).catch(error => {
            setIsLoading(false);
            if (error.response.status === 404) {
                alert('Credenciais inválidas!');
            } else {
                alert('Problema de conexão!');
            }
        });
    }

    async function handleRegister() {
        setIsLoading(true);
        let nome = document.getElementById('txtNome').value;
        let email = document.getElementById('txtEmail').value;
        let senha = document.getElementById('txtSenha').value;
        let confirmarSenha = document.getElementById('txtConfirmaSenha').value;

        await api.post('/listEmail', { "email": email }).then(res => {
            setIsLoading(false);
            alert('Usuário já cadastrado');
        }).catch(async (error) => {
            setIsLoading(false);
            if (error.response.status === 404) {
                if (nome !== "" &&
                    email !== "" &&
                    senha !== "") {
                    if (senha.length > 5) {
                        if (senha === confirmarSenha) {
                            if (email.endsWith('@bandtec.com.br') && email !== '@bandtec.com.br') {
                                await api.post('/user', { "nome": nome, "email": email, "senha": senha }).then(function (res) {
                                    alert('Usuario cadastrado com sucesso');
                                }).catch(function (error) {
                                    alert('Problema de conexão!');
                                });
                            } else {
                                alert('Seu email não pertence a nenhuma instituição cadastrada')
                            }
                        } else {
                            alert('Senhas não compativeis ');
                        }
                    } else {
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

    function suporte() {

        var ttChatLoaderS = document.createElement('script');
            document.tomticketChatLoaderScriptVersion = 2;
            ttChatLoaderS.src = 'https://shadowtech.tomticket.com/scripts-chat/chat.min.js'
            + '?id=EP47710'
            + '&account=3053440P29062020050631'
            + '&autoOpen=0'
            + '&hideWhenOffline=0'
            + '&d=shadowtech'
            + '&ts=' + new Date().getTime()
            + '&ref=' + encodeURIComponent(document.URL);
            document.body.appendChild(ttChatLoaderS)
            ;
    }

    return (
        <>
            <S.NavigationBarContainer>
                <S.NavigationBar>
                    <S.LogoContainer>
                        <div onMouseEnter={() => setMostrarLogoShiny(true)}
                            onMouseLeave={() => setMostrarLogoShiny(false)}>
                            {mostrarLogoShiny ? <S.LogoImagem src={logoShiny} onClick={() => isDash ? "" : alert('opa')} alt="" /> : <S.LogoImagem src={logo} />}
                        </div>
                    </S.LogoContainer>
                    <S.ButtonsContainer>
                        {isDash ?
                            <>
                                <S.Button onClick={() => hist.push('/dashboards')}>Dashboard</S.Button>
                                <S.Button onClick={() => hist.push('/alunosProcesso')}>Aluno</S.Button>
                                <S.Button onClick={() => suporte()}>Suporte</S.Button>
                            </>
                            :
                            <>
                                <S.Button>Produto</S.Button>
                                <S.Button>Sobre</S.Button>
                                <S.Button>Equipe</S.Button>
                            </>}
                        <S.Button
                            onMouseEnter={() => setMostrarDropdown(true)}
                            onMouseLeave={() => setMostrarDropdown(false)}>
                            Acesso
                        </S.Button>
                    </S.ButtonsContainer>
                </S.NavigationBar>
                {mostrarDropdown && (
                    <S.Dropdown
                        onMouseEnter={() => setMostrarDropdown(true)}
                        onMouseLeave={() => setMostrarDropdown(false)}>
                        <S.DropdownContainer>
                            <S.DivDropdown>
                                <S.DropdownOption>
                                    {!isDash ?
                                        <>
                                            <S.DropdownItem onClick={abrirModalLogin}>Login</S.DropdownItem>
                                            <S.DropdownItem onClick={abrirModalCadastro}>Cadastro</S.DropdownItem>
                                        </> :
                                        <>
                                            <S.DropdownItem onClick={abrirModalPerfil}>Perfil</S.DropdownItem>
                                            <S.DropdownItem onClick={sair}>Sair</S.DropdownItem>
                                        </>
                                    }
                                </S.DropdownOption>
                            </S.DivDropdown>
                        </S.DropdownContainer>
                    </S.Dropdown>
                )}
            </S.NavigationBarContainer>

            {isOpenModalLogin && (
                <ModalLogin>
                    <S.Modal>
                        {isLoading ? <Loading /> : null}
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
                                <S.LabelModal type="password" htmlFor="txtEmail">E-mail:</S.LabelModal>
                                <S.InputModal type="text" id="txtEmail" placeholder="Insira o seu e-mail" />
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
                        {isLoading ? <Loading /> : null}
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
                                <S.InputModal type="text" id="txtEmail" placeholder="Insira o seu e-mail" />
                            </S.DivLabelInput>
                            <S.DivLabelInput>
                                <S.LabelModal htmlFor="txtSenha">Senha:</S.LabelModal>
                                <S.InputModal type="text" id="txtSenha" placeholder="Insira a sua senha" />
                            </S.DivLabelInput>
                            <S.DivLabelInput>
                                <S.LabelModal htmlFor="txtConfirmaSenha">Confirmação da Senha:</S.LabelModal>
                                <S.InputModal type="text" id="txtConfirmaSenha" placeholder="Insira novamente a sua senha" />
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

            {isOpenPerfil && (
                <ModalPerfil>
                    <S.Modal>
                        <S.DivContainerClose>
                            <S.SpanClose onClick={fecharModalPerfil}>
                                &times;
                            </S.SpanClose>
                        </S.DivContainerClose>
                        <S.DivTituloModal>
                            <S.TituloModal>
                                PERFIL
                            </S.TituloModal>
                        </S.DivTituloModal>
                        <S.ConteudoModal>
                            <S.DivLabelInput>
                                <S.LabelModal htmlFor="nome">Nome:</S.LabelModal>
                            </S.DivLabelInput>
                            <S.DivLabelInput>
                                <S.LabelModal htmlFor="email">E-mail:</S.LabelModal>
                            </S.DivLabelInput>
                            <S.DivLabelInput>
                                <S.LabelModal htmlFor="senha">Senha:</S.LabelModal>
                            </S.DivLabelInput>
                            <S.DivLabelInput>
                                <S.LabelModal htmlFor="confirmaSenha">Confirmação da Senha:</S.LabelModal>
                            </S.DivLabelInput>
                            <S.ButtonModal>
                                EDITAR DADOS
                            </S.ButtonModal>
                        </S.ConteudoModal>
                    </S.Modal>
                </ModalPerfil>
            )}

        </>
    );
}