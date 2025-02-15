import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.subcontainer}>
                <h1>Let us find your<span>Forever Food.</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>

                <div>
                    <button className={styles.btn1}>Search Now</button>
                    <button className={styles.btn2}>Know More</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
