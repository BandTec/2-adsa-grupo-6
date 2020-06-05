import React from 'react';
import './home.css';

import Header from '../../components/section-header/header';
import ImagemRede from '../../components/imagem-rede/imagem-rede';
import Corpo from '../../components/section-corpo/corpo';
import Mapa from '../../components/mapa/mapa';
import Contato from '../../components/section-contato/contato';
import Equipe from '../../components/section-equipe/equipe';

export default function Home() {
  return (
    <>
        <Header/>
        <ImagemRede />
        <Corpo />
        <Equipe />
        <Mapa />
        <Contato />
    </>
  );
}

