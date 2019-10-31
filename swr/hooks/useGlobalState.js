import useSWR from '@zeit/swr';

let state = {
  name: 'sorrycc',
};

export default function () {
  const { data, revalidate } = useSWR('globalState', () => Promise.resolve(state), {
    revalidateOnFocus: false,
  });
  return {
    data,
    setData(newData) {
      state = {
        ...data,
        ...newData,
      };
      revalidate();
    },
  };
}
