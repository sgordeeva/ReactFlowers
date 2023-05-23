import React from 'react';
import ReactPaginate from 'react-paginate';
import style from './Pagination.module.css';

type PaginationProps = {
  onChangePage: (page: number) => void;
  currentPage: number;
};

const Pagination: React.FC<PaginationProps> = (props) => {
  return (
    <div>
      <ReactPaginate
        className={style.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => props.onChangePage(event.selected + 1)}
        pageRangeDisplayed={3}
        pageCount={3}
        forcePage={props.currentPage - 1}
        previousLabel="<"
      />
    </div>
  );
};

export default Pagination;
