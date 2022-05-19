import React from 'react'

function foot() {
    
    return (
        <body>
            
        <div className ="container"></div>
            <footer>
                <div className= "columns">
                    <div className= "column">
                        <ul>
                            <li><a href="/aboutUs">About Us</a></li>
                            <li><a href="/contactUs">Contact Us</a></li>
                            <li><a href="/Directions">Directions</a></li>
                            <li><a href="/openingTimes">Opening Times</a></li>
                        </ul>
                    </div>
                    <div className= "column">
                        <ul>
                            <li><a href="/classifications">Classifications</a></li>
                            <li><a href="/discussionBoard">Discussion Board</a></li>
                            <li><a href="/placesToGo">Places To Go</a></li>
                            <li><a href="#">Platinum badge</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
            </body>
    
    );
}

export default foot;
