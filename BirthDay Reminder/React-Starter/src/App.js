import React, { useState } from 'react';
import Card from './Card';
import data from './data';
import List from './List';

function App() {

  const [birthDayList, setTitle] = useState(data);


  const onclickClearAll = () => {
    setTitle('');
    // unmountComponentAtNode(document.getElementById('divlist'));
  };

  return (
          <Card>
          <h3>
            {birthDayList.length} Birthdays 
          </h3>
          <div id='divlist'>
            {
              birthDayList.length>0 && birthDayList.map((item) =>(
            <List name={item.name} age={item.age} image={item.image}/>
              ))
            }
          </div>
          <button className='button' onClick={onclickClearAll}> Clear All</button>
          </Card>
       
  );
}

export default App;
