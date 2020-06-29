import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {

  return (
    <>
		<h1 className="titulo">Página não encontrada!</h1>
		<ul>
			<Link to="/">
			<li className="menu-lista"><a className="teste-link">Para home</a></li>
			</Link>
		</ul>
		<Link to="/">
			<a className="anchor">
				Ir para a Home
			</a>
		</Link>
	</>
  ) 
}