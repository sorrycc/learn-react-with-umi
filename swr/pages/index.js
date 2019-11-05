import useSWR from 'swr';
import fetch from '../fetch';

export default function() {
  const { data: readers, error: readersError } = useSWR('/api/readers', fetch, { revalidateOnFocus: false });
  const { data: status, error: statusError } = useSWR('/api/status', fetch, { revalidateOnFocus: false });
  const { data: count, error: countError } = useSWR(
    () => `/api/count?count=${readers.length}`,
    fetch,
    { revalidateOnFocus: false },
  );

  function renderReaders() {
    if (readersError) return <div>failed to load: {readersError.message}</div>;
    if (!readers) return <div>loading...</div>;
    return (
      <ul>
        {
          readers.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))
        }
      </ul>
    );
  }

  function renderStatus() {
    if (statusError) return <div>failed to load: {statusError.message}</div>;
    if (!status) return <div>loading...</div>;
    return (
      <div>{ status.messageCount }</div>
    );
  }

  function renderCount() {
    if (countError) return <div>failed to load: {countError.message}</div>;
    if (!count) return <div>loading...</div>;
    return (
      <div>{ count.count }</div>
    );
  }

  return (
    <div>
      <h1>Readers</h1>
      { renderReaders() }
      <h1>Status</h1>
      { renderStatus() }
      <h1>Count</h1>
      { renderCount() }
    </div>
  );
}
