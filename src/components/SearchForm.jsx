import { Input } from 'antd';

const { Search } = Input;

const SearchForm = () => (
  <>
    <Search placeholder="input search loading with enterButton" loading enterButton />
  </>
);

export default SearchForm;