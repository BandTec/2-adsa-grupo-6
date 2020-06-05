import React from 'react';
import Imagem from '../../assets/redes.jpg';
import './imagem-rede.css';

export default function ImagemRede(){
    return(
        <>
            <div className="div-imagem-rede" style={{
                backgroundImage: `url(${Imagem})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }} />
        </>
    );
}