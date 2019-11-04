"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patchRoutes = patchRoutes;

var _react = _interopRequireDefault(require("react"));

var _umi = require("umi");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function patchRoutes(routes) {
  var hasLayout = !!routes[0].routes;
  var oldRoutes = hasLayout ? routes[0].routes.slice(0) : routes.slice(0);

  function Layout(props) {
    var routes = oldRoutes.filter(function (r) {
      return r.path && !r.path.startsWith('/components');
    });
    return _react.default.createElement("div", null, _react.default.createElement("h1", null, "Navigation"), _react.default.createElement("ul", null, routes.map(function (r) {
      return _react.default.createElement("li", {
        key: r.path
      }, _react.default.createElement(_umi.Link, {
        to: r.path
      }, r.path === '/' ? 'home' : r.path.slice(1)));
    })), _react.default.createElement("button", {
      onClick: _umi.router.goBack
    }, "Go Back"), props.children);
  }

  if (hasLayout) {
    routes[0].routes = [{
      path: '/',
      component: Layout,
      routes: oldRoutes
    }];
  } else {
    routes.splice(0, oldRoutes.length, {
      path: '/',
      component: Layout,
      routes: oldRoutes
    });
  }
}