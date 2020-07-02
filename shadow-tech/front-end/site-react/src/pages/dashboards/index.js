import React from 'react';
import Grafico from '../../components/dashboard/grafico';
import Processos from '../../components/dashboard/processos';
import Topnav from '../../components/navigation-bar/navigation-bar';

import * as S from './style.js';

export default function Dashboards() {

  return (
    <>
      {/* navbar */}
      {/* chart */}
      <S.DivFundoNavTopo />
      <Topnav isDash={true}/>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <S.dashs>
          <Grafico />
          <h1>Processos</h1>
          <Processos />
        </S.dashs>
      </div>
    </>
  );
}



