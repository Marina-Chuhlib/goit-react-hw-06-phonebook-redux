export const getAllContacts = store => store.contacts;

export const getFilteredContacts = ({ name, filter }) => {
  if (!filter) {
    return name;
  }
  const normalizedFilter = filter.toLowerCase();
  const result = getAllContacts.filter(({ name }) => {
    //contacts
    return name.toLowerCase().includes(normalizedFilter);
  });

  return result;
};
export const getFilter = ({ filter }) => filter;
