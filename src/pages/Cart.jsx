import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartEmpty from '../components/Cart/CartEmpty/CartEmpty';
import CartItem from '../components/Cart/CartItem';
import { clearItems, selectCart } from '../redux/slices/cartSlice';
import style from './Cart.module.css';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { items, totalPrice } = useSelector(selectCart);
  const dispatch = useDispatch();

  const onClickClear = () => {
    dispatch(clearItems());
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <div className="container">
      <p className="cart_title">Корзина</p>
      <div className={style.clear_btn}>
        <button onClick={onClickClear} className={style.clear}>
          Очистить корзину
        </button>
      </div>
      <div>
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className={style.root}>
          <p className={style.total}>Итого: {totalPrice} ₽</p>
          <Link to="/order">
            <button className={style.checkout}>Оформить заказ</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
