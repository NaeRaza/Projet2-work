import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Help from "./pages/assistance/Help";
import Blog from "./pages/blog/Blog";
import Home from "./pages/Home";
import Software from "./pages/logiciels/Software";
import Pro from "./pages/pro/Pro";
import Product from "./pages/produits/Product";
import Where from "./pages/where/Where";

function App() {
  return (
    <>
      
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact> <Home/> </Route>
          <Route path="/products"> <Product /> </Route>
          <Route path="/help"> <Help /> </Route>
          <Route path="/software"> <Software /> </Route>
          <Route path="/blog"> <Blog /> </Route>
          <Route path="/pro"> <Pro /> </Route>
          <Route path="/where-to-buy"> <Where /> </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
