import React from 'react';
import Grafico from '../../components/dashboard/grafico';
import Processos from '../../components/dashboard/processos';
import Topnav from '../../components/topnav';

import * as S from './style.js';

export default function Dashboards() {

  return (
    <>
      {/* navbar */}
      {/* chart */}
      <Topnav isDash={true}/>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <S.dashs>
          <Grafico />
          <Processos />
        </S.dashs>
      </div>
    </>
  );
}



