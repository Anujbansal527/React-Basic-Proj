import React, { useEffect, useState } from "react";
import "./Loading.css";

const LodingPage = () => {
  const [load, setLoad] = useState(false);
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);
  const [disableBtn,setDiable] = useState(false);

  const fetchProduct = async () => {
    try {
      const resp = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count == 0 ? 0 : count * 20
        }`
      );

      const data =await resp.json();
      console.log(data)

        if(data && data.products && data.products.length){
          setProduct((prevData) => [...prevData, ...data.products])
          setLoad(false)
        }
      
    } catch (error) {
      console.log(error)
      setLoad(false)
    }
  };

  useEffect(()=>{
    fetchProduct();
  },[count])

  useEffect(()=>{
    if(product && product.length === 100){
      setDiable(true)
    }
  })

  if(load){
    return <div className="loading">Loading...</div>
  }

  return <div className="loadmore-container">
      <div className="product-container">
    {
      product && product.length ? 
      product.map((item,index)=><div className="product" key={item.id}>
        <img src={item.thumbnail} alt={item.title}/>
        <p>{item.title}</p>
      </div>)
      : null
    }
    </div>
    <div className="btn-container">
      <button disabled={disableBtn} onClick={()=>setCount(count+1)}>Load More Products</button>
      {
        disableBtn ? <p>End of Products</p> : null
      }
    </div>

  </div>;
};

export default LodingPage;
