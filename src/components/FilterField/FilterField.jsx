import s from './FilterField.module.css';

const FilterField = ({ value, onChange }) => {
  return (
    <label className={s.filterTitle}> Find contacts by name
      <input className={s.filterInput} type="text" value={value} onChange={onChange}/>
    </label>
  )
}

export default FilterField;