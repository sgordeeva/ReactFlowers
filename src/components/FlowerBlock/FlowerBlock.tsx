import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CartItem, addItem, selectCartItemById } from '../../redux/slices/cartSlice';
import style from './FlowerBlock.module.css';
import AddButton from './AddButton';

type FlowerBlockProps = {
  id: string;
  name: string;
  price: number;
  image: string;
};

const FlowerBlock: React.FC<FlowerBlockProps> = ({ id, name, price, image }) => {
  return (
    <div className={style.item}>
      <Link to={`/flower/${id}`}>
        <img src={image} />
        <p className={style.title}>{name}</p>
      </Link>
      <div className={style.flower_bottom}>
        <div className={style.price}>
          <p>{price} ₽</p>
        </div>
        <div>
          <AddButton id={id} name={name} price={price} image={image} />
        </div>
      </div>
    </div>
  );
};

export default FlowerBlock;
