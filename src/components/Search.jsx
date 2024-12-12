/*eslint-disable */

import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./Search.module.css";

import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

import Slider from "./Slider";

import SearchIcon  from "../images/Vector (2).png"

import { useContext } from 'react';
import { ProductContext } from '../ProductContext';


function Search() {

  const { products } = useContext(ProductContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  // دالة البحث
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (event.target.value === "Admin Dashboard" ) {
    navigate(`/AdminDashboard`)
    setSearchTerm('');
    setResults([]);
  }

    if (value) {
      const filteredResults = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  // دالة التنقل لصفحة تفاصيل المنتج
  const handleProductClick = (product) => {
    // الانتقال إلى صفحة تفاصيل المنتج
    navigate(`/${product.name}`);

    // تفريغ حقل البحث وإخفاء النتائج
    setSearchTerm('');
    setResults([]);
  };

  return (
    <div >
      <div className={styles.searchBar}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search"
        />
        <img src={SearchIcon} alt="" />
      </div>

      {results.length > 0 && (
        <div className={styles.results}>
          {results.map((product) => {
            return (
            <div key={product.name} onClick={() => handleProductClick(product)}>
              <Slider
                name={product.name}
                price={product.price}
                image1={product.image1}
              />
            </div>
          )
          })}
        </div>
       )} 


    </div>
  );
}

export default Search;


