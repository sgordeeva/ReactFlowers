import React from 'react';

type CategoriesProps = {
  value: number;
  onClickCategory: (i: number) => void;
};

const Categories: React.FC<CategoriesProps> = (props) => {
  const categories = [
    'Все цветы',
    'Цветы поштучно',
    'Розы',
    'Хризантемы',
    'Альстромерии',
    'Тюльпаны',
    'Гвоздики',
    'Герберы',
    'Гортензии',
    'Лилии',
    'Орхидеи',
    'Ромашки',
    'Эустома',
    'Гипсофилы',
  ];

  return (
    <div className="categories">
      <p className="categories_title">Категории</p>
      <ul>
        {categories.map((c, i) => (
          <li
            key={i}
            onClick={() => props.onClickCategory(i)}
            className={props.value === i ? 'active' : ''}>
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
