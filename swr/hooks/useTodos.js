import useSWR from '@zeit/swr';
import fetch from '../fetch';

export default function () {
  return useSWR(`/api/todos`, fetch);
}
