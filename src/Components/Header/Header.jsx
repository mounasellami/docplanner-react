import React from 'react';
import './Header.css';

const Header = () => {
  return(
  <header className="docplanner-header" >
    <nav className="docplanner-nav">
      <a href="file:///D:/GoMyCode%20Full-Stack%20JS/4-%20CSS%20layout/CSS%20Layout/index.html" >
        <img className="logo-docplanner"
               alt="Docplanner Group" 
               src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
        />    {/* "Header/logo-Docplanner-Group.svg"  */}
      </a>
      <div className="header-menu">
        <li><a id="active" href="file:///D:/GoMyCode%20Full-Stack%20JS/4-%20CSS%20layout/CSS%20Layout/index.html">About us</a></li>
        <li><a href="/career">Career</a></li>
  
        <div className="dropdown">
          <a>Departments</a>
          <div className="dropdown-content">
            <li><a className="link" href="/department?dep=marketing">Marketing & PR</a></li>
            <li><a className="link" href="/department?dep=customer">Customer Success & Sales</a></li>
            <li><a className="link" href="/department?dep=it">IT, Product, Data</a></li>
            <li><a className="link" href="/department?dep=finance">Finance & Administration</a></li>
            <li><a className="link" href="/department?dep=hr">HR & more</a></li>
         </div>
        </div>
      </div>
    </nav>
  </header>
)
};

export default Header;


