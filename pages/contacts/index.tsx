import ContactsForm from "../../components/ContactsForm/ContactsForm";
import styles from "./Contacts.module.scss";
import { withLayout } from "../../layout/Layout";
import { wrapper } from "../../redux/store";
import { fetchHeader, fetchFooter } from "../../redux/reducers/headerFooter";
function Contacts() {
  return (
    <div className={styles.contactsContainer}>
      <h1 className={styles.title}>Contact Me</h1>
      <p className={styles.subtitle}>
        If you are looking to hire a product designer, I’m currently available
        for freelance work
      </p>
      <ContactsForm />
    </div>
  );
}

export default withLayout(Contacts);

export const getServerSideProps = wrapper.getServerSideProps(
  ({ dispatch }) =>
    async () => {
      await dispatch(fetchHeader());
      await dispatch(fetchFooter());
    }
);
