import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      {contacts.length > 0 ? (
        <ul className={css.list}>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <Contact contact={contact} onDelete={onDelete} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts found</p>
      )}
    </>
  );
};

export default ContactList;
