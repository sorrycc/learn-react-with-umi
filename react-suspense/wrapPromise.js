
export default function wrapPromise(promise) {
  let status = 'pending';
  let result = '';
  let suspender = promise.then(r => {
    status = 'success';
    result = r;
  }, e => {
    status = 'error';
    result = e;
  });

  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      }
      return result;
    }
  }
}
