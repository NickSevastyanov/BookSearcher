import styles from './BookBlock.module.scss';
import { Link } from 'react-router-dom';
export type BookBlockProps = {
  id: string;
  volumeInfo: {
    imageLinks: {
      smallThumbnail: string;
    };
    categories: string[];
    title: string;
    authors: string[];
  };
};

const BookBlock: React.FC<BookBlockProps> = ({ volumeInfo, id }) => {
  return (
    <div className={styles.BookBlockContainer}>
      <div className={styles.bookblock}>
        <Link key={id} to={`/books/${id}`}>
          <img src={volumeInfo.imageLinks?.smallThumbnail} alt="bookImg" />
        </Link>
        <h3>{volumeInfo.categories}</h3>

        <h2>{volumeInfo.title}</h2>

        <h4>
          {volumeInfo.authors?.length > 1 ? volumeInfo.authors.join(', ') : volumeInfo.authors}
        </h4>
      </div>
    </div>
  );
};

export default BookBlock;
