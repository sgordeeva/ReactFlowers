import React from 'react';
import { useDispatch } from 'react-redux';
import { CartItem, addItem, minusItem, removeItem } from '../../redux/slices/cartSlice';
import style from './CartItem.module.css';

type CartItemProps = {
  id: string;
  name: string;
  price: number;
  count: number;
  image: string;
};

const CartItemBlock: React.FC<CartItemProps> = ({ id, name, price, count, image }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({ id } as CartItem));
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    dispatch(removeItem(id));
  };

  return (
    <div className={style.item}>
      <img src={image} className={style.image} />
      <p className={style.info}>{name}</p>
      <div className={style.item_count}>
        <button disabled={count == 1} onClick={onClickMinus} className={style.count_btn}>
          -
        </button>
        <p className={style.count}>{count}</p>
        <button onClick={onClickPlus} className={style.count_btn}>
          +
        </button>
      </div>
      <p className={style.price}>{price * count} ₽</p>
      <button onClick={onClickRemove} className={style.count_btn}>
        x
      </button>
    </div>
  );
};

export default CartItemBlock;
