
import { Link, NavLink } from 'react-router-dom';
import './Nav.css';

export default function Navbar() {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">StoKKete</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
      <li className="nav-item">
          <NavLink className="nav-link" to='/'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/about'>Cattegories</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to='/profile'>Products</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to='/cart'>Cart</NavLink>
        </li>


        <div className='person'>
        <li className="nav-item">
          <NavLink className="nav-link" to='/login'>Singin</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to='/sinup'>Singup</NavLink>
        </li>
        </div>
        
        
      </ul>
      
    </div>
  </div>
</nav>

  )
}

