import useSWR from '@zeit/swr';
import { useState } from 'react';
import fetch from '../fetch';

export default function (initPage) {
  const [page, setPage] = useState(initPage);
  const { data } = useSWR(`/api/users?page=${page}`, fetch, {
    revalidateOnFocus: false,
  });
  return {
    data,
    page,
    setPage,
  };
}
