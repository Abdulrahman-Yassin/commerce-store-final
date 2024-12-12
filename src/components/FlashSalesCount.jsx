/*eslint-disable */
import { useState, useEffect } from "react";
import styles from "./FlashSalesCount.module.css"

function FlashSalesCount() {
    
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
        <div className="container">
            <div className={styles.title}>
                <span>Today’s</span>
            </div>
            <div className={styles.countDown}>
                <h2>Flash Sales</h2>
                <div className={styles.time}>
                    <div className={styles.timer}>
                        <label>days</label>
                        <div>
                            <span>{formatNumber(days)}</span>
                            <span>:</span>
                        </div>
                    </div>
                    <div className={styles.timer}>
                        <label>hours</label>
                        <div>
                            <span>{formatNumber(hours)}</span>
                            <span>:</span>
                        </div>
                    </div>
                    <div className={styles.timer}>
                        <label>minutes</label>
                        <div>
                            <span>{formatNumber(minutes)}</span>
                            <span>:</span>
                        </div>
                    </div>
                    <div className={styles.timer}>
                        <label>seconds</label>
                        <div>
                            <span>{formatNumber(seconds)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlashSalesCount
