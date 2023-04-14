import "./App.css";
import Datasets from "./components/Datasets";
import About from "./components/About";
import Settings from "./components/Settings";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./components/style.css";


const theme = createTheme({
  palette: {
    primary: {
      main: "#1E1E1E",
    },
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {" "}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/datasets" element={<Datasets />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
