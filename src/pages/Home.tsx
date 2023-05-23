import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Categories from '../components/Categories/Categories';
import FlowerBlock from '../components/FlowerBlock/FlowerBlock';
import Skeleton from '../components/FlowerBlock/Skeleton';
import Pagination from '../components/Pagination/Pagination';
import Sort from '../components/Sort/Sort';
import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice';
import { Status, fetchFlowers } from '../redux/slices/flowersSlice';
import { RootState, useAppDispatch } from '../redux/store';
import Search from '../components/Header/Search/Search';
import SwiperComponent from '../components/SwiperComponent/SwiperComponent';
import ScrollToTop from '../common/ScrollToTop';

const Home: React.FC = () => {
  const { categoryId, sort, currentPage, searchValue } = useSelector(
    (state: RootState) => state.filter,
  );
  const sortType = sort.sortProperty;
  const { items, status } = useSelector((state: RootState) => state.flowers);
  const dispatch = useAppDispatch();

  const onChangePage = (number: number) => {
    dispatch(setCurrentPage(number));
  };

  const onClickCategory = useCallback((i: number) => {
    dispatch(setCategoryId(i));
  }, []);

  const getFlowers = async () => {
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(fetchFlowers({ order, sortBy, category, search, currentPage }));
  };

  useEffect(() => {
    getFlowers();
  }, [categoryId, sortType, searchValue, currentPage]);

  const flowers = items.map((obj: any) => <FlowerBlock {...obj} key={obj.id} />);
  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div>
      <div className="swiper_container">
        <SwiperComponent />
      </div>
      <div className="leaf_container">
        <div className="container">
          <p className="catalog_title">Каталог</p>
          <div className="catalog">
            <div className="content_top">
              <Sort value={sort} />
              <Search />
            </div>
            <div className="content_main">
              {status === Status.ERROR ? (
                <div>
                  <h1>Ошибка загрузки</h1>
                </div>
              ) : (
                <div className="content_items">{status == Status.LOADING ? skeleton : flowers}</div>
              )}
              <Categories value={categoryId} onClickCategory={onClickCategory} />
            </div>
            <Pagination currentPage={currentPage} onChangePage={onChangePage} />
          </div>
          <ScrollToTop />
        </div>
      </div>
    </div>
  );
};

export default Home;
