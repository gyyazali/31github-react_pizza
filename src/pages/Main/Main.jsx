import React from 'react';
import '../../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/slices/filterSlice';
import Skeleton from '../../components/Skeleton/Skeleton';
import PizzaCard from '../../components/Pizza_card/Pizza_card';
import Pagination from '../../components/Pagination/Pagination';
import Category from '../../components/Category/Category';
import Sort from '../../components/Sort/Sort';

const Main = ({ isLoading, items, onClickCategory }) => {
  const pizzas = items.map((obj) => <PizzaCard key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
  const { currentPage } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const onChangePage = (num) => {
    dispatch(setCurrentPage(num));
  };

  return (
    <div className="pizzas">
      <nav className="nav">
        <Category onClickCategory={onClickCategory} />
        <Sort />
      </nav>
      <p className="pizzas_title">Все пиццы</p>
      <div className="pizza_cards_wrapper">
        <div className="pizza_cards">{isLoading ? skeletons : pizzas}</div>
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Main;
