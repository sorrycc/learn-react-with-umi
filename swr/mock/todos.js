
const todos = [
  'Learn swr',
  'Buy Airpod Pro',
];

export default {
  '/api/todos': todos,
  '/api/todos/add': (req, res) => {
    todos.push(req.query.text);
    return res.json({ success: 1 });
  },
  '/api/todos/clear': (req, res) => {
    todos.splice(2, todos.length);
    return res.json({ success: 1 });
  },
}
