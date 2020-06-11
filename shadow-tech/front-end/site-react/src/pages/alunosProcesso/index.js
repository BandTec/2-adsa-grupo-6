import React from 'react';
import { useHistory } from 'react-router-dom';
import Topnav from '../../components/topnav';

import * as S from './style.js'

import imgAluno from '../../assets/persona.png';

export default function AlunosProcesso() {

    const hist = useHistory();

    var alunos = [
        { "nome": "aRaul", "processo": "VSCODE" },
        { "nome": "Oliveira", "processo": "VSCODE" },
        { "nome": "Algum Nome", "processo": "VSCODE" },
        { "nome": "Algum Nome", "processo": "VSCODE" },
        { "nome": "algum nome", "processo": "VSCODE" },
        { "nome": "algum nome", "processo": "VSCODE" },
        { "nome": "algum nome", "processo": "VSCODE" },
        { "nome": "algum nome", "processo": "VSCODE" },
        { "nome": "algum nome", "processo": "VSCODE" },
        { "nome": "algum nome", "processo": "VSCODE" },
        { "nome": "algum nome", "processo": "VSCODE" },
        { "nome": "algum nome", "processo": "VSCODE" },
    ];

    function redirect(path) {
        hist.push(path);
    }

    return (
        <>
            <Topnav isDash={true} />
            <S.alunosSearch>
                <S.search>
                    <input placeholder="Insira o nome de um aluno para consulta" />
                </S.search>
                <S.listAlunos>
                    {alunos.map(alunos =>
                        <>
                            <S.alunos onClick={() => redirect('/profile')}>
                                <img src={imgAluno} height={70} alt="imagem do aluno" />
                                <div>{alunos.nome}{alunos.processo}</div>
                            </S.alunos>
                        </>
                    )}
                </S.listAlunos>
            </S.alunosSearch>
        </>
    );
}