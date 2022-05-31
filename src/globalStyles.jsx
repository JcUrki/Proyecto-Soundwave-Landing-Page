import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
  /*--- Var(s)---*/
  :root{
    --color-background: #2F303A;
    --color-background-secondary:  #202027;
    --nav-hover: #adadad;
    --border-input: #2E3852;
    --border-input-focus: #596da0;
    --button-background: #1762A7;
    --button-hover: #2180d8;
    --button-focus: #2796ff;
    --accent-text: #BC3A80;
    --circle-1: rgba(188,58,128,0.1);
    --circle-2: rgba(52,87,178,0.1);
    --font: 'Poppins', sans-serif;
    --font-color: white;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: var(--font)
  } 

  body {
    background: var(--color-background);
  }
`

export default  GlobalStyle




