import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Topnav from '../../components/navigation-bar/navigation-bar';

import api from '../../services/api';

import Loading from '../../components/Loading';

import * as S from './style.js'

import imgAluno from '../../assets/aluno-legal.jpg';

export default function AlunosProcesso() {
    let [isLoading, setIsLoading] = useState(true);

    const hist = useHistory();

    let [alunos, setAlunos] = useState(['']);

    useEffect(() => {
        api.get('/alunosProcesso').then(res => {
            setIsLoading(false)
            setAlunos(res.data);
        }).catch(error => {
            setIsLoading(false)
            alert('Erro de conexão');
        })
    }, [])

    function redirect(path) {
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