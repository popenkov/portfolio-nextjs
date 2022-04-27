import { withLayout } from "../../layout/Layout";
import styles from "./Blog.module.scss";

import { PostType } from "../../@types/blog";
import BlogItem from "../../components/BlogItem/BlogItem";
import { fetchPosts } from "../../redux/reducers/blog";
import { fetchFooter, fetchHeader } from "../../redux/reducers/headerFooter";
import { wrapper } from "../../redux/store";
import { useAppSelector } from "../../redux/hooks";

function Blog(): JSX.Element {
  const { blog } = useAppSelector((state) => state.blog);
  return (
    <section className={styles.blog}>
      <h2 className={styles.blogTitle}>Blog</h2>
      <div className={styles.blogContainer}>
        {blog &&
          blog.map((post: PostType) => {
            return <BlogItem {...post} />;
          })}
      </div>
    </section>
  );
}

export default withLayout(Blog);

export const getServerSideProps = wrapper.getServerSideProps(
  ({ dispatch }) =>
    async () => {
      await dispatch(fetchHeader());
      await dispatch(fetchFooter());
      await dispatch(fetchPosts());
    }
);
