import React from 'react';
import Topnav from '../../components/navigation-bar/navigation-bar';

import * as S from './style.js'

import imgAluno from '../../assets/aluno-legal.jpg';
import imgMonitor from '../../assets/monitor.png';

import imgChip from '../../assets/chip.png';
import imgHd from '../../assets/hd.png';
import imgRam from '../../assets/ram.png';

export default function Profile() {

    var processos = [
        { "nome": "aVSCODE", "cpu": "80%" },
        { "nome": "VSCODE", "cpu": "80%" },
        { "nome": "VSCODE", "cpu": "80%" },
        { "nome": "VSCODE", "cpu": "80%" },
        { "nome": "VSCODE", "cpu": "80%" },
        { "nome": "VSCODE", "cpu": "80%" },
        { "nome": "VSCODE", "cpu": "80%" },
        { "nome": "VSCODE", "cpu": "80%" },
        { "nome": "VSCODE", "cpu": "80%" },
        { "nome": "VSCODE", "cpu": "80%" },
        { "nome": "VSCODE", "cpu": "80%" },
    ];


    return (
        <>
            <Topnav isDash={true}/>
            <S.global>
                <S.left>
                    <S.imgInfo>
                        <img src={imgAluno} alt="imgAluno" height={170} />
                        <label>Aluno legal</label>
                    </S.imgInfo>
                    <S.processos>
                        {processos.map(processos =>
                            <>
                                <S.processosI>
                                    <div>{processos.nome}{processos.cpu}</div>
                                </S.processosI>
                            </>
                        )}
                    </S.processos>
                </S.left>
                <S.right>
                    <S.especificacoes>
                            <img src={imgMonitor} alt="imagem do monitor" height={350} />
                    </S.especificacoes>
                    <S.cpu> 
                            <div><img src={imgChip} alt="cpu" height={60} /><label>CPU: 80%</label></div>
                            <div><img src={imgRam} alt="cpu" height={60} /><label>RAM: 5.50/7.9 GB</label></div>
                            <div><img src={imgHd} alt="cpu" height={60} /><label>DISCO: 250/500 GB</label></div>
                    </S.cpu>
                </S.right>
            </S.global>
        </>
    );
}