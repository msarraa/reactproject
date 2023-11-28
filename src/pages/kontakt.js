import React from "react";
class Kontakt extends React.Component {
	render() {
	    return (
			<section className="contact-us">
            <div className="row">
                <div className="contact-col">
                    <div>
                        <i className="fa fa-home"></i>
                        <span>
                            <h5>Address</h5>
                            <p>Lastarevägen 34
                                <br />982 38 Gällivare
                                <br />076-128 36 80</p>
                        </span>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <span>
                            <h5>+46 00000000</h5>
                            <p>Monday to Friday, 9AM to 5PM</p>
                        </span>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <span>
                            <h5>kontakt@bellebi.se</h5>
                            <p>Mail us</p>
                        </span>
                    </div>
                </div>

                <div className="contact-col">
                    <form>
                        <input type="text" placeholder="Name" required />
                        <input type="email" placeholder="E-mailaddress" required />
                        <input type="text" placeholder="Subject" required />
                        <textarea rows="8" placeholder="Message" required />
                        <button type="submit" className="hero-btn red-btn">Send</button>
                    </form>
                </div>
            </div>
        </section>

    );
}
}


export default Kontakt;
			
