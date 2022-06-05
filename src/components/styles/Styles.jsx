import styled from 'styled-components'

/*----- Global -----*/
export const Links = styled.a`
    font-size: 3vmin;
    text-decoration: none;
    color: var(--font-color);  

        &:hover{
            color: var(--nav-hover);
        }
`

export const Button = styled.button`
    border: 1px solid var(--button-background);
    background: var(--button-background);
    color: var(--font-color);
    border-radius: 0.5em;
    height: 2.5em;
    padding: 0 1em;
    font-size: 3vmin;

    &:hover{
        background: var(--button-hover);
    }

    &:focus{
        background: var(--button-focus);
    }
`

export const FlexRow = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    gap: 2em;  
`

export const FlexRowResponsive = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly; 
    align-content: center;
    align-items: center;
    color: var(--font-color);
    font-size: 3vmin;

    h1{
        font-size: 7.5vmin;
    }

    @media screen and (min-width: 810px){
        flex-direction: row;
    }
`

export const LittleCircle = styled.div`
    min-width: 1vh;
    min-height: 1vh;
    border-radius: 100%;
    position: absolute;
    z-index: -1;   
    object-fit: contain;
    
    @media screen and (min-width: 810px){
        min-width: 5vh;
        min-height: 5vh;
    }

`

/*-----Header ------*/
export const NavContainer = styled.nav`
    height: 3em; 
    display: flex;
    justify-content: space-around;
    align-items: center;

    .header-first-block{
        display: flex;
        align-items: center;

        img{
            height: 2em;
        }

        p{
            font-size: 3.5vmin;
            margin-left: 0.2em;
        }
    }

    .header-second-block{
        a{
            margin-left: 2em;
        }
    }
`

export const Header= styled.header`
    position: fixed;
    height: 4em;
    padding: 0.5em;
    width: 100%;
    z-index: 1;
`

/*-----Footer -----*/
export const ImgLinks = styled.div`
    display: flex;
    align-items: center;

    img{
        height: 1%;
        margin-right: 0.5em;
    }
`

export const FooterContainer= styled(FlexRow)`
    justify-content: space-around;
    font-weight: bolder;
    background: var(--color-background-secondary);
    height: 5em;
`

/*--- HomePage ---*/
export const HomePageContainer = styled(FlexRowResponsive)`
    height: 100vh;
`

export const ImgGirl = styled.img`
    display: none;    
    
    @media screen and (min-width: 810px){
        display: block;
        margin-top: 8em;
        margin-left: 2em;
        min-width: 40vh;
        min-height: 75vh;
        height: 30%;
        width: 30%;
    }
`

export const InfoHomePage = styled.div`
    line-height: 2.5em;
`

export const CircleHP1 = styled(LittleCircle)`
    width: 15%;
    height: 15%;
    background: var(--circle-1);
    left: 4%;
    top: 80%;

    @media screen and (min-width: 810px){
        width: 30%;
        height: 30%; 
        left: 1%;
        top: 47%;  
    }  
`

export const CircleHP2 = styled(LittleCircle)`
    width: 15%;
    height: 15%;
    background: var(--circle-2);
    left: 40%;
    top: 10%;

    @media screen and (min-width: 810px){
        width: 30%;
        height: 30%; 
        left: 20%;
        top: 28%;  
    }        
`

export const BigCircle= styled.div`
    min-width: 5vh;
    min-height: 5vh;
    width: 25%;
    height: 25%;
    border-radius: 100% 0 0 0;
    background: var(--circle-2);
    position: absolute;
    z-index: -1;
    object-fit: contain;
    left: 75%;
    top: 75%;

    @media screen and (min-width: 810px){
        min-width: 9vh;
        min-height: 9vh;
        width: 40%;
        height: 40%;
        left: 60%;
        top: 60%;
    }
`

/*--- Discover ---*/
export const DiscoverContainer = styled(FlexRowResponsive)`
    height: 89.5vh;
    padding: 2em;
`

export const ImgCollage = styled.img`
    height: 40%;

    @media screen and (min-width: 810px){
        height: 65%;
    }
`

export const ContainerInfoDiscover= styled.div`
    display: flex;
    gap: 1em;
    margin: 2em 0;
`

export const SubsectionInfoDiscover= styled(FlexRow)`
    background: var(--color-background-secondary);
    height: 5em;
    width: 5em;
    flex-direction: column;
    justify-content: center;
    gap: 0.5em;

    img{
        height: 1.8em;
    }
`

/*--- Join---*/
export const JoinContainer = styled(FlexRowResponsive)`
    height: 89.5vh;

    span{
        color: var(--accent-text);
    } 
`

export const CircleJ1 = styled(LittleCircle)`
    width: 25%;
    height: 25%;
    background: var(--circle-1);
    left: -8%;
    top: 273%;

    @media screen and (min-width: 810px){
        width: 50%;
        height: 50%;  
        left: -18%;
        top: 240%
    }
`

export const CircleJ2 = styled(LittleCircle)`
    width: 20%;
    height: 20%;
    background: var(--circle-2);
    left: 20%;
    top: 190%;

    @media screen and (min-width: 810px){
        width: 35%;
        height: 35%;  
        left: 10%;
        top: 195%
    }
`

/*--- FormJoin ---*/
export const FormStyle = styled.form`
    width: 20em;
    padding: 2em 3em;
    background: var(--color-background-secondary);
    border-radius: 1em;
    font-weight: bolder;
    
    .btn-form{
        margin-top: 0.5em;
        width: 102%;
    }
`

export const InputsForm = styled.input`
    border: 1px solid var(--border-input);
    background: var(--color-background-secondary);
    border-radius: 0.5em;
    height: 3em;
    width: 100%;
    text-indent: 1em;
    font-size: 2.5vmin;
    color: var(--font-color);
    margin-top: 0.5em;
    margin-bottom: 0.5em;  

    &:focus{
        border-color: var(--border-input-focus)
    }
`