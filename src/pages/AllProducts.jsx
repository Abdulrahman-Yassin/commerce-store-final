import Slider from "../components/Slider"
import styles from './AllProducts.module.css'

import { useContext } from 'react';
import { ProductContext } from '../ProductContext';

function AllProducts() {


        const { products } = useContext(ProductContext);

    return(
        <div className={styles.products}>
            {products.map((product) => {
              return(
                <div key={product.name} className={styles.product}>
                <Slider
                name={product.name}
                price1={product.price1}
                image1={product.image1}
                rating={product.rating}
                offer={product.offer}
                review={product.review}
            />
            </div>
              )
            })}
        </div>
    )
}

export default AllProducts