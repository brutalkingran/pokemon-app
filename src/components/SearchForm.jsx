import { Input } from 'antd';

const { Search } = Input;

const SearchForm = ({ onSearch }) => (
  <>
    <Search
      placeholder="Ingresa el nombre de un Pokémon..."
      // loading
      enterButton
      onSearch={onSearch}
    />
  </>
);

export default SearchForm;