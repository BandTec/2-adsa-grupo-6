import React from 'react';
import { Link } from 'react-router-dom';

export default function Contato(){
    return(
        <div>
            <div>
                <h1>CONTATO</h1>
            </div>
            <div>
                <div className="div-quadrado-copyright">
                    COPYRIGHT
                </div>
                <div className="div-quadrado-logo">
                    LOGO
                </div>
                <div className="div-quadrado-contato">
                    <Link to="./">
                        CONTATO
                    </Link>
                </div>
            </div>
        </div>
    );
}