import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { BookBlockProps } from '../BookBlock';
import styles from './FullBookBlock.module.scss'
import { Skeleton } from '../BookBlock/Skeleton';

const FullBookBlock: React.FC = () => {
  const [books, setBooks] = React.useState<BookBlockProps>();

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchbooks() {
      try {
        const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyDc25tuyICvu7cjAzeU81MvmaDzDDQI_eU`);
        setBooks(data);
      } catch (error) {
        alert('No Books')
        navigate('/');
      }
    }

    fetchbooks();
  }, []);

  if (!books) {
    return <div className={styles.fullblockloading}><Skeleton/></div>;
  }

  return (
    <div className={styles.fullbookblock}>
      <div className={styles.booktitle}>{books.volumeInfo.title}</div>
      <img className={styles.bookImg} src={books.volumeInfo.imageLinks.smallThumbnail} alt="books"/>
      
      <h4>{books.volumeInfo.authors?.length > 1 ? books.volumeInfo.authors.join(',') : books.volumeInfo.authors}</h4>
      <Link to="/">
        <button>
          <span>Back</span>
        </button>
      </Link>
    </div>
  );
};

export default FullBookBlock;