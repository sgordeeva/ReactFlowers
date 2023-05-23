import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SortItem, setSort } from '../../redux/slices/filterSlice';

type SortProps = {
  value: SortItem;
};

const Sort: React.FC<SortProps> = ({ value }) => {
  //const sort = useSelector(selectSort);
  const dispatch = useDispatch();
  const sortRef = React.useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);

  //type SortItem = { name: string; sortProperty: string };

  const list: SortItem[] = [
    { name: 'популярности(по возрастанию)', sortProperty: '-rating' },
    { name: 'популярности(по убыванию)', sortProperty: 'rating' },
    { name: 'цене(по возрастанию)', sortProperty: '-price' },
    { name: 'цене(по убыванию)', sortProperty: 'price' },
    { name: 'алфавиту(А-Я)', sortProperty: '-name' },
    { name: 'алфавиту(Я-А)', sortProperty: 'name' },
  ];

  const onClickListItem = (obj: SortItem) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  let sortVariants = list.map((el, i) => (
    <li
      key={i}
      onClick={() => onClickListItem(el)}
      className={value.sortProperty === el.sortProperty ? 'active' : ''}>
      {el.name}
    </li>
  ));

  return (
    <div ref={sortRef} className="sort">
      <div className="sort_label">
        <p>Сортировка по: </p>
        <span onClick={() => setOpen(!open)}>{value.name}</span>
      </div>
      {open && (
        <div className="sort_popup">
          <ul>{sortVariants}</ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
