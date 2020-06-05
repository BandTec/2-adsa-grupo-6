import React from 'react';
import './mapa.css';

export default function Mapa(){
    return(
        <>
            <div className="div-section-mapa">
                <div className="div-mapa">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2862323672266!2d-46.
                        66372668533753!3d-23.558161267358525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d2a5
                        270055%3A0x3c7ea4f4c7d51fb6!2sRua%20Haddock%20Lobo%2C%20595%20-%20Cerqueira%20C%C3%A9sar%2C%20S%C3%A3o%20Paulo%20
                        -%20SP%2C%2001414-002!5e0!3m2!1spt-BR!2sbr!4v1570480919396!5m2!1spt-BR!2sbr" 
                        frameborder="0" allowfullscreen="">
                    </iframe>
                </div>
            </div>
        </>
    );
}
