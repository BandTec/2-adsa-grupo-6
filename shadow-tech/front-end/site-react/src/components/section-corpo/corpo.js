import React from 'react';
import './corpo.css';
import Nuvem from '../../assets/nuvem_conexao.png';
import Persona from '../../assets/persona.png';

export default function Corpo(){
    return(
        <>
            <div className="div-container-corpo">
                <div className="div-section-produto">
                    <div className="div-texto">
                        <h3>PROJETOS</h3>
                        <p>
                            Somos especializados em infraestrutura de TI. <br/>
                            Nosso objetivo é entender as necessidades de nossos clientes e parceiros para elaborar os melhores 
                            projetos e soluções, sempre com transparência, qualidade e flexibilidade.
                        </p>
                    </div>
                    <div className="div-imagem-produto">
                        <img src={Nuvem} alt="imagem de nuvem"/>
                    </div>
                </div>
                <div className="div-section-suporte">
                    <div className="div-texto">
                        <h3>SUPORTE</h3>
                        <p>
                            Além de toda a infraestrutura para o monitoramento dos processos e sua rede, nós também temos uma 
                            equipe de suporte da mais alta qualidade e muito bem preparada.
                        </p>
                    </div>
                    <div className="div-imagem-suporte">
                        <img src={Persona} alt="imagem de nuvem" />
                    </div>
                </div>
            </div>
        </>
    );
}