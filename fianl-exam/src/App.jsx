import { useState } from 'react';
import React from 'react';
import Header from './components/layouts/Header';
import ProductCard from './components/layouts/ProductCard';
import Products from './Data';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <Header/>
            <div className='bg-light container-fluid py-5'>
                <div className='container'>
                    <h1 className='fw-bold text-center'>Products</h1>
                    <hr className='w-75 mx-auto py-2' />
                    <div>
                        {Products.map((item, index) => (
                            <ProductCard key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default App

//ฮือๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆ
