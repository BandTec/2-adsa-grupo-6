import React from "react";
import * as S from './style.js';

export default function Processos() {

    var alunos = [
        { "nome": "rafael", "maquina": "1902491942194" },
        { "nome": "braian", "maquina": "1902491942194" },
        { "nome": "bachega", "maquina": "1902491942194" },
        { "nome": "jp", "maquina": "1902491942194" },
        { "nome": "martha", "maquina": "1902491942194" },
        { "nome": "jhow", "maquina": "1902491942194" },
    ];

    
    
    return (
        <>
            <div className='containerListaAluno'>
                <S.divProcessos>
                    {alunos.map(result =>
                        <>
                            <label className='aluno'>{result.nome}</label>
                            <label>{result.maquina}</label>
                            <br/><br/>
                        </>
                    )}
                </S.divProcessos>
            </div>
        </>
    );
}