import React from 'react'
import Products from '../component/Products'
import Typed from "react-typed"


const Home = ({setProgress}) => {



return (
 <>

 <div className="container text-center">
 <h1>Welcome To Shopify</h1>

 
 <Typed
    className='text-danger'
      strings={[
            "Nepal's best online shopping platform",
            "We believe in Quality products",
            "Thanks for visiting us",
          ]}
          typeSpeed={100}
          backSpeed={100}
          loop
          wrapped = {'h4'}
        />

 </div>
 
  <Products setProgress={setProgress} />
  </>
 )
}

export default Home