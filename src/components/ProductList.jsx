import React , {useState,useEffect} from 'react'
import Data from './Data.json'
import './ProductList.css'
import { Link } from 'react-router-dom';

const ProductList = ({category}) => {
  const [Cart, setCart] = useState([])
  const [SelectedRating, setSelectedRating] = useState(null)

  useEffect(() => {
    const array = Data.filter((item) => item.category === category);
    setCart(array);
  }, [category]);
  // const array = Data.filter((item)=> item.category===category)
  // setCart(array)
  const handleeventchange = (rating)=>{
    const array = Data.filter((item) => item.rating >= rating && item.category === category );
    setCart(array);
  }
  const handleeventprice = (rating)=>{
    const array = Data.filter((item) => item.price >= rating && item.category === category );
    setCart(array);
  }
  const handleunchecked =()=>{
    const radios = document.getElementsByName('rating')
    radios.forEach(function(radio) {
      radio.checked = false;
  });
  const array = Data.filter((item) => item.category === category );
    setCart(array);
  }
  return (
    <>
    <div className='porductlistheader'>{category}</div>
    <div className="catcontainer">
      <div className="filters">
        <div className="filterhead">Filter By :</div>
        <div className="selectrate">
          <div>BY RATINGS :</div>
          <div><input type="radio" value={5} onChange={()=>handleeventchange(5)} name='rating' ></input>&gt;=&nbsp;<img src={'5.png'} width={80} alt="" /></div>
          <div><input type="radio" value={4} onChange={()=>handleeventchange(4)} name='rating' ></input>&gt;=&nbsp;<img src={'4.png'} width={80} alt="" /></div>
          <div><input type="radio" value={3} onChange={()=>handleeventchange(3)} name='rating' ></input>&gt;=&nbsp;<img src={'3.png'} width={80} alt="" /></div>
          <div onClick={()=>handleunchecked()} className="clear"><button>CLEAR</button></div>
        </div>
        <div className="selectrate">
          <div>BY PRICES :</div>
          <div><input type="radio" value={5} onChange={()=>handleeventprice(150)} name='rating' ></input>&gt;=&nbsp;$150</div>
          <div><input type="radio" value={4} onChange={()=>handleeventprice(100)} name='rating' ></input>&gt;=&nbsp;$100</div>
          <div><input type="radio" value={3} onChange={()=>handleeventprice(50)} name='rating' ></input>&gt;=&nbsp;$50</div>
          <div onClick={()=>handleunchecked()} className="clear"><button>CLEAR</button></div>
        </div>
      </div>

    <div className='container'>

        {Cart.map((item,index)=>(

          <Link to={`/${item.id}`} key={index} className='card'>
            <img className='shoeimg' src={`${item.category === "Seasonal" ? "/SoleSphere/"+item.productName + ".webp" : item.productName + ".png"}`} width={220} height={120} alt="" />
            <div>{item.productName}</div>
            { `MRP : $${item.price} `}
            <img src={item.rating+'.png'} width={80} alt="" />
          </Link>
        ))}
      
    </div>
    </div>
    </>
  )
}

export default ProductList
