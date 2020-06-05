import React from 'react';
import './header.css';
import Logo from '../logo-header/logo-header';
import ConteudoHeader from '../conteudo-header/conteudo-header';

export default function Header(){
    return(

        <div className="div-header-container">
            <div className="logo-container">
                <Logo />
            </div>
            <div className="conteudo-container">
                <ConteudoHeader />
            </div>
        </div>

    );
}