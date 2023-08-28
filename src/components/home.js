import React from "react";
const Home = (props) => {
  console.log('pppp',props)
  return (
    <div>
      <h1>home</h1>
      <div className="cart-wrapper">
        <div className=" img-wrapper item">
          <img src="https://www.91-img.com/pictures/121008-v1-apple-iphone-x-mobile-phone-large-1.jpg" />
        </div>
        <div className=" text-wrapper item">
          <span>I-Phone</span>
          <span>Price : $1000.00</span>
        </div>
        <div className=" btn-wrapper item">
          <button 
          onClick={()=>props.addToCartHandler({price:1000,name:'i phone'})}
          >Add To cart</button>
          <button className="remove"
          onClick={()=>props.removeToCartHandler()}
          >Remove To cart</button>
        </div>
        
      </div>
    </div>
  );
};
export default Home;
