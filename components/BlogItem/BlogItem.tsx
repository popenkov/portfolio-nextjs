import React from "react";
import type { PostType } from "../../@types/blog";
import Image from "next/image";
import styles from "./BlogItem.module.scss";
import Link from "next/link";

function BlogItem({
  date,
  href,
  img,
  preview,
  title,
  id,
}: PostType): JSX.Element {
  return (
    <article className={styles.item}>
      <Image
        src={img.src}
        layout="responsive"
        width={img.width}
        height={img.height}
        objectFit="cover"
        className={styles.img}
      />

      <div className={styles.description}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.date}>{date}</p>
        <p className={styles.preview}>{preview}</p>
        <Link href={href}>
          <a className={styles.link}>Read more</a>
        </Link>
      </div>
    </article>
  );
}

export default BlogItem;
