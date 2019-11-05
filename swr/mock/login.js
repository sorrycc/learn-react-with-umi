
export default {
  '/api/login': (req, res) => {
    // ref: http://github.com/zeit/swr/tree/master/examples/focus-revalidate/pages/api/user.js
    if (req.headers.cookie && req.headers.cookie.includes('swr-test-token=swr')) {
      // authorized
      res.json({
        loggedIn: true,
        name: 'ChenCheng',
        avatar: 'https://github.com/sorrycc.png'
      })
      return
    }
    res.json({
      loggedIn: false
    })
  },
}
