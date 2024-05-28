import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ProductList.css'

const Fav = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('fav')) || [];
    setCartItems(cart);

    // const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    // setTotalSum(totalPrice);
    
    // // Removed unnecessary condition for setting delivery charge

    // setSumCost(totalPrice + delivery); // Changed from totalSum+Delivery to totalPrice + delivery
  },[] ); // Added delivery to the dependency array

//   useEffect(() => {
//     const deliveryCharge = cartItems.length > 0 ? 40 : 0; // Changed from totalSum > 0 to cartItems.length > 0
//     setDelivery(deliveryCharge);
//     setSumCost(totalSum + deliveryCharge);
//   }, [totalSum, cartItems]); // Added totalSum and cartItems to the dependency array

  const handleRemove = (index, event) => {
    event.preventDefault();
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem('fav', JSON.stringify(updatedCart));
    const updatedTotal = updatedCart.reduce((acc, item) => acc + item.price, 0);
    setTotalSum(updatedTotal);
    toast.success('Item removed from fav');
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
  
      <div className='porductlistheader'>YOUR Favourites</div>
      <div className="cartcontainer">
      <div className='container'>
        {cartItems && cartItems.length > 0 ?cartItems.map((item, index) => (
          
            <Link to={`/${item.id}`} key={index} className='card'>
              <img className='shoeimg' src={item.category==="Seasonal"?item.productName+".webp": item.productName+".png"} width={220} height={120} alt="" />
              <div>{item.productName}</div>
              {`MRP : $${item.price} `}
              <img src={item.brand === 'Nike' ? '4star.png' : '5star.png'} width={80} alt="" />
            <button className="crossmark" onClick={(event) => handleRemove(index, event)}>
              <img src="remove.png" alt="" width={30} height={30} />
            </button>
            </Link>
          
        )):(
            <div className='nocart'>NOTHING TO SHOW IN YOUR Favourites 😢</div>
          ) }
      </div>

      
      </div>
    </>
  )
}

export default Fav;
