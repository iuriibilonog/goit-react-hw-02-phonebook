import React, { Component } from "react";
import { v4 } from "uuid";
import "./App.css";
import ContactsForm from "./components/ContactsForm";
import Contacts from "./components/Contacts";
import FilterField from "./components/FilterField";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addNewContact = ({ name, number }) => {
    const contact = {
      id: v4(),
      name: name,
      number: number,
    };
    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const NormalizeFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(NormalizeFilter)
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactsForm addNewContact={this.addNewContact} />
        <h2>Contacts</h2>
        <Contacts contactsArr={filteredContacts} />
        <FilterField value={this.state.filter} onChange={this.changeFilter} />
      </div>
    );
  }
}

export default App;
