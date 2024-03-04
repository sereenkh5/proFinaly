import React, { useEffect, useState } from 'react';

import './home.css'

function Home() {
  const [categories,setcategories]=useState([]);

  const getprodect= async ()=>{
    const response= await fetch('https://ecommerce-node4.vercel.app/categories/active?page=1&limit=20')
    const data= await response.json();
    setcategories(data.categories)
    console.log(data.categories)
  }
  useEffect(()=>{
    getprodect();
    
      },[])

  return (
    <>


    <section className='hero'>
      <div className='content'>
        <h1>New Arreivais For Men & Women!</h1>
        <p>Get The Best Women Fashion Arrivals.
          </p>
            <a href='#home' >Start Now!</a>
      </div>
    </section>

    <div className='color'>
   {categories.map(pro=> 
    <div className='prodect'key={pro._id} id='home' >
      <div >
        
      <h2 >{pro.name}</h2>
      <img   src={pro.image.secure_url}/> </div> 
      
    </div>
    
    
    )}
</div>
    </>
  )
}

export default Home