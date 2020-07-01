import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Topnav from '../../components/navigation-bar/navigation-bar';

import api from '../../services/api';

import Loading from '../../components/Loading';

import * as S from './style.js'

import imgAlunoM from '../../assets/person.png';
import imgAlunoF from '../../assets/personF.png';

export default function AlunosProcesso() {
    let [isLoading, setIsLoading] = useState(true);
    let [genero, setGenero] = useState('');

    const hist = useHistory();

    let [alunos, setAlunos] = useState([]);

    useEffect(() => {
        api.get('/alunosProcesso').then(res => {
            setIsLoading(false)
            setAlunos(res.data);
        }).catch(error => {
            setIsLoading(false)
            alert('Erro de conexão');
        })
    }, [])


    function redirect(path, idUsuario, genero) {
        sessionStorage.setItem('idUsuario', idUsuario)
        sessionStorage.setItem('genero', genero)
        hist.push(path);
    }

    return (
        <>
            {isLoading ? <Loading /> : null}
            <S.DivFundoNavTopo />
            <Topnav isDash={true} />
            <S.alunosSearch>
                <S.search>
                    <input placeholder="Insira o nome de um aluno para consulta" />
                </S.search>
                <S.listAlunos>
                    {alunos.map(aluno =>
                        <>
                            <S.alunos onClick={() => redirect('/profile', aluno.idUsuario, aluno.genero)}>
                            {aluno.genero === 'M'? <img src={imgAlunoM} alt="imgAluno" height={70} /> : <img src={imgAlunoF} alt="imgAluno" height={70} />}
                                <div>{aluno.unome}------{aluno.pnome}</div>
                            </S.alunos>
                        </>
                    )}
                </S.listAlunos>
            </S.alunosSearch>
        </>
    );
}