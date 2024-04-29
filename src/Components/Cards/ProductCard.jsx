import React from "react";
import styles from "./ProductCard.module.css";
const ProductCard = ({ item }) => {
  return (
    <section className={styles.productContainer}>
      <div className={styles.Procard}>
        <div className={styles.Card}>
          <div>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <button>add</button>
            <button>fav</button>
          </div>
        </div>
      </div>
      
    </section>

    
  );
};

export default ProductCard;
