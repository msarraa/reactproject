import React from "react";
import {NavLink, Link} from "react-router-dom"


class Footer extends React.Component {
    render() {
        return (

<div className="footer">
	<div className="logo"> 

    <img alt="Min hemsidas logotyp" src="images/logo-v.png" height="50" width="110"/>
	</div>
    <div class="navf-links">
	<ul>

		<li> <NavLink to="/help">Hjälp</NavLink></li> 
		<li> <NavLink to="/#">Vilkor</NavLink></li>
		<li> <NavLink to="/kontakt">Kontakt</NavLink></li>
		<li> <NavLink to="/#">Betalsätt</NavLink></li>
		<li> <NavLink to="/#">Leverans</NavLink></li>
	</ul>
    </div>
    </div>
);
}
}


export default Footer;