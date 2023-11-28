import Home from "./pages/Home";
import Produkter from "./pages/produkter"
import Kontakt from "./pages/kontakt"
import Help from "./pages/help"

import Footer from "./component/footer";
import Header from "./component/header";
import Nav from "./component/nav";


import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


import "./App.css";
import "./stilmall.css";


function App() {
    return <div>
        <Router>
	    <Header/>
	    <Nav />
            <Switch>
                <Route exact path="/" component={Home}/>
		<Route path="/produkter" component={Produkter}/>
		<Route path="/kontakt" component={Kontakt}/>
		<Route path="/help" component={Help}/>
            </Switch>
	    <Footer/>
        </Router>
 </div>;}
export default App;

