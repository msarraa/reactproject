import React from "react";
import {NavLink} from "react-router-dom"; 

class Header extends React.Component {
    render() {
        return (

<div className="header">
	< NavLink to="/"> <img src="images/Logog.png" alt="Min hemsidas logotyp" height="80" width="150"/></NavLink>
   
    </div>
);
}
}


export default Header;