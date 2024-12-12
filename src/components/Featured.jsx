/*eslint-disable */

import styles from './Featured.module.css'

import Perfume from "../images/3.png"
import Right from "../images/Icon-secure.png"
import Customer from "../images/Icon-Customer service.png"
import Delivery from "../images/icon-delivery.png"
import Light from "../images/2.png"
import playStation from "../images/1.png"

function Featured() {
    return(
        <div className={styles.container}>
            <div className={styles.product}>
                <div>
                    <div className={styles.playStation}>
                        <img src={playStation} alt=""  loading="lazy"/>
                        <div>
                            <h4>PlayStation 5</h4>
                            <p>Black and White version of the PS5 <br /> coming out on sale.</p>
                            <span>Shop Now</span>
                        </div>
                    </div>
                </div>
                <div className={styles.box1}>
                    <div className={styles.Women}>
                        <div>
                            <h4>Women’s Collections</h4>
                            <p>Featured woman collections that give you another vibe.</p>
                            <span>Shop Now</span>
                        </div>
                    </div>
                    <div className={styles.box2}>
                        <div className={styles.Speakers}>
                            <img src={Light} alt=""  loading="lazy"/>
                            <div>
                                <h4>Speakers</h4>
                                <p>Amazon wireless speakers</p>
                                <span>Shop Now</span>
                            </div>
                        </div>
                        <div className={styles.Perfume}>
                            <img src={Perfume} alt=""  loading="lazy"/>
                            <div>
                                <h4>Perfume</h4>
                                <p>GUCCI INTENSE OUD EDP</p>
                                <span>Shop Now</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.features}>
                <div>
                    <img src={Delivery} alt=""  loading="lazy"/>
                    <h6>FREE AND FAST DELIVERY</h6>
                    <p>Free delivery for all orders over $140</p>
                </div>
                <div>
                    <img src={Customer} alt=""  loading="lazy"/>
                    <h6>24/7 CUSTOMER SERVICE</h6>
                    <p>Friendly 24/7 customer support</p>
                </div>
                <div>
                    <img src={Right} alt=""  loading="lazy"/>
                    <h6>MONEY BACK GUARANTEE</h6>
                    <p>We reurn money within 30 days</p>
                </div>
            </div>
        </div>
    )
}

export default Featured