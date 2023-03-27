import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


export const NavLink = styled(Link)`
color: #000000;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
    color: #632ce4;
  }
`;

export const Bars = styled(FaBars)`
display: none;
color: #000000;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
    margin-right: 1rem;
    top:0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1rem;
	cursor: pointer;
    height: 30px;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (min-width: 700px) {
	.nav__header__menu {
	  display: block;
	}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (min-width: 700px) {
	.nav__header__menu {
	  display: block;
	}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #ggg;
}
`;
