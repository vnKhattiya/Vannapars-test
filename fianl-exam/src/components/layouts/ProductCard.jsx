import React from 'react';

const ProductCard = (props) => {
    return (
        <div
            className="card shadow-lg rounded-lg overflow-hidden position-relative"
            style={{ width: '18rem', margin: '1rem', backgroundColor: '#f9f9f9', position: 'relative' }}
        >
            <img
                className="card-img-top"
                src={props.item.image}  
                alt="Product"
                style={{ height: '15rem', objectFit: 'cover' }}
            />
            <div className="card-body" style={{ padding: '1rem', position: 'relative' }}>
                <h5 className="card-title" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    {props.item.Name}
                </h5>
                <p
                    className="card-text text-muted"
                    style={{ fontSize: '0.9rem', marginBottom: '1rem' }}
                >
                    {props.item.Description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    
                    <button
                        className="btn btn-success"
                        style={{ padding: '0.5rem 1rem', borderRadius: '5px', fontSize: '0.9rem' }}
                    >
                        🛒 ตะกร้า
                    </button>

                    <p
                        className="card-text"
                        style={{ fontWeight: 'bold', color: '#4caf50', fontSize: '1.1rem' }}
                    >
                        {props.item.Price} บาท
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
