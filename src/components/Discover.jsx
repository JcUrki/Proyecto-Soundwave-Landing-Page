import React, {Fragment} from 'react';
import Footer from './Footer.jsx';
import img from '../images/covers.jpg'
import albums from '../images/albums.svg'
import micro from '../images/microphone.svg'
import more from '../images/more.svg'
import {DiscoverContainer, ImgCollage, ContainerInfoDiscover, SubsectionInfoDiscover, Links} from './styles/Styles.jsx'

const Discover=()=>{
 
    return (
        <Fragment>
            <DiscoverContainer className='main-discover' id='discover'>
                <div>
                    <h1>Discover new music</h1>

                    <ContainerInfoDiscover className='nav-discover'>
                        <SubsectionInfoDiscover>
                            <img src={micro} alt='Micro'/>
                            <Links href='#'>Charts</Links>
                        </SubsectionInfoDiscover>

                        <SubsectionInfoDiscover>
                            <img src={albums} alt='Albums'/>
                            <Links href='#'>Albums</Links>
                        </SubsectionInfoDiscover>
                        
                        <SubsectionInfoDiscover>
                            <img src={more} alt='>'/>
                            <Links href='#'>More</Links>
                        </SubsectionInfoDiscover>
                    </ContainerInfoDiscover>

                    <p>By joining you can benefit by listening to the latest albums released</p>
                </div>

                <ImgCollage src={img} alt='Collage'/>     
            </DiscoverContainer>
            <Footer />
        </Fragment>
    )
}

export default Discover;