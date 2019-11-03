import { Link, router } from 'umi';
import Count from "../containers/Count";

export default function (props) {
  return (
    <div>
      <h1>Nav</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
      <button onClick={router.goBack}>go back</button>
      <Count.Provider>
        { props.children }
      </Count.Provider>
    </div>
  );
}
