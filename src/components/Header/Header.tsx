import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/img/logo.svg';
import cart from './../../assets/img/cart.svg';
import Search from './Search/Search';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/slices/cartSlice';

export default function Header() {
  const { items, totalPrice } = useSelector(selectCart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <div className="container">
      <div className="header_items">
        <Link to="/">
          <div className="header_logo">
            <img src={logo} className="logo" />
            <p className="logo_title">REACT FLOWERS</p>
          </div>
        </Link>
        <div className="header_basket">
          <Link to="/cart" className="button_basket">
            <span>{totalPrice} ₽</span>
            <div className="delimiter"></div>
            <img src={cart} className="cart" />
            <span>{totalCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
