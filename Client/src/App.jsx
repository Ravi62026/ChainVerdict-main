import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About";
import Contact from "./components/Contact";
// import Wallet from './components/Wallet'
import Analyser from "./components/Home/Analyser";
import Form from "./components/Home/Form";
import FIR from "./components/Home/FIR";
import Result from "./components/Home/Result";
import { useState, useEffect } from "react";
import { ThemeProvider } from "./context/theme";

function App() {
  const [theme, setTheme] = useState("light");
  const darkTheme = () => {
    setTheme("dark");
  };
  const lightTheme = () => {
    setTheme("light");
  };

  useEffect(() => {
    const mainHtmlTarget = document.querySelector("html");
    mainHtmlTarget.classList.remove("light", "dark");
    mainHtmlTarget.classList.add(theme);
  }, [theme]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/analysis" element={<Analyser />} />
        <Route path="/bns-analyzer" element={<Form />} />
        <Route path="/judgement-analyzer" element={<Form />} />
        <Route path="/fir-generator" element={<FIR />} />
        <Route path="/result" element={<Result />} />
        {/* <Route path="/wallet" element={Wallet} /> */}
      </Route>
    )
  );

  return (
    <ThemeProvider value={{ theme, darkTheme, lightTheme }}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
