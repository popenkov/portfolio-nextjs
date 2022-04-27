import { useRouter } from "next/router";
import { withLayout } from "../../../layout/Layout";
import styles from "./Post.module.scss";

function Post() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className={styles.postContainer}>
      <h1>Post: {id}</h1>
    </div>
  );
}

export default withLayout(Post);
