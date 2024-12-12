/*eslint-disable */

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import styles from "./ListSlider.module.css";
import Slider from "./Slider";

import React, { useContext } from 'react';
import { ProductContext } from '../ProductContext';


function ThisMonth() {

  const { getProductsByIdRange } = useContext(ProductContext)

  const filteredProducts = getProductsByIdRange(5, 10)

  return (
    <div className="container">
      <div className={styles.sliders}>
        <Swiper modules={[Navigation]} navigation={true} slidesPerView={4} spaceBetween={0} className="mySwiper" 
        breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}>
          {filteredProducts.map((product) => (
            <SwiperSlide key={product.name}>
              <Slider
                name={product.name}
                price={product.price}
                image1={product.image1}
                rating={product.rating}
                review={product.review}
                offer={product.offer}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Link to='AllProducts'><button className={styles.button}>View All Products</button></Link>
      </div>
    </div>
  );
}

export default ThisMonth;
