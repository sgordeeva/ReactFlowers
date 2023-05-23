import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import style from './FullFlower.module.css';
import AddButton from '../components/FlowerBlock/AddButton';

const FullFlower: React.FC = () => {
  const [flower, setFlower] = React.useState<{
    id: string;
    image: string;
    name: string;
    price: number;
    description: string;
    info: string;
  }>();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchFlowers() {
      try {
        const { data } = await axios.get(`https://63c2c97de3abfa59bdb327f5.mockapi.io/items/` + id);
        setFlower(data);
      } catch (error) {
        alert('Ошибка получения');
      }
    }

    fetchFlowers();
  }, []);

  if (!flower) {
    return <div>Загрузка</div>;
  }

  return (
    <div className="leaf_container">
      <div className="container">
        <div className={style.root}>
          <img src={flower.image} className={style.image} />
          <div className={style.params}>
            <p className={style.name}>{flower.name}</p>
            <div className={style.description}>
              <p className={style.params_title}>ОПИСАНИЕ</p>
              <p className={style.params_text}>{flower.description}</p>
            </div>
            <div className={style.info}>
              <p className={style.params_title}>СОСТАВ БУКЕТА</p>
              <p className={style.params_text} id="params_text">
                {flower.info}
              </p>
            </div>
            <p className={style.price}>{flower.price} ₽</p>
            <div className={style.btn}>
              <AddButton
                id={flower.id}
                name={flower.name}
                price={flower.price}
                image={flower.image}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullFlower;
