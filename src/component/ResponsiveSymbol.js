
import React, { useState } from 'react';


function ResponsiveSymbol() {
    const [clickCount, setClickUpCount] = useState(0);
    const [isClicked, setIsClicked] = useState(false);


    const handleClickedsUp = () => {
        if (!isClicked) {
	    setClickUpCount(clickCount + 1);
            setIsClicked(false);
        }
    };

    return (
        <div className="symbol-image-container">
            <h1>Varmt Välkommen igen!</h1>
            <p>Hoppas att du hittat något som du tycker om</p>
            <button
                onClick={handleClickedsUp}
                className={`symbol-image-button ${isClicked ? 'clicked' : ''}`}
            >
                <img src="images/symbol.png" alt="symbol" height="50" width="auto" />
		</button>
            <p>Tryvk på vår symbol för att visa stöd till vårt arbete: {clickCount}</p>
        </div>
    );
}


export default ResponsiveSymbol;