import React, { useState, useEffect } from 'react';
import Topnav from '../../components/navigation-bar/navigation-bar';

import * as S from './style.js'

import imgAlunoM from '../../assets/person.png';
import imgAlunoF from '../../assets/personF.png';

import imgChip from '../../assets/chip.png';
import imgHd from '../../assets/harddisk.png';
import imgRam from '../../assets/ram.png';

import api from '../../services/api';
import Loading from '../../components/Loading';

import Grafico from '../../components/graficoRegistros';

export default function Profile() {
    let [isLoading, setIsLoading] = useState(true);
    let [processos, setProcessos] = useState([]);
    let [nome, setNome] = useState('');
    let [email, setEmail] = useState('');

    let [cpu, setCpu] = useState('');
    let [memoria, setMemoria] = useState('');
    let [disco, setDisco] = useState('');

    
    const idUsuario = sessionStorage.getItem('idUsuario');
    const genero = sessionStorage.getItem('genero');

    useEffect(() => {
        // setInterval(() => {

            api.get('/processosDoAluno/' + idUsuario).then(res => {
                setIsLoading(false)
                setProcessos(res.data);
                setNome(res.data[0].unome)
                setEmail(res.data[0].login)
            }).catch(error => {
                setIsLoading(false)
                alert('não encontrou nenhum processo');
            })
            api.get('/registrosAluno/'+idUsuario).then(res => {
                setIsLoading(false)
    
                setCpu(res.data[0].cpuPc)
                setMemoria(res.data[0].memoria)
                setDisco(res.data[0].disco)
    
            }).catch(error => {
                setIsLoading(false)
                alert('Erro', error)
            })

        // }, 5000);    

    }, [])

    return (
        <>
            {isLoading ? <Loading /> : null}
            <S.DivFundoNavTopo />
            <Topnav isDash={true} />
            <S.global>
                    <S.alunoInfo>
                        <S.alunoDetalhes>
                            <S.cardAluno>
                                {genero === 'M'? <S.imgAluno src={imgAlunoM} alt="imgAluno" /> : <S.imgAluno src={imgAlunoF} alt="imgAluno" height={170} />}
                                <h2 style={{ marginTop: '20px' }}>{nome}</h2>
                                <h3 style={{ marginTop: '20px' }}>{email}</h3>
                            </S.cardAluno>
                        </S.alunoDetalhes>

                        <S.cardConsumo>
                            <h3>CONSUMO</h3>
                            <S.divCardConsumo><S.imgConsumo src={imgChip} alt="Cpu" />     <label>CPU: {cpu}%</label></S.divCardConsumo>
                            <S.divCardConsumo><S.imgConsumo src={imgRam} alt="Memoria" />  <label>RAM: {memoria}%</label></S.divCardConsumo>
                            <S.divCardConsumo><S.imgConsumo src={imgHd} alt="Disco" />     <label>DISCO: {disco}%</label></S.divCardConsumo>
                        </S.cardConsumo>
                    
                    </S.alunoInfo>
                    
                    <S.consumo>
                       
                    </S.consumo>
                    <S.grafico>
                        <Grafico />
                    </S.grafico>
                    <S.processos>
                        <S.cardProcessos>
                        {processos.map(processo =>
                            <>
                                <S.processosI>
                                    <div style={{width: '100%', display: 'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                                        <div>
                                            {processo.pnome}                                         
                                        </div>
                                        <div>
                                            {processo.consumo}%                                         
                                        </div>
                                        <div>
                                            RAM
                                        </div>
                                    </div>
                                </S.processosI>
                            </>
                        )}
                        </S.cardProcessos>
                    </S.processos>
            </S.global>
        </>
    );
}