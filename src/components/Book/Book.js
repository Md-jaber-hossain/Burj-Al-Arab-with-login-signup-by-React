import React from 'react';
import { Link } from 'react-router-dom';

const Book = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Congratulations!!! <br /> You have booked a nice Room.</h1>
            <p>Want a <Link to="/home">different room?</Link> </p>
        </div>
    );
};

export default Book;