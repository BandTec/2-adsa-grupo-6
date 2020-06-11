import React from "react";
import * as S from './style.js';

export default function Processos() {

    var processos = [
        { "posicao": "1°", "processos": "Chrome", "maquina": "1902491942194" },
        { "posicao": "2°", "processos": "Netbeans", "maquina": "1902491942194" },
        { "posicao": "3°", "processos": "VSCode", "maquina": "1902491942194" },
        { "posicao": "3°", "processos": "VSCode", "maquina": "1902491942194" },
        { "posicao": "3°", "processos": "VSCode", "maquina": "1902491942194" },
        { "posicao": "3°", "processos": "VSCode", "maquina": "1902491942194" },
        { "posicao": "3°", "processos": "VSCode", "maquina": "1902491942194" },
        { "posicao": "3°", "processos": "VSCode", "maquina": "1902491942194" },
        { "posicao": "3°", "processos": "VSCode", "maquina": "1902491942194" },
        { "posicao": "4°", "processos": "VSCode", "maquina": "1902491942194" },
        { "posicao": "5°", "processos": "VSCode", "maquina": "1902491942194" },
        { "posicao": "6°", "processos": "VSCode", "maquina": "1902491942194" },
    ];

    return (
        <>
            <div className='containerListaAluno'>
                <S.divProcessos>
                    {processos.map(result =>
                        <>
                            <S.processos>
                                <label>{result.posicao}</label>
                                <label>{result.processos}</label>
                                <label>{result.maquina}</label>
                            </S.processos>
                        </>
                    )}
                </S.divProcessos>
            </div>
        </>
    );
}