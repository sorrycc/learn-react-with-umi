import { request } from 'graphql-request';
import useSWR from "swr";

const API = 'https://api.graph.cool/simple/v1/movies';

export default function() {
  const { data, error } = useSWR(
    `{
      Movie(title: "Inception") {
        releaseDate
        actors {
          name
        }
      }
    }`,
    query => request(API, query),
  );

  return (
    <div>
      <h1>Graphql</h1>
      {
        data ? (<div>
          Movie Release Date: {data.Movie.releaseDate}
        </div>) : 'loading...'
      }
    </div>
  );
}
