/*eslint-disable */

import { useState, useEffect } from 'react';
import styles from './Ad.module.css'

import Frame694 from "../images/Frame694.png"

function Ad() {

    let [days, setDays] = useState(0);
    let [hours, setHours] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let countDownDate = new Date("dece 14, 2024 23:59:59").getTime();

        let timer = setInterval(() => {

            let dateNow = new Date().getTime();
            
            let diffDate = countDownDate - dateNow;

            let daysRemaining = Math.floor(diffDate / (1000 * 60 * 60 * 24));
            let hoursRemaining = Math.floor((diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutesRemaining = Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60));
            let secondsRemaining = Math.floor((diffDate % (1000 * 60)) / 1000);

            setDays(daysRemaining);
            setHours(hoursRemaining);
            setMinutes(minutesRemaining);
            setSeconds(secondsRemaining);

            if (diffDate < 0) {
                clearInterval(timer);
                setDays(0);
                setHours(0);
                setMinutes(0);
                setSeconds(0);
            }
        }, 1000)});

        const formatNumber = (num) => {
            return num < 10 ? `0${num}` : num;
        };

    return(
        <div className={styles.container}>
            <div className={styles.ad}>
                <h6>Categories</h6>
                <h2>Enhance Your Music Experience</h2>
                <div className={styles.features}>
                    <div>
                        <span>{formatNumber(days)}</span>
                        <span>days</span>
                    </div>
                    <div>
                        <span>{formatNumber(hours)}</span>
                        <span>hours</span>
                    </div>
                    <div>
                        <span>{formatNumber(minutes)}</span>
                        <span>Minutes</span>
                    </div>
                    <div>
                        <span>{formatNumber(seconds)}</span>
                        <span>Seconds</span>
                    </div>
                </div>
                <button>Buy Now!</button>
            </div>
            <div className={styles.image}>
                <img src={Frame694} alt=""  loading="lazy" />
            </div>
        </div>
    )
}

export default Ad