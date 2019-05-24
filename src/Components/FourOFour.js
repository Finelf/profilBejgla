import React from 'react';
import {Link} from 'react-router-dom'

const FourOFour = () => (
    <div>
        <h1>404, Guess you are not bejgl enough</h1>
        <button><Link to={'/login'}>Take me home, country roads</Link></button>
    </div>
);

export default FourOFour;