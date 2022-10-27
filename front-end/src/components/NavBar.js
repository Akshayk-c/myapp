import React from 'react'
import { Link } from 'react-router-dom';

 function NavBar(props) {
  const admin=props.props[0]
  const currentPage=props.props[1]
  const logOut = () => {
    sessionStorage.removeItem('Token')
  }
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <span class="navbar-brand" >Navbar</span>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <Link class={`nav-link ${currentPage==='home' ? 'active': ' '}`} aria-current="page" to="/profile">Home</Link>
        </li>
        <li class="nav-item">
        <Link class={`nav-link ${admin ? ' ': 'd-none'} ${currentPage==='alluser' ? 'active ': ' '}`}  to='/view'  >All Users</Link>
        </li>
        <li class="nav-item">
        <Link class={`nav-link ${admin ? ' ': 'd-none'} ${currentPage==='newuser' ? 'active': ' '}`}  to='/new_user'>Add User</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link link-danger"  onClick={logOut} to='/'>Log out</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
export default NavBar