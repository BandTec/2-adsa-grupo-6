import styled from 'styled-components';

export const topnav = styled.div`
  list-style-type: none;  
  margin: 0;
  padding: 0;
  width: 100%;
  height: 74px;
  padding: 3px;
  background-color: #011638;
`;

export const topnavUl = styled.ul`
  display: flex;
  height: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  outline: none;

  a {
    display: block;
    color: white;
    text-align: center;
    text-decoration: none;
  }

 ul li a:hover:not(.active) {background-color: black;}

 ul li a.active {background-color: #4CAF50;}

 ul li a {float: right;}

 @media screen and (max-width: 600px) {
  ul li {float: none;}
}`;



