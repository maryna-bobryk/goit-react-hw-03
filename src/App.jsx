import './App.css';
import initialContact from '../src/contact.json';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { useEffect, useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(()=>{
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts !==null ? JSON.parse(savedContacts) : initialContact});

    useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

  const addContact=(neuContact)=>{
    setContacts((prevContact)=>{return [...prevContact, neuContact]})
  };


  // const [inputValue, setInputValue]= useState ('');
  
  // const handleChange =(e)=>{
  //   setInputValue(e.target.value)
  // }


  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={addContact}/>
        <SearchBox />
      {/* <SearchBox onChange={handleChange}/> */}
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
