import React from "react";
class Help extends React.Component {
	render() {
	    return (
<section className="hjalp-page">
	<div className="row">
	<div className="search-section">
		<h2>Hej! <br/>Hur kan vi hjälpa dig idag?</h2>
		<p>Söker du efter svar? Du kan hitta svar på många olika frågor under vanliga frågor eller genom att söka här</p>
		<input type="text" placeholder="Skriv din fråga här" />
	</div>
	<div className="frågor-section">
		<h2>Vanliga frågor</h2>
		<ul className="faq-list">
		<li>
			<h3>Hur gör jag en beställning?</h3>
		</li>
		<li>
			<h3>Hur fungerar designa själv?</h3>
		</li>
		<li>
			<h3>Hur fungerar designa själv?</h3>
		</li>
		<li>
			<h3>Hur fungerar designa själv?</h3>
		</li>
		<li>
			<h3>Hur fungerar designa själv?</h3>
		</li>
		</ul>
	</div>
	</div>
</section>
);
}
}


export default Help;