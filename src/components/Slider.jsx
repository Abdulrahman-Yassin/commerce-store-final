/*eslint-disable */

import styles from "./Slider.module.css";
import { Link } from "react-router-dom";

function Slider({ name, price, price2, image1, rating, offer, review }) {

  return (
      <Link to={`/${name}`}>
    <div className={styles.slide}>
      <div className={styles.image}>
        <img src={image1} alt={name} />
      </div>
      <div className={styles.captions}>
        <h5>{name}</h5>
        <div className={styles.price}>
          <span className={styles.price}>{price}</span>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default Slider;
