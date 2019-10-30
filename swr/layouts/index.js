import useSWR from "@zeit/swr";
import { Link, router } from 'umi';
import fetch from '../fetch';
import {login, logout} from "../auth";

export default function (props) {
  const { data, revalidate } = useSWR('/api/login', fetch);
  if (!data) return <h1>loading...</h1>;
  if (data.loggedIn) {
    return (
      <div>
        <h1>Welcome, { data.name }</h1>
        <img src={data.avatar} width={80} height={80} />
        <button onClick={() => {
          logout();
          revalidate();
        }}>Logout</button>
        <h1>Nav</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/todos">Todos</Link></li>
          <li><Link to="/graphql">Graphql</Link></li>
        </ul>
        <button onClick={router.goBack}>go back</button>
        { props.children }
      </div>
    );
  } else {
    return (
      <div>
        <h1>Please login</h1>
        <button onClick={() => {
          login();
          revalidate();
        }}>Login</button>
      </div>
    );
  }
}
