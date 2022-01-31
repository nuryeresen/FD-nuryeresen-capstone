
import Navbar from "./Components/base/Navbar";
import Footer from "./Components/base/Footer";
import { ThemeContext } from "./context/ThemeContext";
import { styledComponentTheme } from "./styledComponents";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import {routes} from "./routes"
import {Routes, Route} from "react-router-dom"
import {SearchContextProvider} from "./context/SearchContext"

function App() {
  const { themeName } = useContext(ThemeContext);
  return (
    <div className="App "> 
    <div className="container">
      <div className="row ">
        <SearchContextProvider>
         
      <ThemeProvider theme={styledComponentTheme[themeName]}>
        <Navbar />
        <Routes>
       {
          routes.map((item, index) => <Route key={index} path={item.pathname} element={<item.element />} />)
        }
       </Routes>
       </ThemeProvider>
 
       </SearchContextProvider>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

        
          
        
        
       
        
     