import React from 'react';
import { Link, router } from 'umi';

export function patchRoutes(routes) {
  const hasLayout = !!routes[0].routes;
  const oldRoutes = hasLayout ? routes[0].routes.slice(0) : routes.slice(0);

  function Layout(props) {
    const routes = oldRoutes.filter(r => r.path && !r.path.startsWith('/components'));
    return (
      <div>
        <h1>Navigation</h1>
        <ul>
          {
            routes.map(r => <li key={r.path}>
              <Link to={r.path}>{r.path === '/' ? 'home' : r.path.slice(1)}</Link>
            </li>)
          }
        </ul>
        <button onClick={router.goBack}>Go Back</button>
        {
          props.children
        }
      </div>
    );
  }

  if (hasLayout) {
    routes[0].routes = [
      {
        path: '/',
        component: Layout,
        routes: oldRoutes,
      },
    ];
  } else {
    routes.splice(0, oldRoutes.length, {
      path: '/',
      component: Layout,
      routes: oldRoutes,
    });
  }
}
