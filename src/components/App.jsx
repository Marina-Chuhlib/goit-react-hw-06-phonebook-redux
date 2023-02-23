import { Provider } from 'react-redux';
import React, { useState, useEffect } from 'react';

import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';

import { store } from './redux/store';

import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

// import contactsList from './contacts';
import { addContact } from './redux/actions';

import css from './App.module.css';

const App = () => {
  const contacts = useSelector(store => store.contacts);
  const [filter, setFilter] = useState('');
  console.log(contacts);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   localStorage.setItem('my-contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const isDuplicate = name => {
    const normalized = name.toLowerCase();
    const result = contacts.find(({ name }) => {
      return normalized === name.toLowerCase();
    });

    return Boolean(result);
  };

  const handleAddContact = ({ name, number }) => {
    if (isDuplicate(name)) {
      alert(`${name} is already in contacts`);
      return false;
    }

    const action = addContact({ name, number });
    dispatch(action);
  };

  // const addContact = ({ name, number }) => {
  //   if (isDuplicate(name)) {
  //     alert(`${name} is already in contacts`);
  //     return false;
  //   }

  //   setContacts(prevContacts => {
  //     const newContact = {
  //       id: nanoid(),
  //       name,
  //       number,
  //     };

  //     return [newContact, ...prevContacts];
  //   });

  //   return true;
  // };

  // const deleteContact = id => {
  //   setContacts(prevContacts =>
  //     prevContacts.filter(contact => contact.id !== id)
  //   );
  // };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  const handleFilter = e => {
    setFilter(e.currentTarget.value);
  };

  // const visibleContacts = getVisibleContacts();
  // const isContacts = Boolean(visibleContacts.length);

  return (
    <Provider store={store}>
      <div className={css.wrapper}>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={handleAddContact} />

        <h2>Contacts</h2>
        {/* <Filter value={filter} onChange={handleFilter} /> */}

        {/* {isContacts && ( */}
        <ContactsList
        // contacts={visibleContacts}
        // deleteContact={deleteContact}
        />
        {/* )} */}
        {/* {!isContacts && <p className={css.text}>No contacts in list</p>} */}
      </div>
    </Provider>
  );
};

export default App;
