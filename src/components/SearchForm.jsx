import { Input } from 'antd';

const { Search } = Input;

const SearchForm = () => (
  <>
    <Search placeholder="Ingresa el nombre de un Pokémon..." loading enterButton />
  </>
);

export default SearchForm;