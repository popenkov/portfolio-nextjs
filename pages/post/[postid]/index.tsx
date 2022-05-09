import { NextRouter, useRouter } from 'next/router';
import { withLayout } from '../../../layout/Layout';
import styles from './Post.module.scss';
import Image from 'next/image';
import type { PostType } from '../../../@types/blog';
import { wrapper } from '../../../redux/store';

const postData = [
  {
    img: {
      src: 'https://images.unsplash.com/photo-1648737962619-16e5cd465d2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      width: '600',
      height: '150',
    },
    title: 'This is the title of this post',
    date: '25.10.20',
    preview:
      'Nam inventore ut quia voluptate nemo. Nulla tenetur sed accusamus ex possimus provident eligendi ut nihil. Atque reprehenderit maiores tempora.',
    id: '0',
  },
  {
    img: {
      src: 'https://images.unsplash.com/photo-1648737962619-16e5cd465d2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      width: '316',
      height: '224',
    },
    title: 'This is the title of this post',
    date: '25.10.20',
    preview:
      'Nam inventore ut quia voluptate nemo. Nulla tenetur sed accusamus ex possimus provident eligendi ut nihil. Atque reprehenderit maiores tempora.',
    id: '0',
  },
  {
    img: {
      src: 'https://images.unsplash.com/photo-1648737962619-16e5cd465d2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      width: '316',
      height: '224',
    },
    title: 'This is the title of this post',
    date: '25.10.20',
    preview:
      'Nam inventore ut quia voluptate nemo. Nulla tenetur sed accusamus ex possimus provident eligendi ut nihil. Atque reprehenderit maiores tempora.',
    id: '0',
  },
];

//{ date, href, img, preview, title, id }: PostType

function Post(): JSX.Element {
  const router = useRouter();
  const { postid } = router.query;

  const { date, img, preview, title, id } = postData[0];

  return (
    <div className={styles.postContainer}>
      <h1>Post: {postid}</h1>
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
        </div>
      </article>
    </div>
  );
}

export default withLayout(Post);

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    ({ dispatch }) =>
    // console.log(context)
    async () => {
      // await dispatch(fetchPosts());
    }
);
