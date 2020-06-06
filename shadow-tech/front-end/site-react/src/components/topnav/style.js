import styled from 'styled-components';

export const topnav = styled.div`
    list-style-type: none;  
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #011638;

`;

export const topnavUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #011638;

  ul li{
    float: right;
  }

  ul li a{
    display: block;
    color: white;
    text-align: center;
    padding: 1.1vw 3vh;
    text-decoration: none;
  }

 ul li a:hover:not(.active) {background-color: #CCC;}

 ul li a.active {background-color: #4CAF50;}

 ul li a {float: right;}

 @media screen and (max-width: 600px) {
  ul li {float: none;}
}`;



