import React from 'react'
import style from './footer.module.css'
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className={style.container}>
        <div>@2023 Mo Blogs. All rights reserved.</div>
        <div className={style.social}>
          <Image src="/1.png" width={15} height={15} className={style.icon} alt="Mo Blog Facebook"/>
          <Image src="/2.png" width={15} height={15} className={style.icon} alt="Mo Blog Instagram"/>
          <Image src="/3.png" width={15} height={15} className={style.icon} alt="Mo Blog Twitter"/>
          <Image src="/4.png" width={15} height={15} className={style.icon} alt="Mo Blog Youtube"/>
        </div>
    </div>
  )
}

export default Footer;