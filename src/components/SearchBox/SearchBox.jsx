import s from './SearchBox.module.css';

const SearchBox = ({ onChange }) => {
  return (
    <div className={s.searchBoxWrapper}>
      <label className={s.searchBoxLabel}>
        <span>Finde contact by name</span> 
      <input type="text" className={s.searchBoxInput}></input>
      </label>
      
    </div>
  );
};

export default SearchBox;
