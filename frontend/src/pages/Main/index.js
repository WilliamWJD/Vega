import React, { useState, useEffect } from 'react'

import './styles.css'

import api from '../../services/api'

const Main = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get('/products')
            setProducts(response.data.docs)
        }
        loadProducts()
    }, [])

    return (
        <div className="product-list">
            {products.map(product => (
                <article key={product._id}>
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>
                    <a href="">Acessar</a>
                </article>
            ))}
            <div className="actions">
                <button>Anterior</button>
                <button>Próxima</button>
            </div>
        </div>
    )
}

export default Main