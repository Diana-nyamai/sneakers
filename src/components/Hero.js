import React from 'react'

function Hero() {
  return (
    <div>
       <div className='container'>
       <div className='left-container'>
          <div className='image'><img src='../images/image-product-1.jpg' alt='main-left'/></div>
          <div>
          <ul>
            <li><img src='../images/image-product-1-thumbnail.jpg' alt='thumbnail-left'/></li>
            <li><img src='../images/image-product-2-thumbnail.jpg' alt='thumbnail-left'/></li>
            <li><img src='../images/image-product-3-thumbnail.jpg' alt='thumnail-left'/></li>
            <li><img src='../images/image-product-4-thumbnail.jpg' alt='thumbnail-left'/></li>
          </ul>
          </div>
       </div>

       <div className='right-container'>
         <h3>sneaker company</h3>
         <h1>Fall Limited Edition Sneakers</h1>
         <p className='txt'>These low-profile sneakers are your perfect casual wear companion.
         Featuring a durable rubber outer sole, they'll withstand everything the weather can offer</p>
         <div className='price'>
           <p>$125.00</p>
           <p>50%</p>
         </div>
         <p className='discount'>$250</p>
         <div>
          <div className='btn-add'>
          <button className='add'>+</button>
          <button className='add'>1</button>
          <button className='add'>-</button>
          </div>
          <button>
          <i className='fa fa-shopping-cart'></i>
          add to cart
          </button>
         </div>
       </div>
       </div>
    </div>
  )
}

export default Hero