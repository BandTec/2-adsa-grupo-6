import React, { useState } from 'react';
import * as S from './style.js';

import imgLogo from '../../assets/img-logo.png';

export default function Topnav() {
  return (
    <>
      <S.topnavUl>
        <li><img src={imgLogo} alt="logo" /></li>
        <li className="right"><a href="#" >Home</a></li>
        <li><a href="#" >Aluno</a></li>
        <li><a href="#" >Suporte</a></li>
        <li><a href="#" >Sair</a></li>
      </S.topnavUl>
    </>
  );

}