import React from 'react'
import styles from './page.module.css'
import Image from "next/image";
import Button from "@/components/Button/Button"

const About = () => {
  return (
  <div className={styles.container}>

    <div className={styles.imgContainer}>
      <Image
        src="/abt.jpeg"
        fill={true}
        alt="Lemon Up Drinks"
        className={styles.img}
      />

      <div className={styles.imageText}>
        <h1 className={styles.imgTitle}>
          Refreshing Every Sip
        </h1>

        <h2 className={styles.imgDesc}>
          Serving handcrafted beverages made with fresh ingredients and vibrant flavors.
        </h2>
      </div>
    </div>

    <div className={styles.txtContainer}>

      <div className={styles.item}>
        <h1 className={styles.title}>Who Are We?</h1>

        <p className={styles.desc}>
          Lemon Up is a modern beverage brand dedicated to bringing
          refreshing and high-quality drinks to everyone. Our mission
          is simple: create delicious beverages that combine freshness,
          flavor, and consistency in every cup.
          <br />
          <br />
          From classic lemonade recipes to exciting fruit-based
          refreshments, we carefully select ingredients that deliver
          the perfect balance of taste and quality.
          <br />
          <br />
          Whether you are looking for a quick energy boost or a cool
          drink on a hot day, Lemon Up is here to make every sip
          memorable.
        </p>
      </div>

      <div className={styles.item}>
        <h1 className={styles.title}>What Do We Offer?</h1>

        <p className={styles.desc}>
          At Lemon Up, we focus on providing beverages that are fresh,
          flavorful, and crafted with care.
          <br />
          <br />
          🥤 Signature Lemonades
          <br />
          <br />
          🍓 Fruit Refreshers
          <br />
          <br />
          🧊 Iced Beverages
          <br />
          <br />
          🌿 Fresh Ingredients
          <br />
          <br />
          🚚 Fast & Reliable Delivery
        </p>

        <Button
          url="/contact"
          text="Get In Touch"
        />
      </div>

    </div>
  </div>
);
}

export default About