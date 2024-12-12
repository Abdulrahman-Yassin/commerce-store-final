/*eslint-disable */

import { useRef } from "react"
import styles from "./AdAndCategories.module.css"

import Phon from "../images/7215f42e5883a64157f0aa3a4d1a866a.jpeg"
import Arrow from "../images/icons_arrow-up.png"
import Logo from "../images/1200px-Apple_gray_logo 1.png"
import Icon from "../images/arrow.png"

function AdAndCategories() {

    const img = useRef(null)

    const UP = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
    }

    return(
            <div className={styles.slider} >
                <div className={styles.ad}>
                    <div>
                        <div className={styles.name}>
                            <img src={Logo} alt="" />
                            <p>iPhone 14 Series</p>
                        </div>
                        <p className={styles.offer}> Up to 10% off Voucher</p>
                        <div className={styles.shopNow}>
                            <p>Shop Now</p>
                            <img src={Icon} alt="" />
                        </div>
                    </div>
                    <img className={styles.Img} src={Phon} alt=""  loading="lazy" />
                    <img className={styles.img} src={Arrow} alt="" ref={img} onClick={UP}  loading="lazy" />
                </div>
            </div>
    )
}

export default AdAndCategories
