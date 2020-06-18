import React, {useState} from 'react';
import {useModal} from 'use-react-modal';

import logo from '../../assets/logo.png';
import logoShiny from '../../assets/logo-shiny.png';
import * as S from './style';

export default function NavigationBar(){

    const [mostrarDropdown, setMostrarDropdown] = useState(false);
    const [mostrarLogoShiny, setMostrarLogoShiny] = useState(false);
    const [ esqueciSenha, setEsqueciSenha ] = useState(false);
    
    const [ abrirModalLogin, fecharModalLogin, isOpenModalLogin, ModalLogin ] = useModal({
        background: 'rgba(0,0,0,0.3)',
    });
    const [ abrirModalCadastro, fecharModalCadastro, isOpenCadastro, ModalCadastro ] = useModal({
        background: 'rgba(0,0,0,0.3)'
    });

    return(
        <>
            <S.NavigationBarContainer>
                <S.NavigationBar>
                    <S.LogoContainer>
                    <div onMouseEnter={() => setMostrarLogoShiny(true)}
                        onMouseLeave={() => setMostrarLogoShiny(false)}>
                        { mostrarLogoShiny  ?  <S.LogoImagem src={logoShiny} alt=""/>  :  <S.LogoImagem src={logo} /> }
                    </div>
                    </S.LogoContainer>
                    <S.ButtonsContainer>
                        <S.Button>Produto</S.Button>
                        <S.Button>Sobre</S.Button>
                        <S.Button>Equipe</S.Button>
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

                                    <S.DropdownItem onClick={abrirModalLogin}>Login</S.DropdownItem>
                                    <S.DropdownItem onClick={abrirModalCadastro}>Cadastro</S.DropdownItem>
                                
                                </S.DropdownOption>
                            </S.DivDropdown>
                        </S.DropdownContainer>
                    </S.Dropdown>
                )}
            </S.NavigationBarContainer>
            
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
                                <S.InputModal type="text" id="txtEmail" placeholder="Insira o seu e-mail" />
                            </S.DivLabelInput>
                            <S.DivLabelInput>
                                <S.LabelModal htmlFor="txtSenha">Senha:</S.LabelModal>
                                <S.InputModal type="text" id="txtSenha" placeholder="Insira a sua senha" />
                            </S.DivLabelInput>
                            <S.DivCheck>
                                <S.CheckboxModal type="checkbox" id="chkLembrar"/>
                                <S.LabelModal htmlFor="chkLembrar">Lembrar de mim</S.LabelModal>
                            </S.DivCheck>
                            <S.ButtonModal>
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
                                <S.ConteudoModal style={{paddingTop: '0'}}>
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
                                <S.CheckboxModal type="checkbox" id="chkLembrar"/>
                                <S.LabelModal htmlFor="chkLembrar">Receber novidades por e-mail</S.LabelModal>
                            </S.DivCheck>
                            <S.ButtonModal>
                                CADASTRAR
                            </S.ButtonModal>
                        </S.ConteudoModal>
                    </S.Modal>
                </ModalCadastro>
            )}
            
        </> 
    );
}