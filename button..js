import React, { useState } from 'react';
import './App.css';

function ClickCounter() {
    const [ count, setCount] = useState(0);

    return (
        <div>
            <button className="myButton" onClick="{ () => setCount(count+1)}>
                Click here
            </button>
            <p>You Clicked {count} times</p>
        </div>


    );
}