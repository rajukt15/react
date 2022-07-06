import './index.css';
import React from 'react';

function Card(props){

    return ( <div className='section'>
        <div className='main'><div className='container'>
            {props.children}
        </div></div></div>);
}

export default Card;