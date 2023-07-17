import { ThemeProvider } from "styled-components";

const theme = {
    /* tomamos los colores de esta paleta https://flatuicolors.com/palette/ca */
    colors: {
        primary: "#341f97", // BLUEBELL
        primaryVariant: "#5f27cd", // NASU PURPLE
        light: "whitesmoke", 
        grey: "#c8d6e5", // LIGHT BLUE BALLERINA
        white: "white", 
        black: "black",
        glass: "rgba(255, 255, 255, 0.54)",
        primaryBg: "#8E2DE2",  //Lilac spring
        secondaryBg: "#6A82FB", //Pan purple
        activeItem: "#b3a7f4", //purple illusion, mix between Lilac spring, Pan purple y white
        borderItem: "#6A82FB", //Pan purple
        sidebarBg: "#ffe0e0", // Pink pleasure
        /* cardTitleBg: "rgba( 149, 20, 52, 0.65 )",
        cardBg: "rgba( 149, 20, 52, 0.30 )",
        cardShadow: "rgba( 159, 20, 52, 0.37 )", */
    }
};

function Theme({ children }){
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
};

export default Theme;