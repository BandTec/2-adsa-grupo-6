import React, {useState} from 'react';
import Imagem from '../../assets/logo.png';
import ImagemShiny from '../../assets/logo-shiny.png';
import './logo-header.css';

export default function Logo(){

    const [logoShiny, setLogoShiny] = useState(false);

    return (
        <div onMouseEnter={() => setLogoShiny(true)}
        onMouseLeave={() => setLogoShiny(false)}>
            {logoShiny ? <img className="img-logo" src={ImagemShiny} alt="logo"/> : <img className="img-logo" src={Imagem} /> }
        </div>
    );
}