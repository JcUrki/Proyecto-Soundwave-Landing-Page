import React from 'react'
import {NavContainer, Links, Header} from './styles/Styles.jsx'
import logo from '../images/logo.svg'

function NavBar(){
    return (
        <Header>
            <NavContainer>
                <Links href='#homePage'>
                    <div className='header-first-block'>
                        <img src={logo} alt='Logo-Soundwave'/>
                        <p>Soundwave </p>  
                    </div>
                </Links> 

                <div className='header-second-block'>
                    <Links href='#discover'>Discover</Links>
                    <Links href='#join'>Join</Links>
                </div>
            </NavContainer>
        </Header>
    )
}

export default NavBar
