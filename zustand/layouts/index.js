import { Link, router } from 'umi';

export default function (props) {
  return (
    <div>
      <h1>Nav</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
      <button onClick={router.goBack}>go back</button>
      { props.children }
    </div>
  );
}
