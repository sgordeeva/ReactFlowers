import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartItem, addItem, selectCartItemById } from '../../redux/slices/cartSlice';
import style from './FlowerBlock.module.css';

type AddButtonProps = {
  id: string;
  name: string;
  price: number;
  image: string;
};

const AddButton: React.FC<AddButtonProps> = ({ id, name, price, image }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      name,
      price,
      image,
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <button onClick={onClickAdd} className={style.add_btn}>
      {addedCount > 0 ? <p>В корзине {addedCount}</p> : <p>В корзину</p>}
    </button>
  );
};

export default AddButton;
