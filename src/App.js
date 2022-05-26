import React from "react";
import Home from "./pages/Home";
import { ThemeProvider } from '@material-ui/core/styles';
import SignIn from "./pages/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from './theme';
import './mock'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<h1>Not Found 404! DickHead</h1>} />
        </Routes>      
      </BrowserRouter>
      {/* {
        url === 'http://localhost:3000/'
        ? <Home />
        : <SignIn />
      } */}
    </ThemeProvider>
    
  );
}

export default App;
