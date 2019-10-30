import { router } from "umi";
import useUsers from "../hooks/useUsers";

export default function() {
  const { data, page, setPage } = useUsers('1');

  function changePageHandler(currPage) {
    setPage(currPage);
  }

  function renderPages() {
    const ret = [];
    let index = 1;
    while (index <= data.totalPages) {
      ret.push(<a style={{
        padding: '4px',
        border: '1px solid #ccc',
        color: parseInt(page, 10) === index ? 'red' : 'black',
      }} key={index} onClick={changePageHandler.bind(null, index)}>{index}</a>);
      index += 1;
    }
    return ret;
  }

  return (
    <div>
      <h1>Users</h1>
      {
        data ? (<>
          <ul>
            {
              data.users.map(u => {
                return <li key={u.id}>[{u.id}] { u.name }</li>;
              })
            }
          </ul>
          <div>
            {
              renderPages()
            }
          </div>
        </>) : 'loading...'
      }
      <hr />
      <button onClick={() => {
        router.goBack();
      }}>go back</button>
    </div>
  );
}
