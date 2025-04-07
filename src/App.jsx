import './App.css';
import initialContact from '../src/contact.json';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { useEffect, useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = localStorage.getItem('contacts');
  //   return savedContacts !== null ? JSON.parse(savedContacts) : initialContact;
  // });

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    const localContacts = savedContacts ? JSON.parse(savedContacts) : [];
    return localContacts.length > 0 ? localContacts : initialContact;
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = neuContact => {
    setContacts(prevContact => {
      return [...prevContact, neuContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevContact => {
      return prevContact.filter(contact => contact.id !== contactId);
    });
  };
  
  const handleChange = e => {
    setInputValue(e.target.value);
  };
  const visibleContact = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={inputValue} onChange={handleChange} />
      <ContactList contacts={visibleContact} onDeleteContact={deleteContact} />
    </div>
  );
}

export default App;
