import React, {useEffect, useState} from "react";
// import {useEffect} from "react-router-dom";
import * as S from './style.js';


import api from '../../../services/api';

export default function Processos() {

    let [processos, setProcesso] = useState(['']);


    useEffect(() => {
        api.get('/plotDash').then(res => {
            setProcesso(res.data);
        }).catch(error => {
            alert('Erro de conexão');
        })
    }, [])

    
    return (
        <>
            <div className='containerListaAluno'>
                <S.divProcessos>
                    {processos.map(result =>
                        <>
                            <S.processos>
                                <label>{result.nome}</label>
                            </S.processos>
                        </>
                    )}
                </S.divProcessos>
            </div>
        </>
    );
}