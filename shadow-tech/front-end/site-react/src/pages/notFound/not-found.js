import React from 'react';
import {useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function NotFound() {

  let hist = useHistory();

  return (
    <>
		<h1 className="titulo">Não era pra você estar aqui!</h1>
		<ul>
			<Link to="/">
			<li className="menu-lista"><a className="teste-link">Para home</a></li>
			</Link>
		</ul>
		<a className="anchor" onClick={() => hist.push("/")}>
			Ir para a Home
		</a>
	</>
  ) 
}