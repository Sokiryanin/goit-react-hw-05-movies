import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import {
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
  Wrapper,
} from './SearchBar.styled';

export function SearchBar() {
  const [, setSearchParams] = useSearchParams();
  const [value, setValue] = useState('');

  const changeFilter = evt => {
    setValue(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ movie: value });
    setValue('');
  };

  return (
    <Wrapper>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormBtn type="submit">
          <SearchFormBtnLabel>
            <FcSearch size="25" />
          </SearchFormBtnLabel>
        </SearchFormBtn>

        <SearchFormInput
          onChange={changeFilter}
          value={value}
          type="text"
          name="movie"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </SearchForm>
    </Wrapper>
  );
}
export default SearchBar;
