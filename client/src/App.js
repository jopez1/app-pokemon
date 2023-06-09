import Routes from "./routes";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// styled
import { StyledGlobal } from "./css/StyledGlobal";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
// components

function App() {
  const [appearance, ] = useState("light");
  

  return (
      <ThemeProvider theme={theme[appearance]}>
        <Router>
          <div className="App">
            <StyledGlobal />
            
            <Routes />
          </div>
        </Router>
      </ThemeProvider>
  );
}

export default App;
