import styles from './index.css';
import Count from '../containers/Count';
import CountDisplay from './components/CountDisplay';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      <CountDisplay />
      <Count.Provider initialState={2}>
        <div>
          <div>
            <CountDisplay />
          </div>
        </div>
      </Count.Provider>
    </div>
  );
}
