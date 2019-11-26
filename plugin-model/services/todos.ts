
export async function addTodo(text: string) {
  await fetch(`/api/todos/add?text=${text}`);
}

export async function fetchTodo() {
  const res = await fetch(`/api/todos`);
  const ret = await res.json();
  return ret;
}
