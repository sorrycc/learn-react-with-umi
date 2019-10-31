import { useState } from "react";
import { useAsync } from '@umijs/hooks';

export default function() {
  const [ id, setId ] = useState(0);
  const { data, loading, run, cancel, error } = useAsync(
    () => fetch(`https://randomuser.me/api?id=${id}`).then(r => r.json()),
    [id],
  );
  return (
    <div>
      <h1>Page use-async</h1>
      <div>
        <button onClick={run}>reload</button>
        <button onClick={cancel}>cancel</button>
        <button onClick={() => setId(id => id + 1)}>increment id: {id}</button>
      </div>
      <div>
        { loading ? 'loading...' : null }
        { (!loading && data) ? <h2>{data.results[0].email}</h2> : '' }
      </div>
    </div>
  );
}
