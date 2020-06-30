import React, {useState, useEffect} from 'react';
import Topnav from '../../components/navigation-bar/navigation-bar';

import * as S from './style.js'

import imgAluno from '../../assets/aluno-legal.jpg';
import imgMonitor from '../../assets/monitor.png';

import imgChip from '../../assets/chip.png';
import imgHd from '../../assets/hd.png';
import imgRam from '../../assets/ram.png';

import api from '../../services/api';
import Loading from '../../components/Loading';


export default function Profile() {
    let [isLoading, setIsLoading] = useState(true);
    let [processos, setProcessos] = useState([]);
    let [registros, setRegistros] = useState([]);
    let [nome, setNome] = useState('');

    // const idUsuario = sessionStorage.getItem('idUsuario');
    const idUsuario = 13;


    useEffect(() => {
        api.get('/processosDoAluno/'+ idUsuario).then(res => {
            setIsLoading(false)
            setProcessos(res.data);
            setNome(res.data[0].unome)
        }).catch(error => {
            setIsLoading(false)
            alert('Erro de conexão');
        })
        api.get('/registrosAluno').then(res => {
            setIsLoading(false)
            setRegistros(res.data)
        }).catch(error => {
            setIsLoading(false)
            alert('Erro', error)
        })
    }, [])

    // if(processos[0] != undefined){

    //     console.log(processos[0].unome);
    // }else{
    //     console.log('indefinido rapa');
        
    // }
    console.log(nome);


    return (
        <>
            {isLoading ? <Loading /> : null}
            <S.DivFundoNavTopo />
            <Topnav isDash={true}/>
            <S.global>
                <S.left>
                    <S.imgInfo>
                        <img src={imgAluno} alt="imgAluno" height={170} />
                        <h2 style={{marginTop: '20px'}}>{nome}</h2>
                    </S.imgInfo>
                    <S.processos>
                        {processos.map(processo =>
                            <>
                                <S.processosI>
                                    <div>{processo.pnome}-------------{processo.consumo}% - RAM</div>
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