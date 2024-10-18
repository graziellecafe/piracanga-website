import { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import Piracanga from "./components/header/Piracanga";
import Navbar from "./components/navbar/Navbar";
import Section from "./components/section/Section"; 
const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}
body{
  background-color: ${(props) => props.theme.colors.bgDefault};
  @import url("https://fonts.googleapis.com/css2?family=Splash&display=swap");
  *{
    font-family: 'Roboto', sans-serif;
  }
}
`;

const Container = styled.div`
  background-color: white;
  height: 100vh;
`;

const theme = {
  colors: {
    primary: "#1a6436",
    secondary: "#7ecd26",
    light: "#1a6436",
    text: "snow",
    textDark: "gray",
    bgDefault: "white",
    bgPrimary: "#7ecd26e",
    bgSecondary: "#7ecd26",
    bgLight: "aliceBlue",
    hoverColor: "aliceBlue",
  },
};

const darktheme = {
  colors: {
    primary: "white",
    secondary: "tomato",
    light: "yellow",
    text: "snow",
    textDark: "gray",
    bgDefault: "black",
    bgPrimary: "black",
    bgSecondary: "black",
    bgLight: "aliceBlue",
    hoverColor: "",
  },
};

function App() {
  const [mode, setMode] = useState(false);
  return (
    <ThemeProvider theme={mode ? darktheme : theme}>
      <GlobalStyles />
        <Container>
        <Navbar setMode={setMode} mode={mode} />
        <Section />
        <Piracanga />
      </Container>
    </ThemeProvider>
  );
}

export default App;
