// import React, { useState, useEffect } from 'react';
// import Topnav from '../../components/navigation-bar/navigation-bar';

// import * as S from './style.js'

// import imgAlunoM from '../../assets/person.png';
// import imgAlunoF from '../../assets/personF.png';
// import imgChip from '../../assets/chip.png';
// import imgHd from '../../assets/hd.png';
// import imgRam from '../../assets/ram.png';

// import api from '../../services/api';
// import Loading from '../../components/Loading';

// import Grafico from '../../components/graficoRegistros';

// export default function Profile() {
//     let [isLoading, setIsLoading] = useState(true);
//     let [processos, setProcessos] = useState([]);
//     let [nome, setNome] = useState('');
//     let [genero, setGenero] = useState('');

//     let [cpu, setCpu] = useState('');
//     let [memoria, setMemoria] = useState('');
//     let [disco, setDisco] = useState('');

//     // const idUsuario = sessionStorage.getItem('idUsuario');
//     // const genero = sessionStorage.getItem('genero');

//     useEffect(() => {
//         setInterval(() => {
//             api.get('/processosDoAluno/' + idUsuario).then(res => {
//                 setIsLoading(false)
//                 setProcessos(res.data);
//                 setNome(res.data[0].unome)
//             }).catch(error => {
//                 setIsLoading(false)
//                 alert('não encontrou nenhum processo');
//             })
//             api.get('/registrosAluno/'+idUsuario).then(res => {
//                 setIsLoading(false)
    
//                 setCpu(res.data[0].cpuPc)
//                 setMemoria(res.data[0].memoria)
//                 setDisco(res.data[0].disco)
    
//             }).catch(error => {
//                 setIsLoading(false)
//                 alert('Erro', error)
//             })

//         }, 5000);    

//     }, [])

//     return (
//         <>
//             {isLoading ? <Loading /> : null}
//             <S.DivFundoNavTopo />
//             <Topnav isDash={true} />
//             <S.global>
//                 <S.left>
//                     <S.imgInfo>
//                         {genero === 'M'? <img src={imgAlunoM} alt="imgAluno" height={170} /> : <img src={imgAlunoF} alt="imgAluno" height={170} />}
//                         <h2 style={{ marginTop: '20px' }}>{nome}</h2>
//                     </S.imgInfo>
//                     <S.especificacoes>
//                         <Grafico />
//                     </S.especificacoes>
//                 </S.left>
//                 <S.right>
//                     <S.processos>
//                         {processos.map(processo =>
//                             <>
//                                 <S.processosI>
//                                     <div> {processo.pnome}      --      {processo.consumo}% - RAM </div>
//                                 </S.processosI>
//                             </>
//                         )}
//                     </S.processos>
//                     <S.cpu>

//                         <div><img src={imgChip} alt="Cpu" height={60}    />     <label>CPU: {cpu}%</label></div>
//                         <div><img src={imgRam} alt="Memoria" height={60} />  <label>RAM: {memoria}%</label></div>
//                         <div><img src={imgHd} alt="Disco" height={60}    />     <label>DISCO: {disco}%</label></div>

//                     </S.cpu>
//                 </S.right>
//             </S.global>
//         </>
//     );
// }