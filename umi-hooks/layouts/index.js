import { Link, router } from 'umi';

export default function (props) {
  return (
    <div>
      <h1>Nav</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/use-async">use-async</Link></li>
      </ul>
      <div>
        <button onClick={router.goBack}>go back</button>
      </div>
      { props.children }
    </div>
  );
}
