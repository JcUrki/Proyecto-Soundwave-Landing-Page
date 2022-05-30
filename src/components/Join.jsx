import React from 'react';
import Footer from './Footer.jsx';
import FormJoin from './FormJoin.jsx';
import {JoinContainer, CircleJ1, CircleJ2} from './styles/Styles.jsx'

const Join=()=>{    
    return (
        <div className='container-join' id='join'>
            <JoinContainer className='main-join'>
                <CircleJ1/>
                <CircleJ2/>
                
                <h1 className='text'>Join the <span>fun.</span></h1> 
                
                <FormJoin />   
            </JoinContainer>
            <Footer />
        </div>
    )
}

export default Join;

