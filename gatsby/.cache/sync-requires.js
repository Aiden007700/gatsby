const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/aiden/webdev/gatsby/gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/home/aiden/webdev/gatsby/gatsby/src/pages/404.tsx"))),
  "component---src-pages-beers-tsx": hot(preferDefault(require("/home/aiden/webdev/gatsby/gatsby/src/pages/beers.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/home/aiden/webdev/gatsby/gatsby/src/pages/index.tsx"))),
  "component---src-pages-orders-tsx": hot(preferDefault(require("/home/aiden/webdev/gatsby/gatsby/src/pages/orders.tsx"))),
  "component---src-pages-pizzas-tsx": hot(preferDefault(require("/home/aiden/webdev/gatsby/gatsby/src/pages/pizzas.tsx"))),
  "component---src-pages-slice-masters-tsx": hot(preferDefault(require("/home/aiden/webdev/gatsby/gatsby/src/pages/sliceMasters.tsx")))
}

