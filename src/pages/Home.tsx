import React from 'react';
import BookBlock from '../components/BookBlock';

import { useSelector } from 'react-redux';

import { selectbooksData } from '../redux/books/selectors';
import { Skeleton } from '../components/BookBlock/Skeleton';

const Home: React.FC = () => {
  const [visible, setVisible] = React.useState(10);
  const { items, totalItems, status } = useSelector(selectbooksData);

  const handleLoadMore = () => {
    setVisible((prev) => prev + 30);
  };

  const books =
    totalItems !== 0 ? (
      items.slice(0, visible).map((obj: any) => <BookBlock key={obj.id} {...obj} />)
    ) : (
      <div className="emptybooks">Search For Your Book</div>
    );

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div>
      <div className="ContentContainer">
        {status === 'error' ? (
          <div className="content__error-info">
            <h2>There are no Books 😕</h2>
          </div>
        ) : (
          <div className="ContentContainer">{status === 'loading' ? skeletons : books}</div>
        )}
      </div>
      {status === 'success' && (
        <div className="loadmore">
          <button onClick={handleLoadMore}>Load more</button>
        </div>
      )}
    </div>
  );
};

export default Home;
