import React from 'react';
import './App.css';
import {Navbar,NavLink,Nav, NavItem,Button,Dropdown,DropdownButton} from 'react-bootstrap';


function App() {
  return (
    <div className="Tabs">
      <ul class="nav nav-pills ">
        <li class="nav-item ">
          <a class="nav-link " href="#">Plan B</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">week3</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">week4</a>
        </li>
        <Dropdown className="Dropdown"  >
          <Dropdown.Toggle  id="dropdown-basic" >
            Mix Chattarin
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ul>
      
    </div>
      
    
  );
}

export default App;
