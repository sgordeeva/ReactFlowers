import React from 'react';
import style from './Search.module.css';
import closeImg from './../../../assets/img/close.svg';
import searchImg from './../../../assets/img/search.svg';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../../redux/slices/filterSlice';

const Search: React.FC = () => {
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const onClickClear = () => {
    setValue('');
    dispatch(setSearchValue(''));
    inputRef.current?.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 500),
    [],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={style.root}>
      <img src={searchImg} className={style.search} />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={style.input}
        placeholder="Поиск букета..."
      />
      {value && <img onClick={onClickClear} src={closeImg} className={style.clear} />}
    </div>
  );
};

export default Search;
