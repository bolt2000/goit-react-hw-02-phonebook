import React, { Component } from 'react';
// import shortid from "shortid";
// import PropTypes from 'prop-types';
import css from './Form.module.css';



const INITIAL_STATE = {
  name: '',
  number: '',
};

class Phonebook extends Component {
  

  state = {
    ...INITIAL_STATE,
  };

  // nameInputId = shortid.generate();
  // numberInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSumbit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.onSubmit(this.state);
    // this.setState({ ...INITIAL_STATE });
    this.reset();
  };

  onSubmit = e => {
    e.preventDefault();
    const contact = {
      // id: shortid.generate(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.onSubmit(contact);
    this.reset();
  };


  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSumbit}>
        <label className={css.label} htmlFor={this.nameInputId}>
          Name
          <input
            className={css.submit}
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            // id={this.nameInputId}
          />
        </label>

        <label className={css.label} htmlFor={this.numberInputId}>
          Number
          <input
            className={css.submit}
            type="tel"
            value={this.state.number}
            onChange={this.handleChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            // id={this.numberInputId}
          />
        </label>
        <button
          className={css.button}
          type="submit"
          disabled={!this.state.name || !this.state.number}
        >
          Add contact
        </button>
      </form>
      
    );
  }
}





// Phonebook.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default Phonebook;
