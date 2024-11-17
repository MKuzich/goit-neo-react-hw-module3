import css from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilter }) => {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search contact"
      value={filter}
      onChange={(e) => onFilter(e.target.value.toLowerCase().trim())}
    />
  );
};

export default SearchBox;
