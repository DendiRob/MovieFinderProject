import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const NavUnlisted = styled.ul`
  text-decoration: none;
  max-width: 700px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 20px;
`;

const HorizontalNav = () => {
    
    return(
    <NavUnlisted>
        <NavLink to='/movies' style={({isActive}) => ({
            color: isActive? '#00B9AE': '#F9F9F9',
            textDecoration: isActive? 'underline': 'none',
            fontFamily: 'Lato',
            fontSize: '24px',
            fontWeight: '600'
        })}>Movies</NavLink>
        <NavLink to='/series' style={({isActive}) => ({
            color: isActive? '#00B9AE': '#F9F9F9',
            textDecoration: isActive? 'underline': 'none',
            fontFamily: 'Lato',
            fontSize: '24px',
            fontWeight: '600'
        })}>Series</NavLink>
    </NavUnlisted>
    )
}
export default HorizontalNav