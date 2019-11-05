import useSWR from 'swr';
import fetch from '../fetch';

export default function () {
  return useSWR(`/api/todos`, fetch);
}
