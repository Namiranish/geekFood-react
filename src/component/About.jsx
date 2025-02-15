import React from 'react';
import styles from './About.module.css'; 

const About = () => {
  return (
    <div className={styles.aboutContainer}>
        <div className={styles.leftCont}>
      <img
        className={styles.image} 
        src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="house"
      />
      </div>
      <div className={styles.rightCont}>
        <div className={styles.rightContent}>
        <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, officia.</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis totam voluptates rerum officiis amet porro reprehenderit consectetur quam dolores omnis!</p>
        <button className={styles.aboutButton}>Get in touch</button>
        </div>
      </div>
    </div>
  );
}

export default About;