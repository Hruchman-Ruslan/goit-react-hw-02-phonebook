import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

// import { Formik, Form, Field } from 'formik';

import { Form, Label, Input, Button } from './Form.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};
export class FormContact extends Component {
  state = { ...INITIAL_STATE };

  loginInputName = nanoid();
  loginInputnumber = nanoid();

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={this.loginInputName}
          onChange={this.handleChange}
          value={name}
        />
        <Label>Number</Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={this.loginInputnumber}
          onChange={this.handleChange}
          value={number}
        />
        <Button type="submit">Add Contacts</Button>
      </Form>
    );
  }
}

FormContact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
