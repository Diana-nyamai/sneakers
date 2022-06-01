import React, {useState} from 'react'

function Hero() {
 const [number, setNumber] = useState(1);
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
          <button className='add' onClick={() => setNumber(prevstate => prevstate - 1)}>-</button>
          <button className='add num'>{number}</button>
          <button className='add' onClick={() => setNumber(prevstate => prevstate + 1)}>+</button>
          </div>
          <button className='add-to-cart'>
          <i className='fa fa-shopping-cart'></i>
            <span>add to cart</span>
          </button>
         </div>
       </div>
       </div>
    </div>
  )
}

export default Hero