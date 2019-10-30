
export default {
  '/api/readers': (req, res) => {
    setTimeout(() => {
      res.json([
        { id: 1, name: 'sorrycc', },
        { id: 2, name: 'pigcan', },
      ]);
    }, 1000);
  },
  '/api/status': (req, res) => {
    setTimeout(() => {
      res.json({
        messageCount: 5,
      });
    }, 2000);
  },
  '/api/count': (req, res) => {
    setTimeout(() => {
      res.json({
        count: parseInt(req.query.count, 10) + 5,
      });
    }, 1000);
  },
}
