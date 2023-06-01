import React, { useState, useEffect } from 'react'

function Products() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('/api/products');
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.log('Error fetching products:', error);
        }
    };

    return (
        <div>
            {data.map((e) => (
                <div key={e.id}>
                    <h3>{e.name}</h3>
                    <p>{e.price}</p>
                    <p>{e.quantity}</p>
                    <p>{e.manufacturer}</p>
                </div>
            ))}
        </div>
    )
}

export default Products