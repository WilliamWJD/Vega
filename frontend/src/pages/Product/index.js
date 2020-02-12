import React, {useState, useEffect} from 'react'

import './styles.css'

import api from '../../services/api'

const Product = ({match}) => {
    const [product, setProduct]=useState({})
    const {id}=match.params

    useEffect(()=>{
        async function loadProduct(){
            const response=await api.get(`/products/${id}`)
            setProduct(response.data)
        }
        loadProduct()
    },[])

    return(
        <div className="product-info">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>
                URL: <a href={product.url} target="_blank">{product.url}</a>
            </p>
        </div>
    )
}

export default Product