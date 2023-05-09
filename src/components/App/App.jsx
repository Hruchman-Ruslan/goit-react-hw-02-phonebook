import { Component } from 'react';

import contactDefault from '../data/contacts.json';

import { FormContact } from 'components/Form/FormContact/Form';
import { ContactList } from 'components/Form/Contacts/Contacts';
import { Filter } from 'components/Form/Filter/Filter';
import { nanoid } from 'nanoid';

import { Container, Section, Title, TitleContacts } from '../index';

export class App extends Component {
  state = {
    contacts: contactDefault,
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const existingContact = contacts.find(contact => contact.name === name);
    if (existingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const newContact = { id: nanoid(), name, number };
    this.setState({
      contacts: [...contacts, newContact],
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilterName = () => {
    const { filter, contacts } = this.state;
    const normalisedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalisedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const contacts = this.getFilterName();
    return (
      <Container>
        <Section>
          <Title>Phonebook</Title>
          <FormContact onSubmit={this.addContact} />
        </Section>

        <Section>
          <TitleContacts>Contacts</TitleContacts>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList contacts={contacts} onDelete={this.deleteContact} />
        </Section>
      </Container>
    );
  }
}
