import { actionCreatorFactory, DvaModelBuilder } from 'dva-model-creator';
import * as services from '../services/todos';

interface Todo {
  name: string;
  done?: boolean;
}

export interface Todos {
  data: Todo[];
}

const namespace = 'todos';

const actionCreator = actionCreatorFactory(namespace);
export const saveTodos = actionCreator<Todo[]>('saveTodos');
export const addTodo = actionCreator<string>('addTodo');
export const fetchTodos = actionCreator('fetchTodos');

const model = new DvaModelBuilder<Todos>({ data: [] }, namespace)
  .subscript(({ dispatch }) => {
    dispatch(fetchTodos());
  })
  .case(saveTodos, (state, payload) => {
    return {
      data: payload,
    };
  })
  .takeEvery(addTodo, function *(payload, { call, put }) {
    yield call(services.addTodo, payload);
    yield put(fetchTodos);
  })
  .takeEvery(fetchTodos, function *(payload, { call, put }) {
    const todos = yield call(services.fetchTodo);
    yield put(saveTodos(todos));
  })
  .build();

export default model;
