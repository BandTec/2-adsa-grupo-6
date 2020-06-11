import React from 'react';
import * as S from './style.js';

import imgLogo from '../../assets/img-logo.png';

export default function Topnav({ isDash }) {

    function topNav() {
        return isDash ?
            <S.topnavUl>
                <li><img src={imgLogo} alt="logo" /></li>
                <li className="right"><a href="/" >Home</a></li>
                <li><a href="/alunosProcesso" >Aluno</a></li>
                <li><a href="#" >Suporte</a></li>
                <li><a href="#" >Sair</a></li>
            </S.topnavUl> :
            <S.topnavUl>
                <li><img src={imgLogo} alt="logo" /></li>
                <li className="right"><a href="#" >Produto</a></li>
                <li><a href="#" >Equipe</a></li>
                <li><a href="#" >Contato</a></li>
                <li><a href="#" >Login</a></li>
            </S.topnavUl>
    }

    return (
        <>
            <S.topnav>
                {topNav()}
            </S.topnav>
        </>
    );

}