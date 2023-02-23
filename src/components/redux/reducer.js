import { ADD_CONTACT } from './types';
import contacts from 'components/contacts';

const initialState = {
  contacts: [...contacts],
  filter: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      const newContacts = [...state.contacts, action.payload];
      return { ...state, contacts: newContacts };
    // case DELETE_BOOK:
    //   const result = state.books.filter(item => item.id !== action.payload);
    //   return { ...state, books: result };
    default:
      return state;
  }
};
