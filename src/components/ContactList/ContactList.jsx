import s from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts, onDeleteContact}) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(contact => (
        <li key={contact.id} className={s.contactItem} >
          <Contact name={contact.name} number={contact.number} id={contact.id} onDeleteContact={onDeleteContact}/>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
