import React from 'react';

export const Characters = (props) => ( // Watch out for accidentally making this a function when you don't want it to be one.'
    <div> 
        <h3>This is the Characters app component.</h3>
        <h4>{props.title}</h4>
    </div>
)