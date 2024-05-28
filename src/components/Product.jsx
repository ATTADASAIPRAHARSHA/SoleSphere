import {React,useEffect}from 'react'
import { useParams  , useNavigate  } from 'react-router-dom'
import Data from './Data.json'
import './Product.css'
import ShoesReviews from './Reviews'
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
    const nav = useNavigate();
    const {id} = useParams();
    const array = Data.filter((item)=> item.id===parseInt(id))
    // useEffect(() => {
    //   return () => {
    //     let cartarray = localStorage.getItem('cart')
    //     console.log(cartarray)
    //   }
    // }, [])
    
    
    const handlecart = (item)=>{
        let array = JSON.parse(localStorage.getItem('cart')) || [];
        array = [...array,item]
        localStorage.setItem('cart',JSON.stringify(array))
        toast.success(' ADDED TO CART! 👍', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    const handlefav = (item)=>{
        let array1 = JSON.parse(localStorage.getItem('fav')) || [];
        array1 = [...array1,item]
        localStorage.setItem('fav',JSON.stringify(array1))
        toast.success(' ADDED TO Favourites! 👍', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }


    console.log(array)
    const handlenext =(id)=>{
        if(id<60)
        nav(`/${id + 1}`)
    }
    const handleprev =(id)=>{
        if(id>1)
        nav(`/${id - 1}`)
    }


  return (<>
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
        {/* Same as */}
        <ToastContainer />
        {array.map((item,index)=>(
            <div className='pro' key={index}>
                <div className="productcontet">
                    <img className='prodimg'  src={item.category==="Seasonal"?"/SoleSphere/"+item.productName+".webp": "/SoleSphere/"+item.productName+".png"} width={600} height={300} alt="" />
                    <div className="detail">
                        <div className='productname'><h1>{item.productName}</h1><h3>{`For ${item.category} (${item.brand})`}</h3></div>

                            <div className="description">{item.description}</div>
                        <div className='productrating'><img src={"/SoleSphere/"+item.rating+'.png'} width={70} alt="" /></div>
                        <div className='productprice'><h2>{`MRP: $${item.price}`}</h2><h3>incl. of taxes</h3><h4>(Also includes all applicable duties)</h4></div>
                        <div><h2>Available colurs :</h2>
                        <div className="productcolor">
                        {
                                    (item.color).map((size,index)=>(
                                        <div key={index} className='colorcard' style={{backgroundColor:`${size}`}}></div>
                                    ))
                                }
                            </div></div>
                        <div ><h2>Available sizes :</h2>
                        <div className="productsize">

                                {
                                    (item.size).map((size,index)=>(
                                        <div key={index} className='sizecard'>{size}</div>
                                    ))
                                }
                                </div>
                        </div>
                    </div>
                </div>
                <div className="ordernow">
                    <button onClick={()=>handlefav(item)}>ADD TO FAVOURITES <img src={"/SoleSphere/"+"lover.png"} width={20} height={20} alt="" /></button>
                    <button >Order Now <img src={"/SoleSphere/"+"order.png"} width={20} height={20} alt="" /></button>
                    <button onClick={()=>handlecart(item)}> ADD TO CART <img src={"/SoleSphere/"+"addtocart.png"} width={20} height={20} alt="" /></button>
                    
                </div>
                <ShoesReviews/>
                <button onClick={()=>handlenext(item.id)} className='greatnext'><img src={"/SoleSphere/"+"nextshoe.png"} width={40} height={40}  alt="" /></button>
                <button onClick={()=>handleprev(item.id)} className='lessprev'><img src={"/SoleSphere/"+"previous.png"} width={40} height={40}  alt="" /></button>
            </div>
        ))}

    </>
  )
}

export default Product
