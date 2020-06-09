import React from 'react';
import './home.css';

import Header from '../../components/section-header/header';
import Corpo from '../../components/section-corpo/corpo';
import Mapa from '../../components/mapa/mapa';
import Contato from '../../components/section-contato/contato';
import Equipe from '../../components/section-equipe/equipe';

import imagem from '../../assets/redes.jpg';

export default function Home() {
  return (
    <>
      <Header />
      <img src={imagem} alt="" srcset="" style={{height: "40vh", width: "100vw"}}/>
      <Corpo />
      <Equipe />
      <Mapa />
      <Contato />
    </>
  );
}

