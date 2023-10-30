"use client";
import React, { useState } from "react";
import style from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      response.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (error) {
      console.log(error.message);
      setError(true);
    }
  };
  return (
    <div className={style.container}>
      <form action="" className={style.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          className={style.input}
          required
        />
        <input
          type="text"
          placeholder="email"
          className={style.input}
          required
        />
        <input
          type="password"
          placeholder="password"
          className={style.input}
          required
        />
        <button className={style.button}>Register</button>
      </form>
      <Link href="dashboard/login">Login with existing account</Link>
      {error && error.message}
    </div>
  );
};

export default Register;
