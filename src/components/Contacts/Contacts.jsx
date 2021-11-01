const Contacts = ({ contactsArr }) => {
  console.log(contactsArr)
  return (
    <ul>
      {contactsArr.map(contact => 
        <li key={contact.id}>
         <p> {contact.name} : {contact.number}</p>
        <button type="button">Del</button>
        </li>)
      
      }
    </ul>
  )
}

export default Contacts;