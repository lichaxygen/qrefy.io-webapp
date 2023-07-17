import { createGlobalStyle } from 'styled-components';
import fontQatarBold from '../assets/fonts/Qatar2022Arabic-Bold.ttf';
import fontQatarHeavy from '../assets/fonts/Qatar2022Arabic-Heavy.ttf';
 
const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Qatar Bold';
        src: url(${fontQatarBold}) format("truetype");
    }
    @font-face {
        font-family: 'Qatar Heavy';
        src: url(${fontQatarHeavy}) format("truetype");
    }
    :root{
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;  
    }

    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        /* background-color: ${(props)=>props.theme.colors.primary}; */
        background: ${(props)=>props.theme.colors.primaryBg};  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, ${(props)=>props.theme.colors.primaryBg}, ${(props)=>props.theme.colors.secondaryBg});  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, ${(props)=>props.theme.colors.primaryBg}, ${(props)=>props.theme.colors.secondaryBg}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    @media (max-width: 768px){
        body {
            font-size: 75%;
        }
    }

    @media (max-width: 420px){
        body {
            font-size: 60%;
        }
    }

    a:link, a:visited, a:active {
        text-decoration:none;
        color: ${(props)=>props.theme.colors.primary};
    }

    h1,h2,a,form,button{
        font-family: 'Qatar Bold', sans-serif ;
    }

`;
 
export default GlobalStyle;