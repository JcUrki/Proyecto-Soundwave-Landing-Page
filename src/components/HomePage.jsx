import React from 'react';
import girl from '../images/landing-page-girl.png'
import {HomePageContainer, Button, Links, BigCircle, ImgGirl, CircleHP2, CircleHP1, InfoHomePage} from './styles/Styles.jsx'

export default function HomePage() {
    return (
        <HomePageContainer id='homePage'>
                <CircleHP1/>
                <CircleHP2/>
                <BigCircle/>

                <ImgGirl src={girl} alt='Girl'/>

                <InfoHomePage>
                    <h1>Feel The Music</h1>

                    <p>Stream over 20 thousand songs with one click</p>
                    
                    <Links href="#join"><Button className='btn-homePage'>Join Now</Button></Links>
                </InfoHomePage> 
        </HomePageContainer>
    )
}