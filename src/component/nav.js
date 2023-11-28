import React from "react";
import {NavLink, Link} from "react-router-dom"; 

class Nav extends React.Component {
	render() {
	    return (
	    <div className="nav">
      		<div className="nav-links">
				<ul>
				<li><NavLink to="/">Hem</NavLink></li>
				<li><NavLink to="/produkter">Produkter</NavLink></li>
				<li> <NavLink to="#">Favoriter</NavLink></li>
				</ul>
      		</div>
			<div className="korg">
        		<img src="images/varukorg.png" alt="Varukorg" height="50" width="50"/>
      		</div>
    </div>
    );
}
}


export default Nav;