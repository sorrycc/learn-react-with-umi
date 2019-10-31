import { Suspense, useState, useTransition } from 'react';
import styles from './index.css';
import createResource from "../createResource";
import Person from "../components/Person";
import Num from "../components/Num";
import ErrorBoundary from "../components/ErrorBoundary";

const initialResource = createResource();

export default function() {
  const [resource, setResource] = useState(initialResource);
  const [startTransition, isPending] = useTransition({
    timeoutMs: 1000,
  });

  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      <ErrorBoundary>
        <Suspense fallback={<h1>loading...</h1>}>
          <Person resource={resource} />
        </Suspense>
        <Suspense fallback={<h1>loading...</h1>}>
          <Num resource={resource} />
        </Suspense>
      </ErrorBoundary>
      <button onClick={() => {
        startTransition(() => {
          setResource(createResource());
        });
      }}>refresh {isPending ? 'loading...' : ''}</button>
    </div>
  );
}
