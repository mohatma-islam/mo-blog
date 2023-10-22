import Image from "next/image";
import style from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/component/Button/Button";

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.item}>
        <h1 className={style.title}>
          Better design for your digital products.
        </h1>
        <p className={style.description}>
          Turning your Idea into Reality. We bring together global tech Industry
        </p>
        <Button url="/portfolio" text="See our works"/>
      </div>
      <div className={style.item}>
        <Image src={Hero} alt="" className={style.image} />
      </div>
    </div>
  );
}
