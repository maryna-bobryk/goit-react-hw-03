import s from './Contact.module.css';
import { IoMdPerson } from 'react-icons/io';
import { BsTelephoneFill } from 'react-icons/bs';

const Contact = ({ name, number, id, onDeleteContact }) => {
  return (
    <div className={s.contactCard}>
      <div className={s.contactContent}>
        <div className={s.contactInfo}>
        <IoMdPerson className={s.contactIcon} />
        <p className={s.contactText}>{name}</p>
        </div>
        <div className={s.contactInfo}>
        <BsTelephoneFill className={s.contactIcon} />
        <p className={s.contactText}>{number}</p>
        </div>
      </div>
      <button onClick={()=>{onDeleteContact(id)}}>Delete</button>
    </div>
  );
};

export default Contact;
