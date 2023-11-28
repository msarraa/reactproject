import React from "react";
class Produkter extends React.Component {
	render() {
	    return (

    <div class="container">
        <div class="box">
          <img src="images/doftljus.png" alt="Bild 1"/>
          <h3>Doftlus</h3>
        </div>
        <div class="box">
          <img src="images/retro.png" alt="Bild 2"/>
          <h3>Retro</h3>
        </div>
        <div class="box">
          <img src="images/smycke.png" alt="Bild 3"/>
          <h3>Smycken</h3>
        </div>
        <div class="box">
          <img src="images/muggar.png" alt="Bild 4"/>
          <h3><a href="produkter2.html">Muggar</a></h3>
        </div>
        <div class="box">
          <img src="images/Canvastavlor.jpg" alt="Bild 5"/>
          <h3>Canvastavlor</h3>
        </div>
        <div class="box">
          <img src="images/lek.png" alt="Bild 6"/>
          <h3>Lek & Spel</h3>
        </div>
      </div>

    );
}
}


export default Produkter;
