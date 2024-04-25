
import React from 'react';
import './App.css';
import {useState} from 'react'
import BasicModal from './components/component';

function App() {
  const [openModal, setOpenModal] = useState(false);
  console.log(openModal,'openmodal')

 
  return (
    <div className="App">
     <div className="outerbox">
        <div className="inner-container">
          <div className="box">
            <h1 className="heading">Wallet Balance:</h1>
            
            <BasicModal open = {openModal}/>
            </div>
          <div className="box2">
          <h1 className="heading">Expenses:</h1>
          <button className="addexpensebutton">+Add Expense</button>
          </div>
          
        </div>
      </div>
      <div className="two">
       <h1 className="heading">Recent Transactions</h1>
       <h1 className="heading" style={{ textAlign: 'right', marginLeft: 'auto' , marginRight: '280px'}}>Top Expenses</h1>
       </div>
      <div style={{display:"flex"}}>
      <div className="box3">
      
      </div>
      <div className="box4">

      </div>
      </div>
    </div>
  );
}

export default App;
