import React, { useState } from 'react';
import './conteudo-header.css';

export default function ConteudoHeader()                          {
    
    const [mostrarDiv, setMostrarDiv] = useState(false);
    
    return (
        <div className="div-conteudo">
            <div className="div-nav-conteudo">
                <ul>
                    <li onClick={() => alert("SCROLL ATÉ PRODUTO")}>Produto</li>
                    <li onClick={() => alert("SCROLL ATÉ EQUIPE")}>Equipe</li>
                    <li onClick={() => alert("SCROLL ATÉ CONTATO")}>Contato</li>
                    <li
                        onMouseEnter={() => setMostrarDiv(true)}
                        onMouseLeave={() => setMostrarDiv(false)}>
                        Acessar
                    </li>
                </ul>
            </div> 
            {mostrarDiv && (
                <div className="div-nav-dropdown"
                onMouseEnter={() => setMostrarDiv(true)}
                onMouseLeave={() => setMostrarDiv(false)}>
                    <div id="idTeste" className="div-dropdown aparecer">
                        <ul className="dropdown">
                            <li onClick={()=> alert("DROPDOWN ABRINDO O MODAL DE LOGIN")}>
                                Login
                            </li>
                            <li onClick={()=> alert("DROPDOWN ABRINDO O MODAL DE CADASTRO")}>
                                Cadastrar
                            </li>
                        </ul>
                    </div>
                </div>
            )}
            <div className="div-acesso">
                <h2 className="">TENHA A VISIBILIDADE TOTAL DA SUA REDE</h2>
                <b className="">Saiba quem a está acessando agora!</b>
                <button className="button-logar" onClick={() => alert("MODAL DE LOGIN")}>Acesse sua conta</button>
                <span className="span-cadastrar" onClick={() => alert("MODAL DE CADASTRO")}>Não tenho cadastro, desejo criar uma conta!</span>
            </div>
        </div>
    );
}