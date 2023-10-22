import React from "react";
import style from "./page.module.css";
import Button from "@/component/Button/Button";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div className={style.container}>
      <h1 className={style.catTitle}>{params.category}</h1>
      <div className={style.item}>
        <div className={style.content}>
          <h1 className={style.title}>Test</h1>
          <p className={style.description}>Description</p>
          <Button text="See More" url="#" />
        </div>
        <div className={style.imgContainer}>
          <Image
            fill={true}
            className={style.imgContainer}
            src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
          />
        </div>
      </div>
      
    </div>
  );
};

export default Category;
