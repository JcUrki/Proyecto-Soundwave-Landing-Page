import React from 'react';
import logo_twitter from '../images/twitter.svg'
import logo_fb from '../images/facebook.svg'
import {ImgLinks, Links, FlexRow, FooterContainer} from './styles/Styles.jsx'

const Footer=()=>{
 
    return (
        <footer>
            <FooterContainer>
                    <FlexRow className='footer-first-block'>
                        <Links href='#' alt=''>About Us</Links>
                        <Links href='#' alt=''>Contact</Links>
                    </FlexRow>
                    
                    <FlexRow className='footer-second-block'>
                        <ImgLinks className='twitter-link'>
                            <img src={logo_twitter} alt=''/>
                            <Links href='#'>Twitter</Links>
                        </ImgLinks>
                        
                        <ImgLinks className='fb-link'>
                            <img src={logo_fb} alt=''/>
                            <Links href='#'>Facebook</Links>
                        </ImgLinks>
                    </FlexRow> 
            </FooterContainer>
        </footer>
    )
}

export default Footer;