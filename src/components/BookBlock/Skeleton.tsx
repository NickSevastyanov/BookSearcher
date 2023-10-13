import ContentLoader from 'react-content-loader';
import styles from './BookBlock.module.scss';

export const Skeleton = () => (
  <ContentLoader
    className={styles.skeletonblock}
    speed={2}
    width={368}
    height={417}
    viewBox="0 0 257 417"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="0" rx="0" ry="0" width="368" height="417" />
  </ContentLoader>
);
