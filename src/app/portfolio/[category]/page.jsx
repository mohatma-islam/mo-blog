import React from "react";
import style from "./page.module.css";
import Button from "@/component/Button/Button";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);

  console.log(data);

  return (
    <div className={style.container}>
      <h1 className={style.catTitle}>{params.category}</h1>
      {data.map((item) => (
        <div className={style.item} key={item.id}>
          <div className={style.content}>
            <h1 className={style.title}>{item.title}</h1>
            <p className={style.description}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={style.imgContainer}>
            <Image
              fill={true}
              className={style.imgContainer}
              src={item.image}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
