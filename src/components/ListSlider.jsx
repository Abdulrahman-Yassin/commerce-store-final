/*eslint-disable */

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";
import styles from "./ListSlider.module.css";

import { Navigation } from "swiper/modules";

import Slider from "./Slider";

import React, { useContext } from 'react';
import { ProductContext } from '../ProductContext';

function ListSlider() {

  const { getProductsByIdRange } = useContext(ProductContext)

  const filteredProducts = getProductsByIdRange(0, 6)

  return (
    <div className="container">
      <div className={styles.sliders}>
        <Swiper
          navigation={true}
          slidesPerView={4}
          spaceBetween={0}
          modules={[Navigation]}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
          className="mySwiper"
        >
          {filteredProducts.map((product) => (
            <SwiperSlide key={product.name}>
              <Slider
                name={product.name}
                price={product.price}
                image1={product.image1}
                rating={product.rating}
                offer={product.offer}
                review={product.review}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Link to='/AllProducts'><button className={styles.button}>View All Products</button></Link>
      </div>
    </div>
  );
}

export default ListSlider;
