import ContactsForm from "../../components/ContactsForm/ContactsForm";
import styles from "./Contacts.module.scss";
import { withLayout } from "../../layout/Layout";
function Contacts() {
  return (
    <div className={styles.contactsContainer}>
      Contacts
      <ContactsForm />
    </div>
  );
}

export default withLayout(Contacts);
