import Icestore from '@ice/store';
import logger from '@ice/store-logger';
import todos from './todos';

const stores = new Icestore();
stores.applyMiddleware([
  logger,
]);
stores.registerStore('todos', todos);

export default stores;
