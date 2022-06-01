import React from 'react'

function Navbar() {
  return (
    <div>
      <nav>
        <h1>sneakers</h1>
         <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
         </ul>
         <p className='cart'><i className='fa fa-shopping-cart'></i></p>
         <p><img src='../images/image-avatar.png' alt='profile' /></p>
      </nav>
    </div>
  )
}

export default Navbar