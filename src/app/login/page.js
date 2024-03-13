import React from "react";
import styles from "./login.module.css";
import Image from "next/image";
function LoginPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <Image
          src="/login.jpg"
          alt="login page "
          width={500}
          height={500}
          className={styles.image}
        />
      </div>
      <div className={styles.container}>
        <h1 className={styles.heading}>Login to continue</h1>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit" className={styles.submitButton}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
