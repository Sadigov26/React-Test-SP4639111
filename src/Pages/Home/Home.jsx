import React, { useEffect, useState } from 'react'
import ProductCard from '../../Components/Cards/ProductCard'
import axios from 'axios'
import styles from "./Home.module.css";


const Home = () => {


    const [products, setProducts] = useState([])
   

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(res => {
            setProducts(res.data)
        })
    }, [])


  return (
    <section className={styles.productContainer}>

    <div className={styles.Procard}>
    <div className={styles.Card}>
        {products.map(item => <ProductCard item={item}/>)}
    </div>
    </div>
    </section>
  )
}

export default Home