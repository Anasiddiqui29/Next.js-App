"use client"

import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import { constants } from 'node:buffer';
import useSWR from 'swr'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {

  // const [data , setData] = useState([]);
  // const [err , setErr] = useState(false)
  // const [isLoading , setLoading] = useState(false)

  // for side quest rendering we use useEffect
  // Problem with useEffect: 
  // setErr , isLoading is not available in useEffect 
  // Old way to fetch data
  // useEffect( () => {
  //   const getData = async () => {

  //     setLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts" , {
  //       cache: "no-store"
  //     });

  //     if (!res.ok)
  //     {
  //       setErr(true)
  //     }
      
  //     const data = await res.json();

  //     setData(data);
  //     setLoading(false);

  //   };
  //   getData();
  // } , []);

  // New way to fetch data 

  const session = useSession()
  
  const router = useRouter();
  
  //NEW WAY TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }


  console.log(data)

  return (
  <div className={styles.container}>
    <div className={styles.header}>
      <h1 className={styles.title}>🍋 Lemon Up Dashboard</h1>
      <p className={styles.welcome}>
        Welcome back, {session?.data?.user.name}
      </p>
    </div>

    <div className={styles.statsGrid}>
      <div className={styles.card}>
        <h3>Today's Sales</h3>
        <p className={styles.value}>PKR 25,400</p>
      </div>

      <div className={styles.card}>
        <h3>Orders Today</h3>
        <p className={styles.value}>128</p>
      </div>

      <div className={styles.card}>
        <h3>Customers</h3>
        <p className={styles.value}>84</p>
      </div>

      <div className={styles.card}>
        <h3>Revenue Growth</h3>
        <p className={styles.value}>+12%</p>
      </div>
    </div>

    <div className={styles.section}>
      <h2>🥤 Popular Drinks</h2>

      <div className={styles.drinksGrid}>
        <div className={styles.drinkCard}>
          <h3>Lemon Mint Cooler</h3>
          <p>53 orders today</p>
        </div>

        <div className={styles.drinkCard}>
          <h3>Mango Splash</h3>
          <p>42 orders today</p>
        </div>

        <div className={styles.drinkCard}>
          <h3>Berry Fizz</h3>
          <p>35 orders today</p>
        </div>
      </div>
    </div>

    <div className={styles.section}>
      <h2>📦 Inventory Status</h2>
      <ul className={styles.inventory}>
        <li>Lemons: 120 kg</li>
        <li>Sugar Syrup: 45 bottles</li>
        <li>Mint Leaves: 15 kg</li>
        <li>Cups: 500 units</li>
      </ul>
    </div>
  </div>
);
}

export default Dashboard