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
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  const [inputValue, setInputValue] = useState('');

  const changeFilter = evt => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    setSearchParams({ query: inputValue });
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
          value={inputValue}
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
