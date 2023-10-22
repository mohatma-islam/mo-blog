import React from "react";
import style from "./page.module.css";
import Image from "next/image";
import Button from "@/component/Button/Button";
const Contact = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Let's keep in Touch</h1>
      <div className={style.content}>
        <div className={style.imgContainer}>
          <Image src="/contact.png" fill={true} alt="" className={style.image} />
        </div>
        <form className={style.form} action="">
          <input type="text" placeholder="name" className={style.input} />
          <input type="text" placeholder="email" className={style.input} />
          <textarea
            placeholder="message"
            className={style.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
