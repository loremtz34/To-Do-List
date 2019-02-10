import React from 'react';

//Here we create the title of the page
const title= (props)=>{
    return(
        <div>
            <h1>{props.Text}</h1>
        </div>
    );    
};

export default title; // title is pass as difault to other files