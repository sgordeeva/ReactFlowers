import React from 'react';
import OrderForm from './OrderForm/OrderForm';
import style from './OrderPage.module.css';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/slices/cartSlice';

const OrderPage = () => {
  const { items, totalPrice } = useSelector(selectCart);
  return (
    <div className="container">
      <p className="order_title">Оформление заказа</p>
      <div className={style.root}>
        <div className={style.form}>
          <OrderForm />
        </div>
        <div className={style.results}>
          <p className={style.title}>Состав заказа</p>
          {items.map((item) => (
            <div className={style.compound}>
              <p className={style.name}>{item.name}</p>
              <p className={style.count}>x{item.count}</p>
              <p className={style.price}>{item.price * item.count} ₽</p>
            </div>
          ))}
          <div className={style.totalPrice}>
            <p className={style.title}>Итого: {totalPrice} ₽</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
