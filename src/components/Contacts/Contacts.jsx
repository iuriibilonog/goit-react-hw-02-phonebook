import s from './Contacts.module.css';

const Contacts = ({ contactsArr, deleteContact }) => {

  return (
    <ul className={s.contactsList}>
      {contactsArr.map(({ name, number, id}) =>
        <li key={id} className={s.contactItem}>
          <p className={s.contactsName}> {name}</p> : <p className={s.contactsNumber}>{number}</p>
          <button className={s.delBtn} onClick={()=> deleteContact(id)} type="button">Delete</button>
        </li>)
      
      }
    </ul>
  )
}

export default Contacts;