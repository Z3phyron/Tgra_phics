import GlobalStyle from "./components/styles/GlobalStyle";
import Nav from "./components/navbar/Nav";
import Home from "./components/Home"
import { Switch, Route, useLocation } from 'react-router-dom' 
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { AnimatePresence } from 'framer-motion'



function App() {
  const location = useLocation();


  return (
      <div className="App">
      <GlobalStyle/>
      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home/>
        </Route>

        <Route path="/work" exact>
          <Portfolio/>
        </Route>
        <Route path="/contact" exact>
          <Contact/>
        </Route>
      </Switch>
      </AnimatePresence>

    </div>

    
  );
}

export default App;
