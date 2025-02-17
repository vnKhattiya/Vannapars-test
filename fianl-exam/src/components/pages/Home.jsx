import React from 'react';
import Products from '../../Data';
import ProductCard from '../layouts/ProductCard';

const Home = () => {
    return (
        <div>
            <div className='bg-light container-fluid py-5'>
                <div className='container'>
                    <h1 className='fw-bold text-center'>Products</h1>
                    <hr className='w-75 mx-auto py-2' />
                    <div className='d-flex flex-wrap justify-content-center pb-5 gap-4 sm:mx-3 md:mx-5 lg:mx-10'>
                        {Products.map((item, index) => (
                            <div style={{ width: '300px', padding: '10px' }} key={index}>
                                <ProductCard item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;