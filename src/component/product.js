function App1() {
    return (
    <div>
    <img className='Topbar' src='TOPBAR 1 (1).png'></img>
    <nav className="navbar navbar-expand-sm ">
    <img className='Logo' src='Logo.png'></img>
    <ul className="nav-link">
      <Link to='/' className="THIS MONTH">
        <li>THIS MONTH</li>
      </Link>
      <Link to='/' className="SKIN">
        <li>SKIN</li>
      </Link>
      <Link to='/' className="HAIR">
        <li>HAIR</li>
      </Link>
      <Link to='/' className="BATH">
        <li>BATH</li>
      </Link>
      <Link to='/' className="SALE">
        <li>SALE</li>
      </Link>
      
      <button className='login'>LOG IN </button>
    </ul>
  </nav>
  
    </div>
  
    );
  }
  
  export default App1;
  