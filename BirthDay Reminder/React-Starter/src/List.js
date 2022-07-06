import React from 'react';
import './index.css';
import Card from './Card';

const List = (props) => {

    

  return (
        <div className='person'>
          <img src={props.image}  alt='image'></img>
          <h4>
            {props.name}
            <p>
            age : {props.age}
          </p>   
          </h4>
        </div>        
  );
};

export default List;
